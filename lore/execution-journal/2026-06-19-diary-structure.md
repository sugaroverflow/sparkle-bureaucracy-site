## 2026-06-19T15:51:57Z - Prototype Diary Structure

### Goal

Reorganise the repository so Sparkle Bureaucracy remains readable as a public narrative while also satisfying the Newspeak House prototype work diary template.

### Changes

- Added `submission-diary.md` as the template-shaped assessment diary.
- Added separate logs for experiments, faculty feedback, prior art, engagement evidence, technical notes, and weekly entries.
- Added `weekly/2026-06-19.md` as the first structured weekly diary entry.
- Updated `README.md` so reviewers can find the new diary and feedback surfaces.
- Fixed a stale `research-inventory.md` note that said `sensemaking-map.md` was deleted.

### Decisions

- Keep `README.md` as the public narrative and orientation page.
- Use `submission-diary.md` as the formal assessment surface.
- Keep evidence in focused logs rather than overloading the README.
- Treat the agent-assisted diary as a candidate experiment and research infrastructure layer, not as an unbounded autonomous publishing system.
- Preserve human approval boundaries for any generated diary synthesis.

### Tradeoffs

- The repo now has more files, but each file maps more directly to a diary template requirement.
- The assessed prototype is now Sparkle Bureaucracy as an experiment lab; the structure intentionally keeps multiple candidate first experiments alive until faculty feedback narrows the lab sequence.
- No interactive website was built yet because markdown plus a possible commentable Google Doc is lower-friction for faculty review.

### Risks

- The project may still look broad until one first experiment is selected as the lab's initial public/civic-facing test.
- Engagement evidence and prior art are seeded but need stronger source links, quotes, screenshots, and dates.
- The agent-assisted diary could be perceived as too meta unless connected to civic use and community validation.

### Verification

- Reviewed the local repository structure before editing.
- Fetched the Newspeak House prototype diary template text and mapped repository files to its sections.
- Planned a follow-up markdown/link consistency pass after edits.

### Demo Impact

The project can now be shown in three layers:

1. Public story: `README.md`.
2. Assessment diary: `submission-diary.md`.
3. Evidence and adaptation logs: experiment, feedback, prior art, engagement, technical, and weekly files.

### Customer-Facing Context

The new structure makes the project easier to explain to faculty, mentors, collaborators, and future civic/public-sector partners because it separates vision, evidence, feedback, and implementation notes.

### Next Recommended Step

Use the Google Doc feedback brief to ask faculty which candidate experiment should become the lab's first public/civic-facing test, then turn the selected experiment into a dated test plan with evidence and risk criteria.

## 2026-06-19T15:59:37Z - Experiment Lab Framing Confirmed

### Goal

Update the diary structure after confirming that the assessed prototype is Sparkle Bureaucracy itself, framed as an experiment lab.

### Changes

- Added `faculty-feedback-brief.md` as the Google-Doc-friendly faculty review surface.
- Updated `submission-diary.md` so Sparkle Bureaucracy is explicitly the prototype and the open question is the lab's first experiment sequence.
- Updated `faculty-feedback.md` so it tracks faculty critique from the Google Doc rather than acting as the primary comment surface.
- Updated `experiments.md` and `weekly/2026-06-19.md` to distinguish lab infrastructure from first public/civic-facing experiments.
- Updated `README.md` so the feedback ask is about shaping the lab's first experiments, not choosing a different prototype.

### Decisions

- The prototype is Sparkle Bureaucracy: an experiment lab.
- Faculty feedback should happen primarily in a Google Doc, with the repo maintaining the source text and response log.
- The agent-assisted diary and faculty feedback loop are lab infrastructure; they may still be experiments, but the lab also needs a first public/civic-facing experiment sequence.

### Tradeoffs

- The lab framing is more accurate to the project, but it requires discipline: each experiment still needs dates, methods, risks, and evidence.
- A Google Doc lowers faculty feedback friction but creates a second surface that must be reconciled back into the repo.

### Risks

- Faculty may still ask for one experiment to be clearly primary for assessment.
- Feedback may remain in Google Doc comments unless it is actively copied back into `faculty-feedback.md`.
- The distinction between lab infrastructure and public/civic-facing experiments needs to stay visible.

### Verification

- Planned a markdown consistency and diff check after updates.

### Demo Impact

The demo narrative can now open with: "Sparkle Bureaucracy is the prototype: an experiment lab. These are the first experiments it can run, and this is how faculty feedback shapes the lab."

### Customer-Facing Context

The lab framing makes Sparkle Bureaucracy easier to explain to collaborators and sponsors because it is not a single tool looking for a problem; it is a repeatable method for turning bureaucratic rituals into testable civic experiments.

### Next Recommended Step

Create the faculty Google Doc from `faculty-feedback-brief.md`, collect comments, and reconcile them into `faculty-feedback.md` and `experiments.md`.

## 2026-06-19T16:14:09Z - Experiment Research Sprint

### Goal

Explore the strongest candidate experiments for Sparkle Bureaucracy as an experiment lab and turn the findings into a reusable memo for faculty conversations.

### Changes

- Spawned four research subagents covering synthetic voice, hybrid liquid democracy, public-service verification/identity, and lab infrastructure.
- Added `experiment-research-sprint.md` with ranked experiment recommendations, smallest credible experiment designs, evidence plans, risks, prior-art leads, and faculty questions.
- Linked the research sprint memo from `README.md` and `experiments.md`.

### Decisions

- Recommend **The Verification Queue** as the strongest first public/civic-facing flagship experiment.
- Keep **Agent-Assisted Lab Clerk** as internal lab infrastructure rather than a primary faculty-facing surface.
- Keep **Consultation Customs** and **Hybrid Delegation Assembly** as strong second-wave experiments.
- Continue using Google Docs as the primary faculty feedback surface.

### Tradeoffs

- The memo is a synthesis, not a complete literature review.
- Some prior-art leads need deeper verification before being treated as settled evidence.
- Ranking experiments helps focus faculty discussion, but the final sequence should still respond to faculty feedback and available participants.

### Risks

- The first flagship may still need a practitioner or affected-user group to avoid feeling like theatre.
- Synthetic voice is timely but could become too adversarial or AI-detection-focused.
- Liquid democracy is memorable but can be overwhelmed by voting legitimacy and secrecy issues.

### Verification

- Used parallel subagent briefs and direct source checks.
- Planned markdown consistency checks after writing the memo.

### Demo Impact

The project now has a concrete experiment sequence to discuss: internal lab clerk first, Verification Queue as likely flagship, Consultation Customs and Hybrid Delegation Assembly as follow-ons.

### Customer-Facing Context

The research sprint makes Sparkle Bureaucracy easier to explain as a lab with a programme, not a loose collection of ideas. It also gives faculty a practical way to critique scope, evidence, and ethics.

### Next Recommended Step

Use the Google Doc feedback brief to ask faculty whether The Verification Queue should be the first flagship and what practitioner/community involvement is required for credibility.

## 2026-06-23T12:28:46Z - Interactive Public Lab Wiki Prototype

### Goal

Turn the public diary repo into a more creative, navigable public lab surface without replacing the private faculty feedback and outreach workflow.

### Changes

- Added `index.html` as a static public lab wiki entry point.
- Added `styles.css` for the responsive wiki layout, experiment cards, evidence ledger, and feedback sections.
- Added `app.js` for experiment search, status filters, selected experiment detail view, and a local-only private note queue.
- Updated `README.md` so the interactive wiki is the first public starting point.

### Decisions

- Use a dependency-free static site so the repo remains easy to host on GitHub Pages or open locally.
- Keep faculty feedback in Google Docs and repo markdown, not in an AI-first chat surface.
- Treat the local note queue as a sketch of the agent-assisted diary workflow, not as a real published feedback system.
- Make the public/private boundary visible in the interface so collaborator prospecting and raw faculty notes are not accidentally presented as public evidence.

### Tradeoffs

- The site duplicates a small amount of experiment summary content from markdown files so it can work without a build step.
- The note queue uses browser `localStorage`; it is useful for demonstrating the workflow but is not collaboration infrastructure.
- No framework was added, which limits future content automation but keeps the prototype light.

### Risks

- If the wiki becomes the main source of truth, duplicated experiment copy could drift from `experiments.md` and `experiment-research-sprint.md`.
- The site is a prototype shell and still needs real feedback links, dates, and artifact uploads.
- The static note queue must not be mistaken for secure or shared storage.

### Verification

- Planned syntax checks for the JavaScript and static asset references.
- Planned repository diff review after the files were added.

### Demo Impact

The repo can now be shown as a public lab notebook rather than a folder of markdown files. Faculty and collaborators can scan the current experiment sequence, see the public/private boundary, and understand why the first decision is about experiment selection.

### Customer-Facing Context

The wiki demonstrates the core Sparkle Bureaucracy operating pattern: public evidence, clear decision receipts, visible risks, and private trust-preserving working layers.

### Next Recommended Step

Promote the strongest experiment cards into dated run plans and add a real faculty Google Doc link once the feedback doc exists.

## 2026-06-23T19:05:13Z - Sparkle Bureaucracy Experiment Reframing

### Goal

Sharpen the prospective experiment list so it reads as Sparkle Bureaucracy rather than generic civic workshop design.

### Changes

- Added `prospective-experiments/README.md` as a dedicated idea bank for future experiments.
- Linked the prospective experiments directory from `README.md`.
- Reframed the experiment standard around institutional skeleton, affective re-skin, decision pressure, and durable artifact.
- Added a sharper shortlist: Public Voice Customs, Mirror Commons, The Exception Window, Permission Passport Office, The Value Court, Claw Civil Service, Shadow Labour Claims Office, Liquid Mandate Assembly, and Sparkle Border Field Kit.

### Decisions

- Treat Sparkle Bureaucracy experiments as serious institutional rituals with a theatrical layer and durable artifacts, not generic workshops.
- Prefer naming and formats that feel like offices, customs desks, windows, courts, warrants, passports, ledgers, and field kits.
- Keep The Exception Window as the strongest near-term fellowship evidence route.
- Keep Public Voice Customs and Mirror Commons as higher-upside canonical candidates.
- Keep Claw Civil Service as lab infrastructure, not the sole public-facing prototype.

### Tradeoffs

- The new document is more opinionated and may retire some generic ideas.
- The strongest canonical candidates may be harder to run quickly than the near-term fellowship route.
- Several ideas still need faculty/practitioner critique before scheduling.

### Risks

- The experiment names may become too internally stylised if not paired with clear methods and evidence.
- Public Voice Customs and Mirror Commons have higher ethical and methodological burdens than The Exception Window.
- The repo now has overlapping experiment lists that need consolidation after faculty feedback.

### Verification

- Reviewed `README.md`, `synthesis.md`, `sensemaking-map.md`, `research-inventory.md`, and prior experiment docs.
- Ran a synthesis-lens subagent over the repository material and incorporated the resulting framing.
- Planned markdown/link checks after edits.

### Demo Impact

The project can now explain why a candidate is or is not a Sparkle Bureaucracy experiment. This makes faculty discussion sharper: the question becomes which ritual and artifact should become canonical, not just which topic is interesting.

### Customer-Facing Context

The new framing supports sponsor and collaborator conversations by making each experiment legible as a repeatable institutional pattern: customs, mirror, exception window, passport, court, civil service, claims office, assembly, or field kit.

### Next Recommended Step

Consolidate the public wiki experiment cards around the new shortlist and turn The Exception Window into a dated run plan with roles, materials, evidence, and faculty questions.
