import { projects, parseGiftCents, sampleStamp, giftInquiry } from './grounds-data.mjs';

const projectSelect = document.querySelector('#gift-project');
const amountInput = document.querySelector('#gift-amount');
const error = document.querySelector('#gift-error');
const inquiry = document.querySelector('#gift-inquiry');
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

function updateStamp() {
  const cents = parseGiftCents(amountInput.value);
  const project = projects.find(item => item.id === projectSelect.value);
  const stamp = cents === null ? null : sampleStamp(projectSelect.value, cents);
  document.querySelector('#stamp-word').textContent = project?.stamp ?? 'BACCHUS';
  document.querySelector('#stamp-project').textContent = project?.name ?? 'Choose a project';
  document.querySelector('#stamp-purpose').textContent = project?.purpose ?? '';
  document.querySelector('#stamp-amount').textContent = stamp ? money.format(stamp.grossCents / 100) : '—';
  document.querySelector('#sample-stamp').dataset.project = project?.id ?? '';
  amountInput.setAttribute('aria-invalid', String(!stamp));
  error.hidden = Boolean(stamp);
  if (stamp) {
    inquiry.href = giftInquiry(project.id, cents);
    inquiry.removeAttribute('aria-disabled');
    inquiry.removeAttribute('tabindex');
  } else {
    inquiry.removeAttribute('href');
    inquiry.setAttribute('aria-disabled', 'true');
    inquiry.setAttribute('tabindex', '-1');
  }
}
projectSelect.addEventListener('change', updateStamp);
amountInput.addEventListener('input', updateStamp);
document.querySelectorAll('[data-project-choice]').forEach(link => {
  link.addEventListener('click', () => {
    projectSelect.value = link.dataset.projectChoice;
    updateStamp();
  });
});
document.querySelector('#stamp-controls').hidden = false;
updateStamp();
