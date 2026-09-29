# Church of Bacchus — instructions for Codex

## Start and resume

1. Read this file, `CURRENT-STATE.md` and `README.md`. When available, read the
   parent `PROJECT-INDEX.md` and `WORKFLOW.md` as shared context. This repository's
   bootstrap works independently of an adjacent private RU checkout.
2. Before asking the owner to reconstruct history, read connected Airtable
   **Chief of Bots HQ**, base `apprQp4AtyTo6SwKP`, **Master Tasks**
   `tblWh2YBUk4voOXWH`: shared coordination `recsE9xuJNaqgY1FM`, this website
   `recmvvds7nP2F4xUg`, and the linked task relevant to the requested work.
   Contribution-design work also references `recmnVYRYzQMh0Mpw`.
   Existing follow-up references are designated checkout/verification
   `recZYu6GySmSAit8u` and public RU release links `recrdNinJTJGE7VaA`;
   retrieve their current dependencies instead of creating duplicate tasks.
3. Inspect the live schema and read each task's **Current Decision**
   (`fldpAm2c6ZDDdLWDR`), **Depends On** (`fld9e94BpQ84gozPQ`), relevant
   **App Dependencies** (`fld5KoTCG8XnC2CMS`, RU tasks), current status, next action,
   blocker and owner. Follow the decision and its evidence into **Work Ledger**
   `tblD2x9wHX75fEM0m`. This task's ledger context is
   `https://airtable.com/apprQp4AtyTo6SwKP/tblWh2YBUk4voOXWH/recmvvds7nP2F4xUg`.
   Read recent relevant attempts and failures; retrieve older history as needed.
4. Inspect Git status/history and current code. Repeat the state check after
   compaction and at meaningful milestones. New owner instructions supersede old
   notes; neither a prior plan nor an old test proves current behavior.

## One shared development history

- Airtable is canonical for structured development work; Git records code and
  evidence. CURRENT-STATE is a concise code snapshot, not another task queue.
- Find existing tasks and decisions by ID and meaning before creating records.
  Readiness requires a concrete next action, no unresolved blocker and completed
  prerequisites. Distinguish agent-ready work from owner/external next actions;
  respect another agent's active assignment. Do not infer authorization from a
  ready status or change a dependency merely to make work appear ready.
- Use the existing Work Ledger with this task's **Context URL**. Do not create a
  second ledger or move Church tasks into RU's App Tasks table. Meaningful attempts
  get fresh Run Keys; preserve failed and abandoned approaches and their reasons.
  Append actual results/evidence, then a concise decision and next action. A
  terminal Result closes its matching attempt without deleting the Started entry.
- Evidence means an actual observed test, inspected artifact, full commit or
  deployment reference, verified source, or attributable owner decision. Never
  invent completion, times or artifacts. Imported history must say it is imported.
- Read Current Decision before replacing it. Append a new Decision that
  **supersedes** the prior entry, retain both and update the current pointer.
  Other relations are supports, contradicts, related and inspired_by; direction
  is this entry to its target. Owner review is optional and records only actual
  Accepted / Needs work / Rejected feedback, not assumed approval.
- Search Entry Keys before creating ledger entries. Read current fields, change
  only intended fields and verify afterward. Coordinate one writer per task;
  Airtable is not an atomic lock or tamper-proof audit log. Reconcile uncertain
  writes before retrying. Routine edits can share a milestone; do not log every
  command or require the owner to review ordinary bookkeeping.
- If Airtable is unavailable, continue independent authorized work. Public
  CURRENT-STATE may contain a minimal **Airtable sync pending** marker, task ID and
  public commit reference only. Keep sensitive details outside this public repo.
  Reconcile with Airtable on reconnection and replace the marker with synced
  references; never grow a competing local database.

## Public website boundaries and completion

- This is a public static GitHub Pages site. Preserve CNAME, established contact
  and donation URLs, original reference assets and unrelated behavior.
- Do not commit private installers, private prototype code, donor records,
  internal account information, credentials, keys, source ZIPs or phone screenshots.
  Bootstrap Airtable IDs are references, not permission to publish record contents.
- The contribution stamp is an unsigned design preview. Existing PayPal/Bitcoin
  links are general support; project selection is not sent to those providers.
  No financial integration, signed issuance or deployment is implied by workflow
  work. Follow the current contribution-design decision before implementing one.
- Website downloads or store links require verified public releases; never expose
  private testing builds. Related projects remain separate implementations even
  though their goals, decisions and dependencies share Airtable.
- Run checks appropriate to changes; `node --test tests/grounds.test.mjs` covers
  the existing contribution preview. Visually check affected responsive pages for
  UI changes. Inspect diffs and secret exposure before committing. Push normally
  only within the owner's authorized scope; no force push or history rewrite.
- Record actual implementation, checks and publication separately in the canonical
  task/ledger. A pushed commit is not a verified deployment. Keep this file and
  CURRENT-STATE compact and preserve superseded decisions in Airtable.
