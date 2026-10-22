// Public planning data, not a payment ledger or token issuer.
export const projects = [
  { id: 'land', name: 'Land & roots', stamp: 'LAND', purpose: 'An interest in future land for the Church of Bacchus', budget: 4500000 },
  { id: 'theater', name: 'Theatre of Bacchus', stamp: 'THEATRE', purpose: 'An interest in the future Theatre of Bacchus', budget: 8000000 },
  { id: 'cellar', name: 'Wine cellar', stamp: 'CELLAR', purpose: 'An interest in the future Church wine cellar', budget: 250000 },
  { id: 'trail', name: 'Nature trail & labyrinth', stamp: 'NATURE', purpose: 'An interest in the future nature trail and labyrinth', budget: 300000 },
  { id: 'food', name: 'The travelling table', stamp: 'COMMUNITY', purpose: 'An interest in the planned Church food truck and community meals', budget: 250000 },
];

// Recognition preferences are separate from the five budgeted projects.
export const recognitionChoices = [
  { id: 'general', name: 'General Church support', stamp: 'BACCHUS', purpose: 'Support for the Church as a whole, with no project preference' },
  ...projects.map(({ id, name, stamp, purpose }) => ({ id, name, stamp, purpose })),
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
  const project = recognitionChoices.find(project => project.id === projectId);
  if (!project || !Number.isSafeInteger(cents) || cents < 1 || cents > 100000000) return null;
  return { projectId, purpose: project.purpose, grossCents: cents, status: 'Unsigned sample — no contribution received', tokenCount: 1 };
}

export function giftInquiry(projectId, cents) {
  const stamp = sampleStamp(projectId, cents);
  if (!stamp) return null;
  const project = recognitionChoices.find(project => project.id === projectId);
  const amount = (cents / 100).toFixed(2);
  const subject = `Contribution stamp inquiry — ${project.name}`;
  const preference = projectId === 'general'
    ? 'I have no project preference.'
    : `My optional project interest is ${project.name}. I understand this is a recognition preference, not a restriction on how the Church allocates funds or a claim that the project has been built.`;
  const body = `Hello Church of Bacchus,\n\nI am interested in the planned contribution stamp for general Church support. My example contribution is $${amount}. ${preference}\n\nPlease let me know when the final contribution and token terms are available. I understand this preview does not accept token purchases, confirm a donation or issue a token.\n\nThank you`;
  return `mailto:bacchuschurch@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
