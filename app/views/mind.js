// Mind tools: ideas about how people think and work, each with what it means for exams and one task on paper.
// Content: data/mind-tools.json (our own sketches; validated by build-index). The same for every member, any class.
// Routes: #/mind (all tools) · #/mind/<id> (the deck, opened at that tool)
import { html, raw, icon, largeTitle, esc, emptyState } from '../ui.js';
import { data } from '../data.js';
import { deck } from './cards.js';

/** The list, plus the tool of the day (one per calendar day, same for everyone). */
export async function mindTools() {
  const d = await data.mindTools();
  return d?.tools || [];
}
export function toolOfTheDay(tools, day = new Date()) {
  if (!tools.length) return null;
  const n = Math.floor(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate()) / 86400000);
  return tools[n % tools.length];
}
/** Back of a card: the idea, then what it means in exams, then the task on paper. */
export const backOf = (t) => `${t.idea}\n\n**In your exams:** ${t.exam}\n\n**On paper:** ${t.paper}`;

export async function mind(route) {
  const tools = await mindTools().catch(() => []);
  if (route.sub) {
    const start = Math.max(0, tools.findIndex((t) => t.id === route.sub));
    const cards = tools.map((t) => ({ id: `mind:${t.id}`, uid: `mind:${t.id}`, kind: 'mind', title: t.title, svg: t.svg, back: backOf(t), colour: t.colour, dense: true }));
    return { ...deck({ title: 'Mind tools', cards, back: '#/mind', start, plain: true, empty: 'Mind tools are on their way' }), tab: 'mind' };
  }
  if (!tools.length) return { title: 'Mind tools', tab: 'mind', html: emptyState({ icon: 'mind', title: 'Mind tools are on their way', text: 'Check your connection and open this page again.' }) };
  const today = toolOfTheDay(tools);
  return {
    title: 'Mind tools', largeTitle: true, tab: 'mind',
    html: html`${largeTitle('Mind tools', { eyebrow: `${tools.length} ideas for every class` })}
      <p class="t-2 mb-4">How people think and work, and what each idea means for your exams. Every card ends with a task for pen and paper.</p>
      <a class="btn btn--block mb-4" href="#/mind/${today.id}">${raw(icon('cards'))}<span>Swipe through all ${tools.length}</span></a>
      <div class="mind-grid">
        ${tools.map((t) => raw(`<a class="mind-tile pressable" href="#/mind/${esc(t.id)}" style="--unit:#${esc(t.colour)}">
          <span class="mind-tile__art" data-art="${esc(t.id)}" aria-hidden="true"></span>
          <span class="mind-tile__title">${esc(t.title)}${t.id === today.id ? ' <span class="badge mind-tile__today">Today</span>' : ''}</span>
          <span class="mind-tile__line">${esc(t.line)}</span></a>`))}
      </div>
      <p class="t-footnote t-3 mt-6">Our own sketches and wording. The numbers in rules of thumb (like 80/20) are rough; the habits are what count.</p>`,
    async mount(el) {
      const { cleanSvg } = await import('../markdown.js');
      for (const box of el.querySelectorAll('[data-art]')) {
        const t = tools.find((x) => x.id === box.dataset.art);
        if (t) box.innerHTML = await cleanSvg(t.svg);
      }
    },
  };
}
