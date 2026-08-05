# Sensemaking Map

A thinking tool, not a summary. Built from `research-inventory.md`.  
Three lenses: **B — tensions anchored in built things** · **C — projects as questions** · **D — cluster map of the space**

---

## Section B: Tensions (anchored to specific work)

Each tension is named, described on both sides, and grounded in something concrete — a project, a field note, a moment.

---

### B1. Playfulness vs enforcement

**Side A:** Bureaucratic ritual redesigned as theatre — "sparkle compliance," printed visas, checkpoint roleplay, People's Choice criteria. Participation feels like joining a story world.

**Side B:** The ritual still gates access. Sparkle Border Authority still approves and rejects. Project Mirror's deliberation agents still eliminate competitors. The governance experiments at Newspeak still had coercive fallbacks — "forms of exclusion" — even in a peer-governed house.

**Grounded in:** Sparkle Border Authority (gating inside theatre); governance module legitimacy field note ("even if you were dictator and there was a signed charter, why would we follow the rules?"); permission-in-free-systems reflection.

**What remains open:** Where is the line between meaningful reframing and trivializing something that should stay coercive? Can a system be genuinely sparkly and also genuinely enforceable?

---

### B2. Visibility vs opacity

**Side A:** Make everything inspectable — public GitHub repos, versioned algorithms, rationale per score, open evaluation methodology, printed permits you can hold, dashboards you can read in real time.

**Side B:** The systems under study are the opposite — surveillance pricing hides its logic entirely; LLM evaluation pipelines obscure where and why outputs change; Project Mirror's constitutions are *inferred*, not declared; even "open" processes have invisible assumptions baked in.

**Grounded in:** PoliTech Awards public GitHub (visibility as method); surveillance pricing research (opacity as harm); Project Mirror popularity discount (acknowledging invisible LLM bias); evaluation blind-spot instrumentation checklist (logging as governance).

**What remains open:** Does publishing methodology rebuild trust, or just make the shortcomings more visible? The transparency-as-re-legitimisation move may not work on its own.

---

### B3. Synthetic representation vs authentic voice

**Side A:** Synthetic evaluators enable scale. 18 agents representing 18 people's value stances — constitutions built from public records, Borda deliberation, stable winner. The pipeline produces useful results.

**Side B:** These are synthetic representations, not people. Asil reflected at the showcase on what it feels like to have an AI agent built from your public record. That felt bittersweet. The inference is not consent. The constitution is an approximation, possibly wrong in ways that matter.

**Grounded in:** Project Mirror pipeline; Asil's live reflection at the awards showcase; closing image of "all 18 cohort members on one screen" — delightful and melancholy simultaneously.

**What remains open:** What guardrails make synthetic representation ethically legible? When does approximation become misrepresentation? And is the direction after Mirror — "us managing our own synthetic versions" — actually better, or just a new problem?

---

### B4. Ritual richness vs operational weight

**Side A:** Process steps create legibility and shared experience. A 15-version evaluation pipeline is evidence of genuine methodological care. A border kiosk with secondary screening logic is more immersive than a velvet rope.

**Side B:** The assessment log dragged UX. The massive file caused page-load crashes. The governance experiments at Newspeak produced a lot of process and sometimes very little outcome. Ritual that is too heavy stops being participatory and becomes its own burden.

**Grounded in:** PoliTech Awards V1–V15 evolution; assessment log performance issues (lazy-load patch); governance module retrospective on "stuckness."

**What remains open:** How do you keep ritual light enough to invite participation without making it so light it loses procedural integrity?

---

### B5. Open participation vs unequal permission capacity

**Side A:** "No one needs permission" — Newspeak House design intent. Anyone can act. Empowering. Real for some people.

**Side B:** Some actors still require formal legitimacy scaffolds to act. The permission-slip artifact exists precisely because the "free system" narrative doesn't distribute evenly. Shadow governance distributes to whoever holds the most labor, not whoever was invited to lead.

**Grounded in:** Permission-in-rule-light-systems field note ("I don't experience this as a lack of confidence — it's structural"); shadow governance articulation ("I occupy a role that doesn't exist"); permission-slip artifact on the Civic Tech Guide.

**What remains open:** How do you design for unequal permission capacity without reproducing the hierarchy you're trying to avoid? Can explicit scaffolding enable action without becoming its own gatekeeping layer?

---

### B6. Rigor vs accessibility (the "not policy advice" problem)

**Side A:** Sparkle Bureaucracy deliberately sidesteps strategic policy — outputs illustrate possibilities rather than prescribe solutions. This keeps it unthreatening and makes it easier to build network without people fighting it as a threat.

**Side B:** If outputs are only illustrative, who acts on them? What's the mechanism from prototype to change? Saying "this is not policy advice" is strategically useful but creates a real gap between research seriousness and institutional impact.

**Grounded in:** Ed's framing on sidestepping policy; Fatima's worry ("I keep coming back to this — my fear would be for SB to not be taken seriously"); PoliTech Awards framing ("can AI meaningfully evaluate political technology projects? My answer is: maybe").

**What remains open:** Is "maybe" a research finding or a hedge? What does it look like when a Sparkle Bureaucracy prototype actually changes something?

---

### B7. Individual role clarity vs collective legitimacy

**Side A:** Named roles clarify accountability — "website maintainer," "ration club manager." Committees diffuse responsibility. Roles concentrate it usefully.

**Side B:** Concentrated roles can reproduce exactly the power structures a peer community is designed to resist. Who assigns the roles? Who can contest them?

**Grounded in:** Roles-over-committees governance notes; three-person team power design critique (when user research/design roles are absent, their decisions don't disappear — they get absorbed by implementers by default); shadow governance articulation.

**What remains open:** Is there a version of role clarity that distributes accountability without reproducing hierarchy?

---

## Section C: Projects as Questions

Each project named, what it revealed that wasn't expected, and what question it left open.

---

### C1. Sparkle Border Authority

**What I made:** A border-crossing kiosk for a party. Full stack, live event, guests used it to enter.

**What it revealed I didn't expect:** That the procedural skeleton of a border regime is almost entirely separable from its affective intent. You can keep the forms, the decisions, the checkpoints, the classification — and just change what it feels like to go through them. The structure held. The experience transformed. And the guests played along fully; they co-created the fiction.

**What question it opened:** Is this transferable to real institutions? If you can redesign the experiential layer of a border system for a party, can you do the same for a benefits application, a planning process, a public consultation? And if so — does that actually rebuild trust, or does it just paper over the coercive mechanics underneath?

---

### C2. PoliTech Awards — open evaluation process

**What I made:** A public, versioned, inspectable ranking of 321 political technology projects. V1–V15. Algorithm in public GitHub. Cohort-wide showcase event.

**What it revealed I didn't expect:** How much of the work was values articulation, not technical design. Every version of the algorithm was a hypothesis about what "good political technology" means. The methodology evolved constantly — not because the technical problems were hard, but because the value questions were harder. And publishing the methodology didn't resolve disagreement; it made the disagreements more precise.

**What question it opened:** If making a process open and inspectable is supposed to produce legitimacy, why does it sometimes produce more contestation? Is contestation the point? And if evaluation is inherently political, what does it mean to do it well?

---

### C3. Project Mirror

**What I made:** A multi-agent evaluator-estimator — 18 synthetic cohort agents, each with an inferred constitution, running 321 project rankings and then deliberating under Borda count.

**What it revealed I didn't expect:** That the results were surprisingly stable. I expected strategic manipulation to dominate or random variation to swamp signal. Instead, Liquid Feedback won cleanly across every aggregation method. The stability was more interesting than if it had been messy — it suggested something real about the projects, not just about the method.

**What question it opened:** Can AI infer a usable evaluative constitution for a person from their public record? My answer after Mirror: yes, for some purposes. But *which purposes* matters a lot. And what happens when the person disagrees with the constitution built for them? Is the next step "us managing our own synthetic versions" — and is that better or just a different problem?

---

### C4. Claw agents (Moltbook, penpals, research pipelines)

**What I made:** A set of agents in the Claw Club community context — some whimsical (Moltbook interactions, penpals), some practical (research and analysis pipelines).

**What it revealed I didn't expect:** That the whimsy and the rigor are not actually separate modes. The playful agents generated genuine social engagement; the research agents generated genuine evidence. The same technical substrate held both. This is its own kind of argument for Sparkle Bureaucracy as method.

**What question it opened:** What's the right ratio of whimsy to rigor in an AI-native civic prototype? And who gets to decide — the researcher, the community, or the system's own emergent character?

---

### C5. Governance and community writing (unpublished)

**What I made:** Field notes on shadow governance, permission structures, legitimacy in peer-governed spaces, team power design, the governance module experiments.

**What it revealed I didn't expect:** How much invisible labor I was holding — translation, lobbying, articulating stakes, managing expectations across groups. And how little of it was legible to the people around me, or to me, until I named it.

**What question it opened:** If shadow governance is structural, not personal — can it be designed for? Is there a version of a community or institution where the invisible labor gets acknowledged, shared, or built into the architecture rather than absorbed by whoever takes it on?

---

## Section D: Cluster Map of the Research Space

Six clusters, their contents, and the active research sites at their intersections.

---

### Cluster A — System behavior, safety, and observability

- RAG/agent/tool pipeline failures
- Control illusion (what developers think they control vs what actually controls outputs)
- Hidden attack surfaces in composite systems
- Instrumentation requirements for detecting system-level failures
- Evaluation blind spots that standard benchmarks miss
- Agentic workflow risk (extension collapse, orchestration complexity)
- AI-coded software vulnerabilities (politically sensitive prompts → security holes)
- Model eval and red-teaming practice

---

### Cluster B — Governance mechanics and legitimacy

- Roles vs committees (clarity vs diffusion of accountability)
- Temporary authority experiments (bounded rule-play, signed charters)
- Permission scaffolds in rule-light systems
- Shadow governance and invisible labor
- Spokesperson / bridge protocols between subgroups
- Team power design (who absorbs decisions when roles are absent)
- Governance module legitimacy question ("why would we follow the rules?")

---

### Cluster C — Market accountability and rights translation

- Surveillance pricing: individualized dynamic pricing using personal data
- Algorithmic-pricing watchdog (scraping + anomaly detection)
- Dynamic-pricing persona auditor (multi-persona price comparison)
- "Stalker pricing" exposure (making inference visible to users)
- Price-history audit stack (CamelCamelCamel / Keepa)
- Disclosure-law interface translation (NY algorithmic pricing law → UI notice)
- Algo transparency as an actively evolving civic tech category

---

### Cluster D — Evaluation constitutions and collective judgment

- Open public ranking pipelines with inspectable algorithms
- Values formalization as a distinct design problem
- Synthetic evaluator constitutions (Project Mirror)
- Constitution modifier layers (boosts, reductions, popularity discount)
- Aggregation method experiments (pairwise, averaging, Borda)
- Social-choice deliberation with strategic reasoning
- People's Choice participatory criteria input
- Heterogeneous vs shared-criteria decision models
- Versioned scoring evolution as epistemic record

---

### Cluster E — Bureaucratic experience design

- Ritual interfaces (intake → screening → decision → artifact → handoff)
- Checkpoint choreography and authority handoffs
- Documents-as-props (printed visas, A6 stickers, passport stamps)
- Dashboard dramaturgy (live stats as state apparatus)
- Playful tone overlays on formal procedural structures
- Administrative cosplay: serious skeleton, theatrical surface
- Sparkle Border Authority as end-to-end implementation

---

### Cluster F — Research and network infrastructure

- Matrix-to-blog publishing pipeline (ingestion bot)
- Field-note publicness as a research commitment
- Small high-density event strategy (6 people beats 60)
- Calendar curation without permission (institutionalising personal interests)
- Portfolio vehicle framing (accumulating legitimacy across projects)
- Brain trust / feedback session format
- Knowledge production as method (field notes, pattern writeups, failure notes)

---

### Active research sites at cluster intersections

These are not merely overlaps — they are places where working in one cluster forces a question in another.

**A ↔ D — AI system evaluation meets civic evaluation**  
Evaluating AI pipelines for failure modes and evaluating civic/political technology projects for impact use the same underlying infrastructure: data quality, instrumentation, values formalization, aggregation. Project Mirror sits exactly here — using multi-agent AI systems to evaluate civic projects, with the AI system itself under scrutiny as an evaluative tool.

**B ↔ E — Governance legitimacy performed through ritual interface**  
Governance questions don't get resolved in policy debates — they get enacted through checkpoints, permission slips, role assignments, dashboards, and forms. Sparkle Border Authority shows this: governance as a live interface, legitimacy as a felt experience, not just a declared arrangement.

**C ↔ A — Market accountability depends on technical observability**  
Surveillance pricing is an observability problem. You can't prove price discrimination without the technical capacity to instrument, compare, and trace. The same gap that makes AI pipeline failures invisible makes discriminatory pricing invisible.

**D ↔ E — Evaluation procedure as staged civic experience**  
Project Mirror and the PoliTech Awards process don't just produce rankings — they are public performances about how judgment works. The evaluation is also the exhibit. The audience does their own ranking exercise. The methodology is the talk, not just the method.

**F ↔ everything — Infrastructure shapes what gets seen**  
What gets published, what gets convened around, what gets put in the calendar — these choices determine which ideas become legible, which prototypes attract collaborators, and which tensions get the attention they deserve. Publishing pipeline is not neutral.

---

### Contradictions (not resolved, not for resolving)

- Wants binding structures and also rejects coercive compliance.
- Wants openness and also needs explicit permission channels.
- Wants playful systems and also wants serious accountability outcomes.
- Wants methodological rigor and also feels discomfort about synthetic representation of people.
- Wants to sidestep policy and also wants to have institutional impact.
- Wants many prototypes and also wants a canonical one (the "pol.is problem").

---

*Source data: `research-inventory.md` · Strategic layer: `synthesis.md`*
