# Technical Notes

This file records architecture, data, privacy, and implementation notes for the existing prototypes and proposed diary infrastructure.

---

## Existing Prototype: Sparkle Border Authority

Source summary from [research-inventory.md](./research-inventory.md).

### Stack

- React.
- TypeScript.
- Vite.
- Browser storage for local state continuity.

### Core Flow

1. Guest enters a 4-character code.
2. System confirms identity.
3. Guest completes purpose / declaration forms.
4. Screening logic produces a decision or secondary review path.
5. System assigns visa class and privileges.
6. A6 visa sticker can be printed.
7. Checkpoint handoff and arrival tracking complete the ritual.

### Operational Surfaces

- Applicant flow.
- Manual visa creation.
- Visitor signup.
- Checkpoint assistance.
- Admin overrides.
- Reprints.
- Live stats dashboard.

### Technical Notes To Add

- [ ] Link to source repo if public.
- [ ] Add screenshots.
- [ ] Add data model summary.
- [ ] Add print flow notes.
- [ ] Add edge cases encountered during the live event.

---

## Existing Prototype: Project Mirror

Source summary from [research-inventory.md](./research-inventory.md) and [synthesis.md](./synthesis.md).

### Core Flow

1. Research public profiles / records for cohort members.
2. Build an inferred evaluator constitution for each person.
3. Score 321 political technology projects.
4. Produce ranked outputs with rationale.
5. Aggregate rankings.
6. Run social-choice deliberation under Borda count with strategic reasoning.

### Key Design Choices

- Constitutions describe evaluative stance, not claimed beliefs.
- Value modifiers make normative assumptions inspectable.
- Popularity discount attempts to counterbalance LLM familiarity bias.
- Aggregation method variation is treated as evidence, not noise.

### Technical Notes To Add

- [ ] Link to methodology/code if public.
- [ ] Add constitution schema.
- [ ] Add aggregation method notes.
- [ ] Add failure cases.
- [ ] Add ethical guardrails around inferred representation.

---

## Proposed Prototype Infrastructure: Agent-Assisted Diary

### Goal

Use an agent to help maintain a template-compliant prototype diary by drafting structured artifacts from raw notes, while keeping publication and interpretation under human control.

### Inputs

- Matrix field notes export.
- GitHub issues or comments.
- Faculty feedback.
- Links and prior-art notes.
- Event notes.
- Prototype screenshots.
- Manual reflections.

### Outputs

- Weekly diary drafts.
- Experiment cards.
- Prior-art candidates.
- Engagement log updates.
- Faculty feedback prompts.
- Collaborator cards.
- Open questions.

### Human Approval Boundary

The agent may draft, classify, summarise, and suggest. It should not publish, contact collaborators, represent someone else's views, or mark feedback resolved without human approval.

### Data Model Sketch

```ts
type DiaryNote = {
  id: string;
  date: string;
  source: "matrix" | "github" | "conversation" | "event" | "manual";
  sourceUrl?: string;
  tag?: "link" | "journal" | "question" | "project" | "idea" | "field-note" | "engagement" | "prior-art" | "experiment";
  body: string;
  people?: string[];
  projects?: string[];
  experiments?: string[];
  privacy: "public" | "needs-review" | "private";
};

type ExperimentCard = {
  name: string;
  status: "idea" | "planned" | "in-progress" | "done";
  hypothesis: string;
  method: string;
  evidence: string[];
  risks: string[];
  facultyQuestions: string[];
  nextStep: string;
};

type FeedbackItem = {
  date: string;
  source: string;
  summary: string;
  response: string;
  status: "open" | "accepted" | "deferred" | "rejected";
};
```

### Implementation Phases

| Phase | Description | Why |
| --- | --- | --- |
| V0 | Markdown-only manual workflow. | Keeps the diary moving and avoids overbuilding. |
| V1 | Script or agent prompt that classifies notes and drafts weekly entries. | Tests whether agent assistance helps. |
| V2 | GitHub issue / PR workflow for proposed diary updates. | Makes human approval explicit and auditable. |
| V3 | Optional website or dashboard for faculty-friendly review. | Useful only if markdown and Google Docs become too high-friction. |

### Privacy and Safety Notes

- Preserve source links where possible.
- Do not publish private or sensitive notes by default.
- Treat third-party comments as requiring permission before direct quotation.
- Do not let inferred agents speak as real people.
- Label generated synthesis clearly.
- Keep raw notes separate from polished reflection.
- Keep a review step before any public update.

---

## Open Technical Questions

- Should the diary agent run locally, in GitHub Actions, or as a separate service?
- What is the lowest-friction way for faculty to comment: GitHub, Google Docs, a form, or a lightweight website?
- Should Matrix remain the capture surface, or should new notes be captured in GitHub issues?
- How much of the agent workflow should be reproducible from committed source files?
- What evidence should be attached to weekly entries versus left in supporting logs?

