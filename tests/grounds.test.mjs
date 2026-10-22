import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, recognitionChoices, parseGiftCents, sampleStamp, giftInquiry } from '../grounds-data.mjs';

test('decimal gifts retain exact cents and invalid input cannot create a sample or inquiry', () => {
  for (const [value, cents] of [['0.01', 1], ['100', 10000], ['1.10', 110], ['1000000.00', 100000000]]) assert.equal(parseGiftCents(value), cents);
  for (const value of ['', '0', '-1', '1e3', '0.001', '1000000.01', 'Infinity', '<script>', '10,000', null, 100]) assert.equal(parseGiftCents(value), null);
  assert.equal(sampleStamp('land', 1.1), null);
  assert.equal(giftInquiry('unknown', 100), null);
});

test('five distinct projects sum once and the stamp cannot claim issuance or vesting', () => {
  assert.equal(new Set(projects.map(project => project.id)).size, 5);
  assert.equal(projects.reduce((sum, project) => sum + project.budget, 0), 13300000);
  const before = JSON.stringify(projects);
  const stamp = sampleStamp('food', 125050);
  assert.equal(stamp.grossCents, 125050);
  assert.equal(stamp.tokenCount, 1);
  assert.match(stamp.status, /Unsigned sample/);
  assert.equal(JSON.stringify(projects), before);
  const inquiry = new URL(giftInquiry('food', 125050));
  assert.equal(inquiry.protocol, 'mailto:');
  assert.equal(inquiry.pathname, 'bacchuschurch@gmail.com');
  assert.match(inquiry.searchParams.get('body'), /\$1250\.50/);
  assert.match(inquiry.searchParams.get('body'), /travelling table/);
  assert.match(inquiry.searchParams.get('body'), /not a restriction on how the Church allocates funds/);
  assert.match(inquiry.searchParams.get('body'), /does not accept token purchases/);
});

test('general recognition is available without becoming a sixth budgeted project', () => {
  assert.equal(recognitionChoices[0].id, 'general');
  assert.equal(recognitionChoices.length, 6);
  assert.equal(projects.some(project => project.id === 'general'), false);
  assert.equal(sampleStamp('general', 1000).purpose, 'Support for the Church as a whole, with no project preference');
  const inquiry = new URL(giftInquiry('general', 1000));
  assert.match(inquiry.searchParams.get('body'), /general Church support/);
  assert.match(inquiry.searchParams.get('body'), /no project preference/);
  assert.doesNotMatch(inquiry.searchParams.get('body'), /designated to/);
});
