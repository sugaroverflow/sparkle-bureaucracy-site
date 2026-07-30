# Fellowship Synthesis: A Narrative Arc

Working document for mentor conversations and fellowship prototype planning.  
**Full inventory:** `research-inventory.md` — fragments, patterns, tensions, project records, and interesting edges.  
**Thinking tool:** `sensemaking-map.md` — tensions, project insights, and cluster map.

---

## 1. Where I started

I came into the fellowship with a background in engineering and a set of instincts about where AI governance was interesting. My initial spark tests landed on two clusters: **system-level evaluation and safety** (how do composite AI systems — RAG, agents, tools — fail in ways that standard benchmarks can't detect?) and **governance as technical constraint** (how do laws and institutions enforce transparency and safety through technical requirements?).

I was also drawn to **surveillance pricing** — a rabbit hole that started with a NYT video on dynamic pricing and led me to a broader class of AI systems that make impactful, invisible decisions: individualized pricing, algorithmic gating, identity inference. The common thread was **observability** — the gap between what a system claims to do and what it actually does.

And openclaw came out and I started experimenting and hosting hack nights because the technology is so game changing for everyone to be able to use AI. The real thing I really care about, I think even behind the system level observability is (1) how do I show people they can use AI, and (2) how do I make it fun and part of existing systems so I can shake things up? 

At the same time I was sitting inside Newspeak House, which was its own governance experiment. I found myself preoccupied with questions of legitimacy, permission, and who actually holds power in "rule-light" systems. I wrote field notes on shadow governance, on needing permission in spaces designed to require none, on what it means when informal labor is the only thing holding a community together.

---

## 2. What I built

### Sparkle Border Authority

The first project that crystallised something. Built for a live Ration Club event — a full "border crossing" ritual before entering a party. React/TypeScript/Vite, terminal-style kiosk, 4-char codes, visa printing, checkpoints, admin overrides, live stats.

What it turned out to be: bureaucratic structure preserved, intent transformed. Identity checks, declarations, screening, approvals, printed permits — all the skeleton of a border regime, wrapped in "sparkle compliance" and "diplomatic glitter." Compliance felt like joining a story world. Rejection flows felt narrative, not punitive.

Ed Saperia saw it and said: this is the whole thing. That's Sparkle Bureaucracy.

---

### PoliTech Awards — open evaluation process

Led the narrative and design of the fellowship's political technology awards: evaluate 321 civic/political tech projects, pick a winner, but make the entire process open and inspectable. Every algorithm version published on GitHub. Rationale for every change.

The framing I developed: rankings are political. Scoring is political. By making the process transparent and iterative, we don't pretend to be neutral — we make the trade-offs discussable.

Built a versioned scoring pipeline (V1–V15) that evolved from random scoring and keyword heuristics to structured dossiers (OpenAlex, ProPublica, taxonomy fields), value articulation frameworks, and multi-jury agent systems. Pulled the whole cohort in: Davit on values taxonomy, Gamithra on ITN/A framework, Alexandra on aggregation models, Jamie on synthetic users, Fran on People's Choice, Asil on what it feels like to have an AI agent built from your public record.

The showcase evening was a success — warm, intellectually rigorous, participatory. The audience did their own ranking exercise before we showed them ours.

---

### Project Mirror

The part I'm most proud of technically. At V14–V15 of the awards process, I asked: what if all 18 cohort members had been involved? What if I built an agent for each of them?

Project Mirror is an evaluator-estimator workflow. It infers synthetic evaluator constitutions from people's public records — not claiming to reconstruct beliefs, but to produce usable evaluative stances. Each constitution includes scoring criteria and value modifiers: boosts for community ownership, under-resourced civic contexts, inclusive dev communities; reductions for VC funding; a popularity discount to counterbalance LLM familiarity bias.

18 agents, 18 constitutions, 18 ranked outputs with rationale for every score. Then: run them as a grand jury under Borda count, with strategic reasoning enabled. Winner: Liquid Feedback — stable, 18-point lead, 13 deliberation arguments, no manipulation that held.

The closing image: a screenshot of my screen at home with all 18 agents running in parallel, all my cohort with me. "A little bittersweet, because these are synthetic representations. But I think where we are is the cusp of something."

---

### Claw Club agents and Clawcon

Alongside research, I've been building in the Claw Club community and co-organizing Clawcon. Built claw agents that did fun things — went on Moltbook, ran claw penpals — and more serious things, like running research and analysis pipelines. The range is intentional: playful multi-agent systems with real outputs; shows you can hold whimsy and instrumented research in the same hand.

---

### Lumina House × Ration Club

Collaboration across house communities. Event-world integration. Social choreography at scale. Not a software project — a demonstration that the convening instinct works outside technical contexts too.

---

### Community and governance writing (unpublished)

A sustained body of field notes on legitimacy, permission, shadow governance, and what it means to occupy a role that doesn't exist. These haven't been published yet but they represent real thinking depth — not just demos.

---

## 3. The pattern that keeps appearing

Across all of this — SBA, Project Mirror, the awards process, the governance notes, the claw agents — the same structure keeps showing up:

**A pipeline with a ritual layer on top.**

Intake → process → decision → artifact → handoff. This is the skeleton. It appears in border crossings, evaluation systems, governance experiments, price discrimination audits, permission scaffolds.

What varies is the **intent**. Control or experience. Compliance or engagement. Opacity or legible ritual.

The insight Sparkle Bureaucracy names: you can change the intent without dismantling the skeleton. The structure can stay rigorous while the experience transforms. That's the design move. And it's transferable — to institutions, to AI systems, to communities.

---

## 4. Where the tensions live

These are not resolved. They're the interesting part.

**Playfulness vs enforcement.** SBA was theatrical, but it still gated access. The border could still reject you. Sparkle bureaucracy doesn't abolish enforcement — it changes what enforcement feels like. But where is the line between meaningful reframing and trivializing something that should stay serious?

**Transparency vs trust.** More visibility doesn't automatically rebuild institutional trust — sometimes it just makes failures more visible. Re-legitimisation requires redesigning the encounter, not only the disclosure.

**Synthetic representation vs authentic voice.** Project Mirror was methodologically careful (it says "evaluative stance," not "beliefs") but the ethical discomfort is real. What does it mean to have your values inferred? Asil reflected on this live at the showcase. The question doesn't resolve.

**Open participation vs unequal permission capacity.** Newspeak House is designed so no one needs permission. But I noticed I did need it. Not from a lack of confidence — something structural. The "free system" narrative coexists with invisible norms that don't distribute evenly.

**Rigor vs accessibility.** The V1–V15 evaluation process was rigorous, but heavy. There's a version of Sparkle Bureaucracy that becomes its own administrative burden. How do you keep the ritual light enough to actually participate in?

---

## 5. What I still can't resolve

- **Whether SB needs a canonical prototype.** Ed's analogy is vTaiwan ↔ pol.is — a movement associated with a specific tool. Do I need a "pol.is" for Sparkle Bureaucracy? Or is the portfolio itself the thing?

- **How to position "not policy advice" alongside genuine institutional credibility.** The sidestep is strategically useful but it creates a real tension: if the outputs are illustrative, who acts on them? What is the mechanism from prototype to change?

- **Whether multi-agent evaluation systems are more trustworthy or just more complicated.** Running 18 agents and a deliberation round feels rigorous. But is it? Does adding process steps increase legitimacy or just increase the surface area for things to go wrong?

- **What the fellowship research thread actually is.** Right now it spans: system-level AI safety, surveillance pricing, governance mechanics, evaluative constitutions, bureaucratic experience design. These are connected but not unified. I haven't collapsed them yet. I'm not sure I should.

---

## 6. Where this is going

**Sparkle Bureaucracy is the network.** A vehicle for carrying a particular approach into places that are otherwise boring, defensive, or banal. Not a single product. Many small prototypes, explicit values, room for collaborators' work.

The case for it: people are hungry for optimistic futures. People want to understand what post-AI jobs look like. Public sector AI is happening whether or not anyone is making it interesting. The service design movement made new kinds of teams and working methods palatable to institutions. Sparkle Bureaucracy can do the same for AI-native organisational futures.

The operating model: 80% credible institution, 20% sparkle. Portfolio of prototypes. "Easy yes" asks. A calendar that curates the ecosystem without needing permission. Knowledge production that turns each prototype into reusable evidence.

**The fellowship prototype will live inside this network.** It will be Sparkle Bureaucracy × emerging AI — multi-agent systems, evaluative constitutions, ritual interfaces, or some combination. The exact project is still open. That's the right state to be in when talking to mentors.

---

## Appendix: Things built at Newspeak (credibility inventory)

| Work | What it demonstrates |
|------|----------------------|
| **Project Mirror** | Multi-agent evaluation design; constitutions + modifiers + aggregation; research question on inferring evaluative stance; social choice deliberation. |
| **Sparkle Border Authority** | End-to-end bureaucratic ritual as live software; artifacts, checkpoints, admin overrides; sparkle bureaucracy as implemented pattern. |
| **PoliTech Awards showcase** | Open evaluation as public performance; V1–V15 methodology; pulled cohort in; [2025.newspeak.house/awards](https://2025.newspeak.house/awards). |
| **Lumina House × Ration Club** | Cross-community collaboration; event-world integration; social choreography at scale. |
| **Claw agents** (Moltbook, penpals, research pipelines) | Playful multi-agent systems with real outputs; range from whimsy to instrumented research. |
| **Clawclub / Clawcon** | Community building, recurring formats, convening — network development in practice. |
| **Community × governance writing (unpublished)** | Sustained depth on legitimacy, permission, shadow governance — beyond demos. |

---

*Companion documents: `research-inventory.md` (full source record) · `sensemaking-map.md` (tensions, project insights, cluster map)*
 