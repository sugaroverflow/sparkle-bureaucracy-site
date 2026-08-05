# Experiment Research Sprint

Date: 2026-06-19

Purpose: explore candidate first experiments for Sparkle Bureaucracy as an experiment lab, using parallel subagent research plus source checks.

Conclusion: keep **Sparkle Bureaucracy** as the assessed prototype, and run the first experiments as the lab's evidence-producing programme. The strongest near-term shape is: private lab infrastructure first, then one public/civic-facing flagship experiment with clear evidence, risks, and faculty critique.

---

## Recommended Sequence

### 1. Run the internal lab infrastructure first

Use the **Agent-Assisted Lab Clerk** and Google Doc feedback loop to keep the diary, evidence, and faculty critique moving.

This should not be the main faculty-facing experience. It is the lab's operating infrastructure: a way to turn notes, links, experiments, and feedback into structured public evidence.

Smallest test: 10 days.

Success criteria:
- one weekly diary entry drafted and human-approved
- one experiment card improved
- one prior-art list improved
- one faculty feedback prompt improved
- a visible log of what the agent got wrong, what was rejected, and what changed

### 2. Pick one first public/civic-facing flagship

Best current candidate: **The Verification Queue**.

Reason: it is closest to Sparkle Border Authority while moving toward a real public-service surface. It keeps the core ritual pattern, `intake -> process -> decision -> artifact -> handoff`, but shifts from border theatre to classification, exception-handling, and dignity under verification.

### 3. Keep two second-wave experiments warm

Second strongest: **Consultation Customs**, about synthetic voice in participatory channels.

Third strongest: **Hybrid Delegation Assembly**, about liquid democracy, delegation, paper, and legitimacy.

Both are strong, but each has heavier legitimacy risk. Consultation Customs risks becoming too adversarial or AI-detection-focused. Hybrid Delegation Assembly risks becoming a voting-system legitimacy problem unless carefully scoped.

---

## Ranking

| Rank | Experiment | Best role | Why it is strong | Main risk |
| --- | --- | --- | --- | --- |
| 1 | The Verification Queue | First flagship | Concrete civic/public-service ritual, strong continuity with Sparkle Border Authority, measurable evidence, clear dignity/exception-handling question | Could become service-design theatre without practitioners or affected users |
| 2 | Consultation Customs | Second flagship or parallel shadow test | Extremely timely AI-era participation problem, strong political technology fit, reusable protocol output | Can become bot detection, surveillance, or anti-AI culture war |
| 3 | Hybrid Delegation Assembly | Community legitimacy event | Easy to run in a bounded community, strong ritual artifacts, concrete participation data | Delegation, secrecy, clique power, and vote legitimacy are hard to handle ethically |
| 4 | Agent-Assisted Lab Clerk | Internal infrastructure | Directly improves diary, evidence, prior art, and feedback loops | Too meta if treated as the main civic-facing experiment |

---

## Experiment 1: The Verification Queue

### Core question

Can a public-service verification ritual become more legible, humane, and contestable without hiding the fact that classification and exclusion are still happening?

### Why this fits Sparkle Bureaucracy

This is the closest successor to Sparkle Border Authority. It keeps the procedural skeleton, but tests whether the pattern transfers from a party border ritual into a public-service scenario: queueing, eligibility, identity checks, document evidence, edge cases, decisions, receipts, and appeals.

### Smallest credible experiment

Run a 90-minute live simulation with 12-20 participants and 2-4 observers or practitioners.

Scenario: participants need to complete a fictional but plausible public-service task, such as renewing a licence, claiming an event access credential, proving eligibility for a concession, or updating a civic record.

Run two versions:

1. **Baseline ritual**
   - opaque queue number
   - ambiguous eligibility categories
   - pass/fail document check
   - generic rejection message
   - unclear appeal route

2. **Sparkle Bureaucracy ritual**
   - visible queue state
   - clear classification tokens
   - "why am I in this queue?" explanations
   - transparent verification steps
   - explicit exception route
   - decision receipt
   - humane handoff

Use only synthetic personas and fake documents.

Include edge cases:
- name mismatch
- no photo ID
- expired document
- low digital access
- accessibility need
- synthetic or deepfake concern
- legitimate user who fails standard checks

### Output artifact

A **decision receipt** showing:
- classification
- evidence used
- reason
- next step
- appeal or exception route

### Evidence to collect

- before/after comprehension: what happened, why, and what can you do next
- perceived fairness, dignity, trust, and discomfort
- time spent in waiting, intake, verification, exception, and decision states
- false accept and false reject rates using synthetic cases
- whether participants can explain the classification categories afterward
- whether the exception route feels real or decorative
- practitioner critique: plausible, naive, risky, useful
- accessibility notes: phone, camera, language, document, and visual dependency
- anonymised quotes about humiliation, relief, confusion, agency, and legitimacy
- service map, queue-state diagram, classification cards, and decision receipt template

### Failure modes

- Cute-washing coercion: the ritual feels nicer but hides an unjust rule.
- Simulation weakness: participants know it is fake, so emotional stakes are lower.
- Practitioner absence: without public-service designers or frontline staff, operational constraints may be missed.
- Identity harm: do not collect real IDs, biometrics, immigration status, financial information, or benefits details.
- Accessibility harm: do not make digital identity mean smartphone plus good camera plus stable documents.
- Exception theatre: an appeal route that cannot change outcomes may be worse than no appeal route.

### Prior art to investigate

- GOV.UK Service Standard: https://www.gov.uk/service-manual/service-standard
- GOV.UK One Login: https://www.gov.uk/using-your-gov-uk-one-login
- GOV.UK identity proofing guidance: https://www.gov.uk/government/publications/identity-proofing-and-verification-of-an-individual/how-to-prove-and-verify-someones-identity
- NIST SP 800-63-4 Digital Identity Guidelines: https://pages.nist.gov/800-63-4/
- W3C Verifiable Credentials Data Model v2.0: https://www.w3.org/TR/vc-data-model-2.0/

### Faculty questions

- Is this strong enough as Sparkle Bureaucracy's first flagship civic/public-service experiment?
- Is the core research question about queues, classification, identity verification, exception handling, or dignity?
- Does combining queueing with digital identity make the experiment richer, or should they be split?
- What evidence would convince you that this is more than theatrical service design?
- What minimum practitioner involvement is needed for credibility?

---

## Experiment 2: Consultation Customs

### Core question

How should public consultations, constituent inboxes, petitions, or planning comments handle participation when submissions may be duplicated, AI-assisted, paid, impersonated, or synthetic?

### Why this fits Sparkle Bureaucracy

This is a bureaucratic ritual failure: "the public has spoken" becomes hard to interpret when volume, authenticity, affectedness, and substance come apart.

The goal should not be AI detection. The goal should be a participation ritual that helps reviewers distinguish **volume**, **substance**, **affectedness**, and **uncertainty** without punishing legitimate AI-assisted participation.

### Smallest credible experiment

Run a bounded shadow consultation inside Newspeak House or another trusted civic community.

Setup:
- choose a real but low-risk decision, such as event policy, space use, experiment prioritisation, community norm, or small budget allocation
- publish a one-page consultation brief with 3 options and clear questions
- recruit 15-30 real participants
- allow AI-assisted submissions, but ask people to disclose whether AI helped draft, edit, translate, or structure their response
- add a labelled adversarial test set: duplicate form responses, AI-generated persona responses, synthetic but plausible objections, and AI-assisted genuine responses
- ask 3-5 reviewers to process the dataset twice: once as a normal inbox, once through the Sparkle Bureaucracy protocol

### Output artifact

A **Public Voice Ledger** or **Consultation Customs protocol** with:
- original submission preserved
- claimed relationship to issue
- AI assistance disclosure
- duplicate / campaign / unique marker
- evidence or lived-experience marker
- confidence note, not authenticity verdict
- "do not penalise accessibility assistance" rule
- final response memo showing which themes changed the decision

### Evidence to collect

- number and type of submissions
- triage time: baseline inbox vs protocol
- reviewer confidence before and after protocol
- false positives: genuine or accessibility-assisted comments treated as suspicious
- false negatives: synthetic or fabricated comments treated as authentic
- number of distinct issues surfaced
- whether minority or unusual views survive summarisation
- participant trust rating
- reviewer usefulness rating
- final decision trace: which comments or themes affected the outcome
- consultation brief, submission schema, anonymised ledger, reviewer notes, decision memo

### Failure modes

- The synthetic test set may be too obvious or too artificial.
- Reviewers may over-focus on detecting AI rather than extracting civic substance.
- The protocol may reward polished writing and punish messy but authentic comments.
- AI-assisted accessibility, translation, or neurodivergent support may be misclassified as manipulation.
- Identity verification could slide into surveillance or exclusion.
- Publishing adversarial prompts could teach people how to flood consultations.

Design constraint: do not make human-written text the gold standard. Make the standard accountable, situated, consentful, interpretable participation.

### Prior art to investigate

- New York Attorney General fake comments report: https://ag.ny.gov/sites/default/files/oag-fakecommentsreport.pdf
- Regulations.gov API: https://open.gsa.gov/api/regulationsgov/
- GOV.UK Consultation Principles: https://www.gov.uk/government/publications/consultation-principles-guidance
- vTaiwan: https://info.vtaiwan.tw/
- Polis: https://compdemocracy.org/polis/
- Decidim: https://decidim.org/
- C2PA / Content Credentials: https://c2pa.org/

### Faculty questions

- Is this strong enough as the first public/civic-facing Sparkle Bureaucracy experiment?
- Should the experiment optimise for consultation officials, elected representatives, civic organisations, or affected residents?
- Is a bounded shadow consultation credible enough, or does it need a real institutional partner?
- What should count more: verified identity, affectedness, originality, evidence, or deliberative value?
- How do we avoid excluding people who use AI for accessibility, translation, confidence, or structure?

---

## Experiment 3: Hybrid Delegation Assembly

### Core question

How do paper and digital rituals affect perceived legitimacy, participation, and trust in a delegated community decision?

### Why this fits Sparkle Bureaucracy

It turns voting mechanics into visible ritual: delegation, revocation, paper ballots, seals, witnessed counting, audit notes, and dispute handling.

It is strong if treated as a bounded community legitimacy experiment. It is weak if framed as solving voting.

### Smallest credible experiment

Run a Hybrid Delegation Assembly with 15-40 people in a bounded community.

Decision options:
- which Sparkle Bureaucracy experiment should run first
- how to allocate a small event budget
- which collective question the group should investigate next

Protocol:
1. Publish 4-6 proposals in advance.
2. Participants can vote directly or delegate their vote to another participant.
3. Delegations are digital before the session and revocable.
4. At the session, each participant receives a paper ballot.
5. Paper ballot can confirm direct vote, override delegation, or abstain.
6. Delegates cast visible bundle votes only for unresolved delegations.
7. Public tally happens twice: quick spreadsheet tally, then paper count.
8. Publish an audit note.

### Output artifact

A **delegation audit note** with:
- turnout
- direct votes vs delegations
- largest delegate weight
- revocations and overrides
- tally mismatches
- disputes
- participant trust scores

### Evidence to collect

- turnout and completion rate
- direct votes vs delegated votes
- delegation concentration
- unused or revoked delegations
- paper overrides of digital delegation
- digital tally vs paper tally errors
- time required to explain the system
- participant trust before and after the ritual
- participant comprehension: can they explain how their vote counted?
- perceived legitimacy: would they accept the result if they disliked the outcome?
- qualitative reactions to paper, witnessing, signatures, seals, and visible counting

### Failure modes

- Small sample cannot prove liquid democracy works.
- Low-stakes decision may inflate trust.
- Delegation can create social pressure or clique power.
- Public delegation graphs may reveal social or political affinities.
- Weighted delegate votes can weaken secrecy.
- Paper rituals can launder legitimacy if the underlying process is bad.

### Prior art to investigate

- LiquidFeedback: https://liquidfeedback.org/
- Decidim: https://decidim.org/
- Polis: https://compdemocracy.org/polis/
- vTaiwan: https://info.vtaiwan.tw/
- Helios Voting: https://heliosvoting.org/
- Voting behaviour and power in LiquidFeedback: https://arxiv.org/abs/1503.07723
- Liquid democracy experiments on delegation: https://arxiv.org/abs/2212.09715

### Faculty questions

- Is the strongest research question trust, participation, delegation power, or bureaucratic ritual?
- What is the safest real decision to use without making the experiment trivial?
- Should the first version include delegation, or start with paper-vs-digital voting only?
- Does the paper ritual create meaningful accountability, or just aesthetic confidence?
- How should secrecy work when delegation itself may need visibility?

---

## Experiment 4: Agent-Assisted Lab Clerk

### Core question

Can agent-assisted lab bureaucracy make Sparkle Bureaucracy more legible, accountable, and feedback-responsive without flattening the research voice or laundering uncertainty?

### Why this fits Sparkle Bureaucracy

The lab itself needs bureaucracy: intake, classification, evidence, decision logs, handoff, publication. The agent-assisted diary tests whether that bureaucracy can be useful, humane, and auditable.

This should be internal infrastructure, not the primary faculty feedback interface.

### Smallest credible experiment

Run a 10-day pilot.

Inputs:
- Matrix notes
- meeting notes
- 5-10 links
- one weekly reflection
- one faculty comment thread
- current repo docs

Agent tasks:
- classify notes into diary, prior art, experiment, feedback, and evidence
- draft one weekly entry
- propose one experiment-card update
- produce a collaborator/prior-art shortlist

Human tasks:
- approve, reject, or edit every output
- log why
- keep Google Doc as the faculty surface

Comparator: manually produce one equivalent weekly update from the same source material before or after the agent-assisted pass.

### Evidence to collect

- time spent manually vs with agent assistance
- number of raw notes captured, classified, discarded, and published
- traceability rate: public claims linked back to a note, source, conversation, or decision
- agent error log: hallucinated sources, bad classifications, overconfident summaries, missed nuance
- human edit distance: what had to be rewritten and why
- faculty feedback quality: comments that become concrete changes
- prior-art yield: sources found, sources rejected, and why
- collaborator yield: people or organisations suggested, contacted, responded, useful
- privacy/redaction log
- before/after diary readability

### Failure modes

- The agent optimises for legibility rather than truth.
- The agent makes the project look more coherent than it was.
- Sensitive or relational material gets laundered into public evidence.
- Collaborator scouting becomes extractive.
- The agent becomes a public-facing gimmick and alienates AI-sceptical faculty.

Controls:
- no autonomous publishing
- no autonomous outreach
- no ranking people by inferred usefulness without human review
- redact private conversations by default
- keep rejected agent outputs as evidence of limits
- separate raw notes, interpreted evidence, and public diary
- mark AI-assisted sections when relevant
- keep faculty interface non-AI unless explicitly invited

### Prior art to investigate

- Nielsen Norman Group diary studies: https://www.nngroup.com/articles/diary-studies/
- DiaryHelper paper: https://arxiv.org/abs/2404.19738
- Elicit: https://elicit.com/
- ResearchRabbit: https://www.researchrabbit.ai/
- Google NotebookLM: https://notebooklm.google/
- GitHub Issues: https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues
- GitHub Discussions: https://docs.github.com/en/discussions
- Civic Tech Field Guide: https://civictech.guide/

### Faculty questions

- Does this infrastructure count as part of Sparkle Bureaucracy, or only as support?
- What evidence would convince you that it improves research quality rather than polish?
- Which parts of the diary should remain human-authored?
- What should be explicitly out of scope for the agent?
- Which first public-facing experiment should this infrastructure support?

---

## Cross-Cutting Lessons

### The best first flagship is not necessarily the most AI-native

The Verification Queue may be strongest because it is legible, concrete, and directly connected to Sparkle Border Authority. Its AI relevance can remain contextual: AI increases pressure on identity, classification, spoofing, and automation, but the first workshop does not need to include a live AI classifier.

### Synthetic voice is the most timely public problem

Consultation Customs is probably the strongest AI-era civic-tech experiment. It has a clear public problem and sharp prior art, but it needs careful framing to avoid becoming an AI-detection or identity-verification project.

### Liquid democracy is a good event, but a risky first flagship

Hybrid Delegation Assembly would be memorable and easy to stage. It also produces clean metrics. But voting legitimacy, delegation power, secrecy, and clique dynamics can overwhelm the core research question unless the decision is carefully bounded.

### The agent diary should be internal infrastructure

Given faculty AI-scepticism, the agent should help maintain the lab, not mediate faculty feedback. Google Docs should remain the primary faculty surface.

---

## Proposed Faculty Ask

Use this framing in the Google Doc:

> Sparkle Bureaucracy is the prototype: an experiment lab. I am choosing the lab's first formal experiment sequence. The strongest current options are The Verification Queue, Consultation Customs, and Hybrid Delegation Assembly. The Agent-Assisted Lab Clerk is proposed as internal research infrastructure. I would like feedback on which public/civic-facing experiment should run first, what evidence would make it credible, and what risks I am underestimating.

Ask faculty to rank:

1. Which should run first?
2. Which has the clearest political technology fit?
3. Which has the clearest civic community?
4. Which has the strongest evidence path?
5. Which has the largest ethical risk?
6. Which prior art is missing?

