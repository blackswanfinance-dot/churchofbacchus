// Public planning data, not a payment ledger or token issuer.
export const projects = [
  { id: 'land', name: 'Land & roots', stamp: 'LAND', purpose: 'Supported the acquisition of land for the Church of Bacchus', budget: 4500000 },
  { id: 'theater', name: 'Theatre of Bacchus', stamp: 'THEATRE', purpose: 'Supported the creation of the Theatre of Bacchus', budget: 8000000 },
  { id: 'cellar', name: 'Wine cellar', stamp: 'CELLAR', purpose: 'Supported the creation of the Church wine cellar', budget: 250000 },
  { id: 'trail', name: 'Nature trail & labyrinth', stamp: 'NATURE', purpose: 'Supported the creation of the nature trail and labyrinth', budget: 300000 },
  { id: 'food', name: 'The travelling table', stamp: 'COMMUNITY', purpose: 'Supported the Church food truck and its community meals', budget: 250000 },
];

// Parse decimal input without rounding an imprecise floating-point dollar value.
// Limit is a preview input bound, not a donation minimum/maximum policy.
export function parseGiftCents(value) {
  if (typeof value !== 'string' || !/^(?:0|[1-9]\d{0,6})(?:\.\d{1,2})?$/.test(value.trim())) return null;
  const [whole, fraction = ''] = value.trim().split('.');
  const cents = Number(whole) * 100 + Number(fraction.padEnd(2, '0'));
  return cents > 0 && cents <= 100000000 ? cents : null;
}

export function sampleStamp(projectId, cents) {
  const project = projects.find(project => project.id === projectId);
  if (!project || !Number.isSafeInteger(cents) || cents < 1 || cents > 100000000) return null;
  return { projectId, purpose: project.purpose, grossCents: cents, status: 'Unsigned sample — no contribution received', tokenCount: 1 };
}

export function giftInquiry(projectId, cents) {
  const stamp = sampleStamp(projectId, cents);
  if (!stamp) return null;
  const project = projects.find(project => project.id === projectId);
  const amount = (cents / 100).toFixed(2);
  const subject = `Project gift inquiry — ${project.name}`;
  const body = `Hello Church of Bacchus,\n\nI would like to arrange a $${amount} contribution designated to ${project.name}. Please confirm how this gift will be recorded, its permitted uses and what happens if the plan changes before I send money.\n\nI understand the online stamp is an unsigned design sample and does not confirm a donation or issue a token.\n\nThank you`;
  return `mailto:bacchuschurch@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
