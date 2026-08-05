# Discovery: AI Inside Civic Processes + Participatory Governance

Research date: 30 July 2026
Status: discovery pool, not the final editorial selection.

## Scope and method

This pass covers:

- **Lane 3 — AI inside civic processes:** consultation analysis, document assembly, case intelligence, dispute resolution, participatory planning, mediated consensus, and AI-assisted policy research.
- **Lane 4 — participatory governance:** deliberation, participatory budgeting, crowdsourced lawmaking, citizen proposals, and representative assemblies.

Projects remain the primary unit. The records below prioritise primary or official project sources for what a project does. Independent research, evaluations, or participant testimony are used for affect where available. A maker's claim that a tool is “empowering” is not treated as evidence that a participant felt empowered.

### Fast editorial read

| Candidate | Strongest Sparkle ingredient | Main evidence gap | Initial website readiness |
| --- | --- | --- | --- |
| Talk to the City | Makes testimony navigable without forcing it into survey boxes | Direct participant affect | Ready with qualification |
| Habermas Machine | Iterative AI mediation that participants experienced as clearer and less biased | Real institutional handoff | Strong candidate |
| Cambridge Design Code + Go Vocal | Frees staff to ask richer questions and retain free text | Resident experience | Useful “awaiting Sparkle” card |
| UK Consult | Transparent, human-editable AI inside a recognisable consultation ritual | Public experience and recourse | Useful “awaiting Sparkle” card |
| Helsinki Summer Streets + UrbanistAI | Turns planning language into shared, manipulable images | Independent participant evidence | Strong visual candidate, qualify affect |
| Pathfinder | Converts hostile immigration data into timely, actionable case knowledge | Immigrant experience attributable to Pathfinder alone | Strong candidate |
| Document Assembly Line | Reusable legal infrastructure and one-click procedural agency | Experienced affect | Useful “awaiting Sparkle” card |
| amica | Reduces the cost, ceremony, and antagonism of separation agreements | Independent evaluation and coercion risks | Strong candidate with safeguards |
| New Jersey Policy Synth | Joins worker priorities to AI research and policy drafting | Experience of the participatory process | Reserve / methods card |
| vTaiwan | Makes consensus and disagreement visible, then forces an institutional response | Representativeness and volunteer dependence | Strong candidate |
| Better Reykjavík | Public ideas become visible neighbourhood changes and agenda items | Current independent affect evidence | Strong candidate |
| Decidim Barcelona | Traceable proposals and open, governable civic infrastructure | Felt experience | Useful “awaiting Sparkle” card |
| Decide Madrid | A durable participation ritual with measurable user satisfaction | Binding power has narrowed over time | Candidate or contrast |
| Paris Participatory Budget | Material, public handoff from idea to municipal spending | Affect and equitable participation | Reserve / contrast |
| America in One Room | Deliberation produces empathy, value, and reduced hostility | Weak binding handoff | Strong Sparkle ancestor |
| Estonia's Rahvakogu | A vivid warning that an impressive process can reduce trust without feedback | None for the warning lesson | Strong warning card |

## Project candidates

### 1. Talk to the City

- **Dates/status:** Introduced as a prototype in 2023; active open-source project with subsequent deployments, including Heal Michigan and Young Women's Alliance research.
- **Geography/community:** International; deployments include formerly incarcerated people in Michigan and young people across Australia.
- **Organisation:** AI Objectives Institute (AOI), with deployment partners including Silent Cry and Young Women's Alliance.
- **People/network:** Colleen McKenzie, Bruno Marnette, Değer Turan, Brittney Gallagher, and the AOI network.
- **Public URL:** [Project overview](https://ai.objectives.institute/talk-to-the-city-1); [Heal Michigan case](https://ai.objectives.institute/blog/using-ai-to-give-people-a-voice-a-case-study-in-michigan).
- **Discovery source:** AOI project archive; also a known Sparkle calibration case.
- **What it does:** Ingests qualitative material such as surveys, interviews, video, social posts, and pol.is exports; extracts arguments; clusters related positions; and presents an explorable map of agreements, disagreements, and source testimony.
- **Bureaucratic ritual/process:** Public input intake → coding and categorisation → synthesis → report → policymaker or advocate handoff.
- **Technology's actual role:** LLMs extract and summarise arguments; embeddings arrange related arguments into clusters. AI is constitutive, not decorative.
- **Intended affect:** To make contributors feel heard without reducing their accounts to multiple-choice data, and to help readers experience a complicated discourse as navigable rather than overwhelming. This is **maker-claimed** intent.
- **Experienced affect evidence:** The Heal Michigan partner described the report as connecting advocacy to legislation, but this is **partner-reported**, not direct participant affect. Twelve people contributed eight hours of video testimony; the case study does not report how they felt about the resulting interface. Record as **participant affect not yet evidenced**.
- **Civic problem/beneficiary:** Makes detailed testimony usable at scale; particularly relevant where under-resourced communities need to communicate patterns of harm to officials and advocates.
- **Power/contestability:** The commissioning body controls the question, source corpus, prompts, and handoff. Users can inspect clusters and underlying testimony, which improves traceability, but contributors do not necessarily control the final representation or decision. AOI explicitly identifies minority-voice suppression and unreliable simulated representation as risks in its [original project account](https://ai.objectives.institute/blog/introducing-talk-to-the-city-our-collective-deliberation-tool).
- **Durable artifact/capability:** Open-source pipeline, generated reports, reusable deployment method, and a growing case archive.
- **Classification:** **Possible Sparkle exemplar; experienced affect unproven.**
- **What Sparkle Bureaucracy borrows:** Preserve voice-level evidence beneath summaries; make patterns visible without erasing disagreement; use AI to widen qualitative intake rather than constrain it.
- **Concern/gap:** The system holds representational power: a lucid map can make an LLM's omissions feel authoritative. A civic handoff is not automatically a binding or contestable decision.
- **Evidence confidence:** **High** for mechanism and deployments; **low–medium** for experienced affect.
- **Website readiness:** **Ready with qualification.** The card should say “designed to help people feel heard; direct participant affect is not yet published.”

### 2. Habermas Machine

- **Dates/status:** Science paper published October 2024; research prototype rather than a public civic service.
- **Geography/community:** 5,734 research participants, including a virtual citizens' assembly with a demographically representative UK sample.
- **Organisation:** Google DeepMind with academic collaborators.
- **People/network:** Michael Henry Tessler, Michiel Bakker, Hannah Sheahan, Christopher Summerfield, David Parkes, Matthew Botvinick, and collaborators.
- **Public URL:** [Google DeepMind publication page](https://deepmind.google/research/publications/65220/).
- **Discovery source:** DeepMind research archive; cited by the Talk to the City research lineage.
- **What it does:** Participants submit opinions and critiques on political or social questions. An AI mediator repeatedly drafts a group statement, receives critiques, and revises it toward language that expresses common ground.
- **Bureaucratic ritual/process:** Individual position intake → mediated drafting → critique → revision → collective statement. It prototypes the synthesis stage of an assembly, consultation, or working group.
- **Technology's actual role:** A trained language model writes and revises consensus statements. It is the mediator and drafter, while participants supply positions, criticism, and ratings.
- **Intended affect:** Fair hearing, clarity, and confidence that disagreement has been represented.
- **Experienced affect evidence:** **Participant-reported.** Across the experiments, participants preferred the AI statements to human-mediator statements and rated them more informative, clear, and unbiased. Participants also often revised their own views toward a shared position. These results are reported in the [peer-reviewed abstract](https://deepmind.google/research/publications/65220/), not inferred from branding.
- **Civic problem/beneficiary:** Tests whether high-quality deliberative synthesis can scale beyond the limited number of people a human facilitator can serve.
- **Power/contestability:** Participants can criticise drafts and reject wording, but the model determines what synthesis is proposed. The research team controls questions, training, selection, and success metrics. No public authority is required to act on the output.
- **Durable artifact/capability:** Published research protocol, evaluation evidence, and a reproducible design pattern; not a maintained public tool.
- **Classification:** **Sparkle exemplar in experimental form.** Strong affect–technology fit, incomplete civic handoff.
- **What Sparkle Bureaucracy borrows:** Treat synthesis as an iterative, challengeable artifact; test whether dissent survives the summary; measure perceived clarity and bias rather than claiming neutrality.
- **Concern/gap:** Consensus can be emotionally satisfying while making principled or minority disagreement appear like a defect to be smoothed away. Preference for wording is not legitimacy.
- **Evidence confidence:** **High.** Peer-reviewed study with a large participant pool and explicit affect-adjacent ratings.
- **Website readiness:** **Strong candidate.** Explain that it is a research prototype, not evidence that AI should make collective decisions.

### 3. Cambridge Design Code consultation with Go Vocal's AI assistant

- **Dates/status:** Consultation and pilot in 2023; case study published January 2024; Go Vocal continues to offer AI-assisted Sensemaking.
- **Geography/community:** Northern Cambridge neighbourhoods, England; roughly 100 open-text responses in the relevant consultation phase.
- **Organisation:** Cambridge City Council and Go Vocal, formerly CitizenLab.
- **People/network:** Esther Pickard and Cambridge's consultation/design-code teams; Go Vocal civic engagement network.
- **Public URL:** [Cambridge case study](https://www.govocal.com/case-studies/cambridge-city-council-analyzes-input-50-faster-with-go-vocals-ai-assistant).
- **Discovery source:** Go Vocal case-study archive; related UK Local Digital AI consultation pilots.
- **What it does:** Residents first described needs for a local Design Code, then reviewed five proposed planning principles. The platform's AI produced thematic summaries of open-text feedback, which council staff checked against source responses and used as a basis for reporting.
- **Bureaucratic ritual/process:** Planning consultation → free-text response intake → analysis → principle validation → public report → planning decision.
- **Technology's actual role:** Generative AI summarises open-ended responses and surfaces themes; staff retain access to and validate original submissions.
- **Intended affect:** For staff, relief from spreadsheet drudgery and confidence in handling richer input. For residents, an invitation to speak in their own words rather than only tick boxes.
- **Experienced affect evidence:** **Participant-reported by staff users:** council staff found the tool easy to understand and reported that it did not omit significant themes. The case reports about ten hours and 50% of analysis time saved. **Resident affect is not evidenced.** The evidence is published by the vendor and should be labelled accordingly.
- **Civic problem/beneficiary:** Reduces the penalty that high response volumes impose on small public teams, potentially allowing consultations to include more qualitative questions.
- **Power/contestability:** The council sets the questions, principles, categories, and final planning response. Staff validation provides a check, but residents cannot directly contest an AI summary within the described process.
- **Durable artifact/capability:** Reusable platform feature, validated summaries, and a published consultation report workflow.
- **Classification:** **Infrastructure awaiting Sparkle.** It helps the listening bureaucracy but does not evidence a changed resident experience.
- **What Sparkle Bureaucracy borrows:** Keep free text; place source comments one click below synthesis; make verification a named procedural step; spend recovered time on dialogue rather than merely cost reduction.
- **Concern/gap:** Vendor-authored evidence foregrounds efficiency. A faster report is not proof that residents were understood or that their input changed the decision.
- **Evidence confidence:** **Medium–high** for the staff workflow; **low** for participant affect and policy impact.
- **Website readiness:** **Ready as an “awaiting Sparkle” example.**

### 4. Consult (the Humphrey suite)

- **Dates/status:** Developed by the UK government's Incubator for AI; first live Scottish Government trial reported May 2025; used on the DWP Pathways to Work consultation in 2025; registration opened to UK civil servants in July 2026.
- **Geography/community:** UK government consultations. The first live trial analysed more than 2,000 responses about non-surgical cosmetic procedure regulation; the DWP evaluation covered a much larger disability and employment consultation.
- **Organisation:** Department for Science, Innovation and Technology's Incubator for AI (i.AI), with the Scottish Government and DWP as early users.
- **People/network:** i.AI product and evaluation teams; departmental policy analysts.
- **Public URL:** [Algorithmic Transparency Record](https://www.gov.uk/algorithmic-transparency-records/dsit-consult); [first live trial](https://www.gov.uk/government/news/government-built-humphrey-ai-tool-reviews-responses-to-consultation-for-first-time-in-bid-to-save-millions); [current registration page](https://www.gov.uk/government/publications/consult-register-your-interest/consult-ai-tool).
- **Discovery source:** GOV.UK Algorithmic Transparency Recording Service and UK government AI project reporting.
- **What it does:** Generates a theme framework for each consultation question, maps responses to one or more themes, and gives analysts a dashboard for inspecting, filtering, editing, and interpreting the results.
- **Bureaucratic ritual/process:** Statutory/public consultation → response review → thematic analysis → policy interpretation → government response.
- **Technology's actual role:** A chain of GPT-4o prompts generates and applies themes. Humans can edit all AI outputs. The team also open-sourced its ThemeFinder capability.
- **Intended affect:** For analysts, reduced burden and more time for judgment. For the public, the implicit promise is that very large consultations can still be comprehensively considered.
- **Experienced affect evidence:** **Participant-reported by civil servants:** early users said the analysis was a useful starting point, expressed positive surprise, and reported substantial time savings in the [government trial account](https://www.gov.uk/government/news/government-built-humphrey-ai-tool-reviews-responses-to-consultation-for-first-time-in-bid-to-save-millions). **Public respondent affect is not evidenced.**
- **Civic problem/beneficiary:** Addresses months of costly manual analysis and may make more or larger consultations operationally feasible.
- **Power/contestability:** Policy analysts and departments retain final interpretive power and can relabel outputs. The transparency record says the tool makes no individual decisions, so it has no tool-specific appeal route; complaints remain department-specific. The public cannot inspect the dashboard or contest its coding as part of the described workflow.
- **Durable artifact/capability:** A government-owned product, public transparency record, evaluations, dashboards, and open-source ThemeFinder package. On the DWP Pathways to Work evaluation, Consult's mappings were reportedly closer to individual reviewers than reviewers were to each other, but that measures coding consistency rather than consultation legitimacy.
- **Classification:** **Infrastructure awaiting Sparkle.** An unusually inspectable AI bureaucracy, with the citizen-facing encounter missing.
- **What Sparkle Bureaucracy borrows:** Publicly register the model and workflow; disclose limitations; make every AI category editable; publish an evaluation before scaling; distinguish analysis from decision.
- **Concern/gap:** Speed can weaken the felt duty to read. The system's theme framework still shapes which patterns become legible, and the people whose testimony is categorised cannot see or challenge that framing.
- **Evidence confidence:** **High** for mechanism, governance, and official evaluation; **low** for public affect.
- **Website readiness:** **Ready as an “awaiting Sparkle” example.**

### 5. Helsinki Summer Streets with UrbanistAI

- **Dates/status:** Two workshops in January 2023; implemented in the Summer Streets planning process; UrbanistAI remains active and has since been used in other cities.
- **Geography/community:** Helsinki, Finland; one diverse 15-person citizen committee and one group of local business owners.
- **Organisation:** City of Helsinki and UrbanistAI/Toretei.
- **People/network:** UrbanistAI founder Damiano Cerrone; Helsinki urban planner Henna Hovi; city planners, citizen committee, and local entrepreneurs.
- **Public URL:** [Helsinki Summer Streets case](https://site.urbanistai.com/helsinki-summer-streets-1); [Interoperable Europe account](https://interoperable-europe.ec.europa.eu/collection/public-sector-tech-watch/reimagining-helsinki-participatory-urban-planning-generative-ai).
- **Discovery source:** Interoperable Europe Public Sector Tech Watch; OECD's later discussion of AI in civic participation.
- **What it does:** Small groups use text prompts and touch drawing tools on photographs of real streets to generate possible transformations. They discuss and refine the images, vote on preferred visions, and then test feasibility with city planners.
- **Bureaucratic ritual/process:** Urban-planning engagement workshop → proposal visualisation → group prioritisation → feasibility dialogue → design input.
- **Technology's actual role:** Generative image models translate language and rough drawings into plausible street scenes. AI changes the shared medium of consultation rather than deciding the winning plan.
- **Intended affect:** Imagination, immediacy, ownership, and confidence to participate without professional drawing or planning language. These are **maker-claimed** intentions.
- **Experienced affect evidence:** The project sources describe active collaboration and a shared understanding between planners and participants, but they do not publish participant quotations or a before/after affect measure. The claim that the interface was exciting or empowering remains **maker-observed/inferred**, not participant-reported.
- **Civic problem/beneficiary:** Reduces the professional-language barrier in urban design and creates a shared object for residents, businesses, and planners to negotiate around.
- **Power/contestability:** Participants generate and rank visions; planners still define the site, prompt constraints, feasibility, and final design. Generated realism may overstate what is technically, legally, or financially possible.
- **Durable artifact/capability:** Image proposals, a transferable workshop method, subsequent physical street experiments, and a maintained commercial platform.
- **Classification:** **Possible Sparkle exemplar; affect evidence incomplete.**
- **What Sparkle Bureaucracy borrows:** Let people manipulate the future state of a process together; create a vivid boundary object; end the imaginative phase with an explicit feasibility and power conversation.
- **Concern/gap:** Image generation can privilege visually seductive proposals and conceal trade-offs. The workshop group was small, and the published accounts come from the project and public-sector innovation ecosystem rather than participants.
- **Evidence confidence:** **High** for method and institutional handoff; **low–medium** for affect.
- **Website readiness:** **Strong visual candidate with an evidence caveat.**

### 6. Pathfinder

- **Dates/status:** Launched September 2024; active and expanding in 2026.
- **Geography/community:** United States immigration courts; used by immigration nonprofits and attorneys across multiple states.
- **Organisation:** Mobile Pathways, with partners including Lawyers for Good Government, USCIS, the California Access to Justice Commission, and the GitLab Foundation.
- **People/network:** Mobile Pathways team; Estuardo Cifuentes; immigration attorneys and nonprofit legal-service networks.
- **Public URL:** [Pathfinder project account](https://www.mobilepathways.org/post/ai-powered-immigration-assistance-with-pathfinder); [independent 100x Impact profile](https://www.100ximpact.org/portfolio/mobile-pathways).
- **Discovery source:** 100x Impact Accelerator portfolio and Mobile Pathways project archive; also named in the user's starter list.
- **What it does:** An attorney or accredited advocate enters an immigrant's A-number to retrieve and synthesise case history, monitor EOIR and USCIS changes, receive critical-date alerts, and communicate updates.
- **Bureaucratic ritual/process:** Legal intake → government-record retrieval → case interpretation → deadline monitoring → client explanation and action.
- **Technology's actual role:** AI and data pipelines collect, reconcile, and interpret large volumes of fragmented immigration records; Gemini-powered features surface case intelligence and alerts.
- **Intended affect:** Replace uncertainty and procedural darkness with clarity, preparedness, dignity, and hope.
- **Experienced affect evidence:** **Participant-reported by professional users:** a Pathfinder survey reports 82% understood cases better and 76% believed they could serve more immigrants. Attorneys call it a game changer in maker-hosted testimonials. The [100x Impact profile](https://www.100ximpact.org/portfolio/mobile-pathways) reports that 90% of Mobile Pathways users felt more hopeful after updates, but this figure covers the wider service ecosystem and should not be attributed to Pathfinder alone.
- **Civic problem/beneficiary:** Overstretched nonprofit lawyers and immigrants facing missed hearings, sudden case changes, work-permit delays, and deportation risk. Mobile Pathways reports a 3.4% in-absentia removal rate among 5,000 Pathfinder-tracked cases versus a 9% comparison rate for represented non-detained cases; this is a maker analysis, not a causal evaluation.
- **Power/contestability:** Pathfinder does not alter court authority, but it redistributes informational power to advocates and makes administrative inconsistency visible. Attorneys remain responsible for interpretation; errors in source data or synthesis could be high stakes.
- **Durable artifact/capability:** Maintained case-intelligence platform, alerts, data dashboards, organisational partnerships, and reusable advocacy data.
- **Classification:** **Possible Sparkle exemplar.** Strong civic boost and affective aim; the interface primarily serves intermediaries.
- **What Sparkle Bureaucracy borrows:** Use institutional identifiers to return agency to the person being processed; turn waiting into timely signals; reveal discrepancies across judges and offices; strengthen thin-capacity organisations rather than bypass them.
- **Concern/gap:** The end user is usually an attorney, not the immigrant. Product claims dominate the evidence, and the accuracy, privacy, and error-redress pathway deserve deeper review before publication.
- **Evidence confidence:** **Medium–high.** Strong current deployment evidence and some external accelerator verification; limited independent causal evaluation.
- **Website readiness:** **Strong candidate with careful attribution.**

### 7. Document Assembly Line / Court Forms Online / LITEfile

- **Dates/status:** Began in 2020; active in 2026. The community continues to maintain guided interviews, e-filing, translation, AI-assisted authoring, and LITEfile pilots.
- **Geography/community:** Originated in Massachusetts, with court and legal-aid collaborators in several US states.
- **Organisation:** Suffolk University Law School Legal Innovation & Technology Lab (LIT Lab).
- **People/network:** Quinten Steenhuis, David Colarusso, Sam Glover, Jonathan Pyle/docassemble, courts, legal-aid organisations, students, and more than 200 early volunteers.
- **Public URL:** [Project overview](https://assemblyline.suffolklitlab.org/docs/get_started/); [LITEfile update](https://suffolklitlab.org/document-assembly-line-q4-2025-update/).
- **Discovery source:** Suffolk LIT Lab project archive; known Sparkle calibration case.
- **What it does:** Supplies shared open-source components for guided legal interviews, document assembly, form discovery, translation, accessibility testing, and simplified electronic filing. LITEfile uses AI to identify documents, suggest court filing codes, prefill fields, and flag likely filing problems.
- **Bureaucratic ritual/process:** Determine legal need → answer guided questions → generate court forms → check filing requirements → deliver to the court docket.
- **Technology's actual role:** Rules-based expert systems and document automation carry the core service. New AI features accelerate interview authoring, translation, document recognition, and filing support; AI is not the final legal decision-maker.
- **Intended affect:** Reduce confusion, humiliation, and helplessness; make an expert-coded court ritual feel possible from a phone.
- **Experienced affect evidence:** **Affect not directly evidenced.** A project account documents a tenant completing and filing an emergency motion on a phone while an eviction was physically underway, demonstrating agency and urgency but not reporting the tenant's feelings. Do not translate this outcome into “the user felt empowered” without testimony.
- **Civic problem/beneficiary:** Self-represented litigants and small legal-aid/court teams facing an access-to-justice gap. The project's open infrastructure also builds institutional capacity rather than creating repeated vendor dependency.
- **Power/contestability:** Users can review answers and generated documents and still access courts and lawyers. The tools simplify the route into the existing legal system but do not change its substantive rules. Form errors remain consequential.
- **Durable artifact/capability:** MIT-licensed code, documentation, question libraries, interviews, Court Forms Online portals, an e-filing API, LITEfile, regular workshops, and a contributor community.
- **Classification:** **Infrastructure awaiting evidenced Sparkle.** It may already reduce anxiety; the evidence record cannot yet say so.
- **What Sparkle Bureaucracy borrows:** Build the whole handoff, not just a friendly intake; offer one-click passage across the institution's boundary; make the capability forkable and teach organisations to maintain it.
- **Concern/gap:** Procedural accessibility does not itself reveal or redistribute judicial power. Public affect evidence and comparative completion/error data remain limited in the reviewed sources.
- **Evidence confidence:** **High** for infrastructure and live use; **low** for affect.
- **Website readiness:** **Ready as a valuable project where Sparkle remains unproven.**

### 8. amica

- **Dates/status:** Launched nationally in Australia in 2020; active in 2026 with more than 17,000 registered separation matters.
- **Geography/community:** Australia; amicably separating couples handling parenting and property arrangements.
- **Organisation:** Legal Services Commission of South Australia, National Legal Aid, and the Commonwealth Attorney-General's Department; originally designed with Portable.
- **People/network:** Family lawyers across Australian legal-aid bodies, legal-service designers, and government funders.
- **Public URL:** [amica service](https://amica.gov.au/); [2026 Attorney-General's update](https://ministers.ag.gov.au/media-centre/low-cost-online-tool-amica-assists-more-17000-couples-separation-matters-23-02-2026); [terms and safeguards](https://amica.gov.au/terms-of-use).
- **Discovery source:** Australian government and National Legal Aid service archives.
- **What it does:** Guides a separating couple through disclosures, parenting schedules, property negotiation, agreements, and draft consent orders. Its constrained AI suggests a property division using 1,300 family-law scenarios, with lawyer quality assurance.
- **Bureaucratic ritual/process:** Suitability screening → mutual disclosure → AI suggestion/negotiation → agreement → legal quality assurance → document generation → optional court filing.
- **Technology's actual role:** A restricted predictive system proposes an asset split; the wider service uses structured workflows, notifications, agreement tools, and document automation.
- **Intended affect:** Make a stressful and unfamiliar legal transition feel simpler, supportive, private, paced, and less adversarial.
- **Experienced affect evidence:** **Participant-reported, maker-hosted:** a user testimonial says the couple felt grateful and found the process easy, helpful, and simple. This is direct affect but not independent or representative. The government reports uptake, cost savings, and out-of-court agreements, not an affect evaluation.
- **Civic problem/beneficiary:** Couples who can agree safely but cannot justify several thousand dollars in legal fees; reduces court load and makes formalisation affordable. It is explicitly unsuitable for some family-violence situations.
- **Power/contestability:** Both partners must agree; the suggestion is non-binding; users may seek independent advice; lawyers quality-assure proposed property divisions; courts retain authority over consent orders. However, an apparently neutral split may influence bargaining before either person obtains advice.
- **Durable artifact/capability:** Maintained national service, agreements, consent-order drafts, accumulated quality-assured scenarios, and a reusable online dispute-resolution pattern.
- **Classification:** **Possible Sparkle exemplar.** It changes both the emotional tone and cost of a consequential ritual, with serious suitability guardrails.
- **What Sparkle Bureaucracy borrows:** Design calm into a conflict procedure; let people preview outcomes privately; make “not appropriate for this tool” a first-class branch; combine algorithmic suggestion with human assurance and formal legal handoff.
- **Concern/gap:** “Amicable” can conceal unequal bargaining power. The system is not family dispute resolution or legal advice, and published independent user research is thin.
- **Evidence confidence:** **High** for service mechanism and uptake; **medium–low** for experienced affect.
- **Website readiness:** **Strong candidate if the safety boundary is central to the card.**

### 9. New Jersey AI Task Force worker engagement with Policy Synth

- **Dates/status:** Worker engagement and policy research in 2024; final task-force report published in 2025; implementation activity continues.
- **Geography/community:** New Jersey, USA; more than 2,200 private-sector workers plus public-sector engagement.
- **Organisation:** State of New Jersey AI Task Force, Citizens Foundation, and The GovLab.
- **People/network:** Róbert Bjarnason, Beth Simone Noveck, Dane Gambrell, state task-force members, labour economists, and New Jersey workers.
- **Public URL:** [New Jersey AI Task Force report](https://nj.gov/governor/docs/Final-2024-NJ-AI-Task-force-Report-to-Governor.pdf); [Policy Synth project](https://thegovlab.org/project/policy-synth); [method account](https://citizens.is/impact/smarter-crowdsourcing-election-subversion/).
- **Discovery source:** Citizens Foundation and GovLab project archives.
- **What it does:** Workers rank problems created by generative AI. Policy Synth agents search a large evidence base, generate and evolve possible policy responses, and help experts narrow thousands of proposals into recommendations.
- **Bureaucratic ritual/process:** Public issue elicitation → priority ranking → policy research → solution generation → expert shortlisting → task-force recommendation → executive implementation.
- **Technology's actual role:** LLM agents create search strategies, analyse sources, generate problem and solution sets, and iteratively develop proposals. Human workers set priorities; subject experts choose recommendations.
- **Intended affect:** To give workers meaningful authorship over an AI transition that might otherwise feel imposed, while replacing the drudgery of policy research with a visible human–AI division of labour.
- **Experienced affect evidence:** Workers reported anxiety about job loss, insecurity, surveillance, inequality, and mental-health effects in the engagement, but those are feelings about AI's social impact, **not evidence of how the participatory process felt**. Process affect is **not evidenced**.
- **Civic problem/beneficiary:** Connects state policy to affected workers while expanding the evidence a small task force can review. The resulting work informed recommendations including public-servant training and labour-market monitoring.
- **Power/contestability:** Workers ranked issue statements but did not select final policies. The task force and governor retained decision authority; experts supervised the AI and reduced the solution set. The final report exposes the workflow, counts, and handoff more clearly than many consultation processes.
- **Durable artifact/capability:** Open-source Policy Synth toolkit, final public report, a documented eight-week method, training programmes, and policy recommendations.
- **Classification:** **Infrastructure awaiting Sparkle.** Strong participatory architecture; no evidence yet that participants experienced agency or recognition.
- **What Sparkle Bureaucracy borrows:** Let affected people prioritise the research agenda; show the funnel from thousands of machine ideas to a few human choices; use AI to expand option space rather than determine the outcome.
- **Concern/gap:** A large generated solution space can create an aura of comprehensiveness. Workers' role stopped at problem prioritisation, and the public cannot contest which proposals experts discarded.
- **Evidence confidence:** **High** for process and outputs; **low** for experienced affect.
- **Website readiness:** **Reserve or methods card.**

### 10. vTaiwan

- **Dates/status:** 2014–present; now volunteer-led and operating as a civic laboratory.
- **Geography/community:** Taiwan; citizens, ministries, elected officials, civil society, scholars, and affected industries.
- **Organisation / people / network:** vTaiwan and g0v; closely associated with Audrey Tang, Jaclyn Tsai, civic facilitators, and the Computational Democracy Project/pol.is community.
- **URL / discovery source:** [Official overview](https://info.vtaiwan.tw/); [People Powered 2025 case study](https://www.peoplepowered.org/news-content/digital-participation-case-study-taiwan); People Powered digital-participation archive.
- **What it does / bureaucratic ritual:** A four-stage process—proposal, opinion, reflection, legislation—combines issue framing, pol.is opinion mapping, facilitated stakeholder deliberation, and a formal government response. More than 28 cases have been discussed; vTaiwan reports decisive government action in about 80%, including regulation of Uber.
- **Technology role:** Pol.is uses machine learning to cluster opinion groups and surface statements with cross-group agreement. Recent processes also use LLMs for summarisation and facilitation support.
- **Affect and evidence:** Intended affect is constructive disagreement, psychological safety, and civic authorship. **Participant-reported:** one participant said AI helped reorganise fragmented thoughts and made it easier to articulate an opinion; People Powered reports that the team sees this as lowering the psychological threshold for participation. This is a credible practitioner case study, not a representative affect evaluation.
- **Civic problem / beneficiary:** Lets a mixed public work on fast-moving regulatory issues that conventional legislative consultation struggles to understand.
- **Power / contestability:** vTaiwan creates recommendations, not binding law. Government agencies must respond point by point in strong cases, but ministries and legislators retain authority. Pol.is source statements and opinion groups are visible; agenda setting and participation skew remain concerns.
- **Durable artifact:** Open process, case archive, meeting records, pol.is reports, policy changes, facilitation community, and a globally reused model.
- **Classification:** **Sparkle exemplar.**
- **SB borrows:** Make rough consensus visible without hiding disagreement; combine online scale with face-to-face ritual; require the institution to explain what happens next.
- **Concern/gap:** Participants have often been younger, highly educated, and digitally literate; current volunteer dependence makes institutional handoff less reliable.
- **Evidence confidence / readiness:** **High / strong website candidate.**

### 11. Better Reykjavík / My Neighbourhood

- **Dates/status:** Better Reykjavík launched in 2010 and remains active; its My Neighbourhood participatory-budgeting strand ran annually from 2011–2023, with selected projects still being delivered.
- **Geography/community:** Reykjavík, Iceland; more than 70,000 participants in a city of roughly 120,000 over the programme's life.
- **Organisation / people / network:** Citizens Foundation and City of Reykjavík; Róbert Bjarnason, Gunnar Grímsson, municipal staff, and the Your Priorities community.
- **URL / discovery source:** [Council of Europe case](https://www.coe.int/en/web/interculturalcities/-/better-reykjavik); [Citizens Foundation impact page](https://www.citizens.is/impact/my-neighbourhood/); [OECD OPSI record](https://oecd-opsi.org/innovations/better-reykjavik/).
- **What it does / bureaucratic ritual:** Residents propose ideas, add separate arguments for and against, prioritise proposals, receive formal municipal review, and vote on neighbourhood capital spending. Top agenda proposals receive council consideration and answers.
- **Technology role:** The open-source Your Priorities platform structures ideation, debate, prioritisation, identity checks, translation, and budgeting; newer versions add AI moderation and analysis.
- **Affect and evidence:** Intended affect is restored trust, voice, and visible ownership after Iceland's financial crisis. **Observed/participant evidence:** a recent GovLab review reports that residents are pleased with the programme and that low-participating groups who do engage are especially satisfied; Participedia argues that seeing projects built increased trust. Treat these as secondary synthesis, not a current representative survey.
- **Civic problem / beneficiary:** Turns everyday local knowledge into funded improvements; the city has implemented hundreds of resident ideas.
- **Power / contestability:** Residents directly allocate a defined budget, while officials screen legality, cost, and feasibility and retain broader fiscal power. Reasons for rejection are communicated.
- **Durable artifact:** Open-source platform, repeated annual ritual, public ideas and arguments, implemented neighbourhood projects, and institutional partnership.
- **Classification:** **Sparkle exemplar.**
- **SB borrows:** Give participation a recurring cadence; separate arguments from social-media threads; make the handoff physically visible in the neighbourhood.
- **Concern/gap:** The binding domain is a small slice of capital spending; language and digital-access barriers have limited inclusion.
- **Evidence confidence / readiness:** **Medium–high / strong website candidate.**

### 12. Decidim Barcelona

- **Dates/status:** Launched in 2016; active, maintained open-source infrastructure with hundreds of deployments worldwide.
- **Geography/community:** Barcelona, Spain, with global reuse by cities, regions, organisations, and the European Commission.
- **Organisation / people / network:** Barcelona City Council and the Decidim Free Software Association; Metadecidim community, Gala Pin, Arnau Monterde, Antonio Calleja-López, and open-source contributors.
- **URL / discovery source:** [Decidim documentation](https://docs.decidim.org/en/develop/understand/about.html); [Decidim Barcelona](https://www.decidim.barcelona/pages/decidim?locale=es); [2020–23 Barcelona participatory-budget case](https://decidim.org/blog/2026-04-07-case-study-participatory-budget-2020-2023-in-barcelona/).
- **What it does / bureaucratic ritual:** Hosts proposals, debates, meetings, initiatives, assemblies, consultations, participatory budgets, and follow-up. The original municipal action-plan process connected almost 40,000 people; a later budget process allocated €30m and selected 76 projects.
- **Technology role:** Open-source workflow and traceability infrastructure links digital and in-person participation. It is not intrinsically AI; its emerging-technology contribution is a governable public digital commons.
- **Affect and evidence:** Intended affect is confidence, openness, collaboration, and protagonism. **Experienced affect not evidenced** in the sources reviewed. Research finds that negatively aligned comments generated more discussion, evidence of deliberative behaviour rather than emotion.
- **Civic problem / beneficiary:** Gives municipalities and civil-society organisations reusable infrastructure for participatory policymaking without proprietary lock-in.
- **Power / contestability:** Proposal status and implementation are traceable; code and platform rules can be collectively governed. Each commissioning institution still determines scope and binding force.
- **Durable artifact:** AGPL software, public records, monitoring tools, a social contract, and the Metadecidim governance community.
- **Classification:** **Infrastructure awaiting Sparkle.**
- **SB borrows:** Treat traceability as an emotional promise; let people follow a proposal beyond submission; govern the tool itself as a civic institution.
- **Concern/gap:** Rich infrastructure can host token participation as easily as binding participation; affect and inclusion depend on process design around the software.
- **Evidence confidence / readiness:** **High mechanism, low affect / ready as contrast.**

### 13. Decide Madrid / CONSUL Democracy

- **Dates/status:** Decide Madrid launched in 2015 and remains active; CONSUL Democracy became an independently stewarded foundation and released version 2.5 in 2026.
- **Geography/community:** Madrid, Spain, with reuse by public institutions internationally.
- **Organisation / people / network:** Madrid City Council and CONSUL Democracy Foundation; former political sponsor Manuela Carmena, platform co-founder Pablo Soto, and global implementers.
- **URL / discovery source:** [CONSUL Madrid use case](https://docs.consuldemocracy.org/use_cases/spain/madrid); [Decide Madrid](https://decide.madrid.es/); CONSUL use-case archive.
- **What it does / bureaucratic ritual:** Residents debate, submit proposals, support citizen initiatives, participate in consultations, and vote on participatory budgets. Its first large design process drew 26,961 votes on Plaza de España; participatory-budget allocations reached €100m in 2018 before later reductions.
- **Technology role:** Open-source participation software; experimental NLP work has explored recommendation, grouping, and summarisation, but AI is not essential to the core civic ritual.
- **Affect and evidence:** Intended affect is openness, efficacy, and democratic ownership. **Participant-reported:** a 2023 city survey gave the platform 6.63/10 overall; registration ease scored 7.42 and usefulness for participation 6.86. A research synthesis reports higher satisfaction with government performance after launch.
- **Civic problem / beneficiary:** Creates a persistent entry point for bottom-up municipal proposals and spending decisions.
- **Power / contestability:** Residents exercise binding power only within designated processes. The participation budget and political sponsorship weakened after a change of government, showing that software does not secure authority.
- **Durable artifact:** Open-source platform, global foundation, public proposals, physical projects, and a 60-person municipal participation unit.
- **Classification:** **Possible Sparkle exemplar / institutional caution.**
- **SB borrows:** Make participation a staffed institutional function; measure the user experience; preserve the ritual across administrations.
- **Concern/gap:** Binding scope is politically reversible, and a middling satisfaction score should temper celebratory claims.
- **Evidence confidence / readiness:** **High / candidate or contrast card.**

### 14. Paris Participatory Budget

- **Dates/status:** 2014–present; the eleventh edition in 2025 selected 104 projects and reported record participation.
- **Geography/community:** Paris, France; residents of all nationalities aged seven and over can vote.
- **Organisation / people / network:** City of Paris, arrondissement teams, civic groups, project proposers, and the Décider pour Paris ecosystem.
- **URL / discovery source:** [City participation overview](https://www.paris.fr/pages/paris-ville-citoyenne-et-participative-6654/); [2025 winning projects](https://www.paris.fr/pages/budget-participatif-2025-decouvrez-les-104-projets-laureats-de-la-11e-edition-32684); OECD/Participedia participatory-budgeting research.
- **What it does / bureaucratic ritual:** Residents propose investment projects; the city checks public-interest, jurisdiction, and capital-budget criteria; eligible projects are co-developed and put to a public vote; winners enter municipal delivery.
- **Technology role:** A digital participation and voting platform supports a hybrid citywide process. Technology enables scale but is not the conceptual intervention.
- **Affect and evidence:** Intended affect is civic ownership, practical imagination, and confidence in public spending. A city interview describes genuine public appropriation and a participant asked for an even larger budget, but **systematic experienced affect is not evidenced**.
- **Civic problem / beneficiary:** Gives residents direct influence over a material share of investment and creates projects from accessible paths to green spaces and community facilities.
- **Power / contestability:** Voting is binding within the allocated envelope; city staff screen feasibility and jurisdiction, merge projects, and control implementation. Progress is public, but delays and eligibility boundaries can frustrate proposers.
- **Durable artifact:** Annual ritual, public platform, evaluation reports, funded projects, and physical changes.
- **Classification:** **Infrastructure awaiting evidenced Sparkle.**
- **SB borrows:** Put real money behind the invitation; welcome children and non-citizens; make eligibility criteria part of the public ritual.
- **Concern/gap:** Participation and implementation can favour organised, digitally confident neighbourhoods; affect evidence is thin.
- **Evidence confidence / readiness:** **High facts, low affect / reserve or contrast.**

### 15. America in One Room + Stanford Online Deliberation Platform

- **Dates/status:** First national event in 2019; online climate/energy event in 2021 and democratic-reform event in 2023; platform and research programme remain active.
- **Geography/community:** United States; stratified, nationally representative samples of voters.
- **Organisation / people / network:** Stanford Deliberative Democracy Lab, Helena, and NORC at the University of Chicago; James Fishkin, Alice Siu, Larry Diamond, and trained facilitators.
- **URL / discovery source:** [Project archive](https://deliberation.stanford.edu/america-in-one-room); [online democratic-reform event](https://deliberation.stanford.edu/results-america-one-room-democratic-reform); Stanford Deliberative Democracy Lab.
- **What it does / bureaucratic ritual:** Representative participants receive balanced briefing materials, deliberate in diverse small groups, question competing experts, and complete pre/post opinion and experience surveys.
- **Technology role:** Online editions use algorithmic group assignment and a self-moderating video platform; Stanford is researching AI-assisted moderation and contribution-quality assessment. The core invention is the deliberative protocol.
- **Affect and evidence:** **Participant-reported and observed:** 98.2% of the 2019 participants found the experience valuable, while 95% said they learned about people unlike themselves; the 2026 Stanford synthesis reports improved democratic satisfaction, trust, empathy, and warmer views of opponents. The 98.2% figure is also reported in an independent [contemporary analysis](https://www.salon.com/2019/10/06/civil-discourse-over-civil-war-lessons-of-america-in-one-room/).
- **Civic problem / beneficiary:** Tests what a representative public would think under informed, respectful conditions instead of measuring reactive opinion.
- **Power / contestability:** Participants shape the findings and can question experts, but sponsors choose the agenda and briefing materials. Results advise media and policymakers and are not binding.
- **Durable artifact:** Deliberative Poll method, platform, datasets, briefing books, participant stories, research, and repeated events.
- **Classification:** **Sparkle ancestor with emerging-tech evolution.**
- **SB borrows:** Treat encounter quality as a measurable outcome; make strangers into a temporary civic body; preserve participant stories alongside aggregate opinion change.
- **Concern/gap:** An expensive, curated event can create a powerful temporary feeling without transferring formal authority.
- **Evidence confidence / readiness:** **High / strong website candidate.**

### 16. Estonia's 2013 Rahvakogu (People's Assembly)

- **Dates/status:** One national process in 2013; completed, archived, and followed by later Estonian assemblies and the Rahvaalgatus initiative platform.
- **Geography/community:** Estonia; open online contributors followed by 314 randomly selected deliberators.
- **Organisation / people / network:** Estonian Cooperation Assembly, Praxis, Network of Estonian Nonprofit Organizations, volunteers, experts, political parties, and President Toomas Hendrik Ilves.
- **URL / discovery source:** [Official archive](https://kogu.ee/en/activity/peoples-assembly/); [CrowdLaw case](https://congress.crowd.law/case-rahvakogu.html); CrowdLaw Catalog.
- **What it does / bureaucratic ritual:** Crowdsourced proposals on elections, party finance, and civic participation; experts grouped and assessed them; thematic seminars refined them; a randomly selected assembly prioritised 15 proposals for parliament.
- **Technology role:** Online crowdsourcing, commenting, and support/critique at national scale, combined with in-person deliberation. Emerging for its time, but not AI.
- **Affect and evidence:** Intended affect was restored legitimacy after a party-finance scandal. **Participant-reported:** roughly half were satisfied with the process, yet a survey found 65% experienced reduced trust in government, parties, and parliament and only 10% increased trust. Researchers link this partly to weak parliamentary feedback after a strong participatory process.
- **Civic problem / beneficiary:** Sought to give citizens a route into constitutional and political reform; several proposals became law, including a public right of initiative and easier party formation.
- **Power / contestability:** Citizens made recommendations; parliament retained full authority and did not provide an adequate closing feedback loop. That gap is the core finding.
- **Durable artifact:** Archived proposals, laws, a repeatable assembly method, successor citizen-initiative infrastructure, and a major cautionary case.
- **Classification:** **Warning case.** Not because it disguises coercion, but because an impressive participatory interface can intensify distrust when the institutional handoff is weak.
- **SB borrows:** Design the ending first; promise only the authority the institution will honour; treat official feedback and visible disposition as part of the participant experience.
- **Concern/gap:** The original open contributors and assembly were not fully representative; causal claims about trust require care.
- **Evidence confidence / readiness:** **High / strong warning card.**

### 17. Models All the Way Down

- **Dates/status:** Published in 2025; live visual investigation with an open data repository.
- **Geography/community:** International AI research and public-interest technology audiences; investigates the German nonprofit LAION's globally used LAION-5B dataset.
- **Organisation / people / network:** Knowing Machines, with Der Spiegel; Christo Buschek and Jer Thorp. Knowing Machines is sponsored by the Alfred P. Sloan Foundation.
- **URL / discovery source:** [Visual story](https://knowingmachines.org/models-all-the-way); [investigation data](https://github.com/NYUEngelberg/models-all-the-way); founder nomination and the Knowing Machines project archive.
- **What it does:** Uses scroll-driven text, image grids and animated data structures to follow how 5.8 billion image–text pairs became an influential foundation dataset. It connects web crawling, alt text, commercial web conventions, CLIP similarity scores, inclusion thresholds, aesthetic ratings and safety labels to what generative models can later produce.
- **Bureaucratic relationship:** Indirect. A dataset is not inherently a bureaucracy; it is an administrative artifact produced through organised acts of crawling, extraction, classification, standardisation, threshold-setting, documentation, release and reuse. The project exposes this accumulated “bureaucratic sediment” and shows how small institutional and technical choices govern representation at enormous scale.
- **Technology's actual role:** The subject is an AI supply chain, and the explanation itself uses code, interactive visualisation and direct analysis of LAION data. The visual technology is constitutive: it lets a reader encounter scale, repetition and threshold decisions rather than only reading about them.
- **Designed affect:** Awe at the scale, alarm about harmful contents, and productive suspicion toward claims that a dataset neutrally represents the world. The scrollytelling, accumulating image grids, animation, repetition and encounters with thin numerical thresholds are the affective intervention: presentation is not decoration around the research but the means by which its production system and classificatory power become perceptible.
- **Experienced affect evidence:** **Affect not evidenced in published evaluation.** The founder nominated it after finding its visual treatment compelling, which is useful editorial evidence but not yet a public participant claim.
- **Civic problem / beneficiary:** Builds public and practitioner literacy about the data infrastructure underneath widely deployed AI and argues for dataset transparency as a condition of accountability.
- **Power / contestability:** Strongly reveals how dataset creators, commercial website conventions, opaque source models and numerical thresholds shape inclusion. LAION's openness enables scrutiny, but people whose material enters the pipeline have little meaningful notice, appeal or control.
- **Durable artifact:** The visual story, an open repository containing domain, language, licence, safety, watermark and similarity analyses, and a reusable method for investigating training datasets.
- **Classification:** **Project we're inspired by; exemplar of affective legibility.** Its bureaucratic connection is indirect and it is not a public-service redesign. It belongs because it combines emerging technology, designed affect, public-interest model literacy, power legibility and a reusable audit artifact exceptionally well. Inspiration does not require satisfying every Sparkle dimension.
- **What Sparkle Bureaucracy borrows:** Make scale bodily comprehensible; animate the path from an administrative by-product to public consequences; expose every supposedly neutral classification as a situated decision; publish the evidence beneath the experience.
- **Concern/gap:** Public understanding is a civic contribution but not a transfer of decision power. The project diagnoses and audits the pipeline without itself creating a route to correct or contest individual inclusion.
- **Evidence confidence:** **High** for mechanism, authorship and durable artifacts; **low** for experienced affect.
- **Website readiness:** **Strong.** Describe what the visual form is designed to make perceptible; separately note that no published audience study was found.

## Organisation candidates

These are organisations to investigate in their own right, not merely owners of the projects above.

| # | Organisation | Why it belongs in the longlist | Linked projects / source |
| ---: | --- | --- | --- |
| 1 | [AI Objectives Institute](https://ai.objectives.institute/projects) | Nonprofit lab building open AI for collective agency, with explicit attention to under-resourced communities and representation risks. | Talk to the City |
| 2 | [Google DeepMind](https://deepmind.google/research/publications/65220/) | Research programme on AI mediation, preference aggregation, and common ground; useful both as inspiration and as a power/scale contrast. | Habermas Machine |
| 3 | [Go Vocal](https://www.govocal.com/) | Widely deployed civic-participation vendor moving from back-office AI summaries toward live, participant-visible sensemaking. | Cambridge Design Code; Perspectives |
| 4 | [UK Incubator for AI](https://ai.gov.uk/) | Government product team placing generative AI inside named administrative workflows and publishing algorithmic transparency records. | Consult / Humphrey |
| 5 | [UrbanistAI](https://site.urbanistai.com/) | Participatory-AI studio making planning processes visual, workshop-based, and affectively legible. | Helsinki Summer Streets; UrbanistAI Kids |
| 6 | [Mobile Pathways](https://www.mobilepathways.org/) | Technology nonprofit using government data and AI to strengthen immigration nonprofits rather than replace trusted intermediaries. | Pathfinder; MyCamino; immigration data dashboards |
| 7 | [Suffolk LIT Lab](https://suffolklitlab.org/) | Builds open court infrastructure, legal forms, e-filing, and issue spotting with a durable volunteer/court/legal-aid community. | Document Assembly Line; Court Forms Online; Spot |
| 8 | [National Legal Aid](https://nationallegalaid.org.au/) / Legal Services Commission of South Australia | Public-interest legal network operating a safety-bounded AI dispute-resolution service at national scale. | amica |
| 9 | [Citizens Foundation](https://www.citizens.is/) | Long-running open-source collective-intelligence organisation spanning playful civic debate, participatory budgeting, AI agents, and policy synthesis. | Better Reykjavík; Your Priorities; Policy Synth |
| 10 | [The GovLab](https://thegovlab.org/) | Research-and-action lab focused on crowdsourcing expertise, public problem-solving, and institution-ready participatory methods. | Policy Synth; CrowdLaw; Smarter Crowdsourcing |
| 11 | [vTaiwan](https://info.vtaiwan.tw/) / [g0v](https://g0v.tw/intl/en/) | Civic process and grassroots network joining hackathon culture, open tools, ritualised facilitation, and government response. | vTaiwan; many adjacent Taiwanese civic projects |
| 12 | [Computational Democracy Project](https://compdemocracy.org/) | Nonprofit stewarding pol.is and documenting machine-assisted deliberation around the world. | pol.is; vTaiwan |
| 13 | [Decidim Free Software Association](https://decidim.org/about/) | Governs a participation platform as a public commons, including a community that participates in the software's own roadmap. | Decidim Barcelona; Metadecidim |
| 14 | [CONSUL Democracy Foundation](https://consuldemocracy.org/) | Independent steward of globally reused municipal participation software born inside Madrid City Council. | Decide Madrid; CONSUL deployments |
| 15 | [Stanford Deliberative Democracy Lab](https://deliberation.stanford.edu/) | Produces unusually strong evidence about what deliberation does to knowledge, empathy, trust, and opinion. | America in One Room; Online Deliberation Platform |
| 16 | [Estonian Cooperation Assembly](https://kogu.ee/en/) | Connects national civic assemblies, citizen initiatives, and institutional follow-through—including evidence about where the handoff failed. | Rahvakogu; Rahvaalgatus |

## Project directory and archive candidates

| # | Directory / archive | What to search there | Editorial value / caution |
| ---: | --- | --- | --- |
| 1 | [Civic Tech Field Guide](https://civictech.guide/) | Civic AI, participatory budgeting, deliberation, petitions, legal tech, organisations, and people. | The broadest discovery pool; entries are crowdsourced, so verify every candidate at source. |
| 2 | [OECD OPSI Case Study Library](https://oecd-opsi.org/case-study-archive/) | Implemented public-sector innovation, AI, service design, consultation, and participation. | Strong institutional detail; many entries are self-submitted and affect evidence is often maker-claimed. |
| 3 | [Participedia](https://participedia.net/) | Cases, methods, organisations, and collections in participatory and deliberative democracy. | Excellent process descriptions and criticism; update dates and evidence quality vary. |
| 4 | [People Powered Digital Participation Tool Ratings](https://www.peoplepowered.org/platform-ratings) | 30 rated participation tools plus AI-enabled special mentions. | Particularly useful for accessibility, ethics, cost, data, and platform comparison rather than publicity claims. |
| 5 | [UNDP / People Powered Guide to Digital Participation Platforms 2025](https://www.undp.org/publications/guide-digital-participation-platforms-2025) | Matrix of more than 80 platforms, especially Global Majority deployments and AI features. | Strong route beyond Europe/North America; a guide rather than a project-outcome archive. |
| 6 | [Nesta AI and Collective Intelligence cases](https://www.nesta.org.uk/feature/ai-and-collective-intelligence-case-studies/) | 20 projects combining machine and collective intelligence. | Useful conceptual taxonomy and leads; several cases are older and require current-status checks. |
| 7 | [Digital Public Goods Registry](https://www.digitalpublicgoods.net/registry) | Open-source software, data, content, and AI systems with civic or public-service uses. | Excellent “useful infrastructure awaiting Sparkle” pool; registry status does not evidence implementation or affect. |
| 8 | [CrowdLaw Catalog](https://catalog.crowd.law/) | 100 cases of public participation across problem identification, solution development, drafting, decision, and evaluation. | Process-stage structure maps cleanly to Sparkle's procedural grammar. |
| 9 | [OECD Innovative Citizen Participation database/work](https://www.oecd.org/governance/innovative-citizen-participation/) | Hundreds of representative deliberative processes and permanent institutions. | Strong for assemblies and institutionalisation; technology is not a primary filter. |
| 10 | [Local Government Association AI Case Study Bank](https://www.local.gov.uk/our-support/cyber-digital-and-technology/artificial-intelligence-hub/artificial-intelligence-case) | Current UK council AI in planning, social care, resident contact, casework, and internal administration. | Rich source of real bureaucracy; success accounts often come from implementers and need independent checks. |
| 11 | [Local Digital Case Studies](https://www.localdigital.gov.uk/case-studies/) | Digital planning, public consultation, council service redesign, PropTech, and AI analysis. | Good quantified workflow evidence and named partners; public affect is rarely measured. |
| 12 | [Interoperable Europe Public Sector Tech Watch](https://interoperable-europe.ec.europa.eu/collection/public-sector-tech-watch) | European public-sector AI, emerging technology, interoperability, and service-delivery cases. | Detailed case templates and government contacts; affect is normally absent. |
| 13 | [GOV.UK Algorithmic Transparency Records](https://www.gov.uk/algorithmic-transparency-records) | Named government algorithmic tools, models, purposes, data, risks, human review, and appeal routes. | Best source here for inspecting power and contestability, including projects that should become warning cases. |
| 14 | [CONSUL Democracy use cases](https://docs.consuldemocracy.org/use_cases/) | Municipal proposals, budgets, consultations, and collaborative lawmaking across countries. | Good implementation leads; written by the software ecosystem, so corroborate affect and impact. |
| 15 | [Decidim “already using” network](https://decidim.org/) | Public bodies and civil-society organisations using Decidim for varied processes. | A route to live project instances, especially for tracing proposals into results. |

## Relevant people and networks

This list mixes individual researchers/builders with communities whose relationships may be as important as any one product.

| # | Person or network | Why follow them | Connected evidence / projects |
| ---: | --- | --- | --- |
| 1 | [Audrey Tang and the Plurality network](https://www.plurality.net/) | Articulates technology as a way to increase social diversity and mutual legibility, grounded in Taiwanese government practice. | vTaiwan, g0v, pol.is, Alignment Assemblies |
| 2 | [g0v](https://g0v.tw/intl/en/) | Decentralised civic-hacker network with recurring hackathons, forkable government interfaces, and unusual state–civil-society permeability. | vTaiwan and Taiwan's wider civic-tech ecosystem |
| 3 | [Colin Megill / Computational Democracy Project](https://compdemocracy.org/) | Co-creator and steward of pol.is; central to machine-supported opinion mapping and cross-group consensus. | pol.is, vTaiwan |
| 4 | [Róbert Bjarnason](https://www.citizens.is/) | Builder connecting participatory budgeting, structured debate, AI policy agents, and public-sector deployment over nearly two decades. | Your Priorities, Better Reykjavík, Policy Synth |
| 5 | [Beth Simone Noveck](https://law.northeastern.edu/faculty/noveck/) / The GovLab network | Bridges government authority, collective intelligence, crowdsourcing, and implementation-oriented public problem solving. | Policy Synth, CrowdLaw, Smarter Crowdsourcing |
| 6 | [Claudia Chwalisz / DemocracyNext](https://www.demnext.org/people/claudia-chwalisz) | Leading network for citizens' assemblies, institutionalisation, spaces for deliberation, and evaluation. | OECD deliberative-process database; DemocracyNext assemblies |
| 7 | [James Fishkin / Stanford Deliberative Democracy Lab](https://profiles.stanford.edu/james-fishkin) | Developed Deliberative Polling and a research practice that measures knowledge, affect, and opinion before and after the ritual. | America in One Room |
| 8 | [Alice Siu / Stanford Online Deliberation Platform](https://deliberation.stanford.edu/) | Works on scaling facilitated deliberation through online and AI-assisted tools while retaining research-grade evaluation. | Online A1R projects |
| 9 | Quinten Steenhuis and David Colarusso / [Suffolk LIT Lab](https://suffolklitlab.org/) | Combine legal process expertise, open-source infrastructure, AI experimentation, and a maintenance community. | Document Assembly Line, Spot, legal-intake research |
| 10 | Colleen McKenzie and Bruno Marnette / [AI Objectives Institute](https://ai.objectives.institute/team) | Build LLM interfaces for qualitative public voice and collective intent, including under-resourced-community deployments. | Talk to the City |
| 11 | Damiano Cerrone / [UrbanistAI](https://site.urbanistai.com/) | Develops participatory-AI workshop formats that turn policy and planning into shared visual material. | Helsinki Summer Streets, UrbanistAI Kids |
| 12 | Michael Henry Tessler, Michiel Bakker, and Christopher Summerfield | Research AI mediation, common-ground statements, and how dissent can be incorporated into group outputs. | [Habermas Machine](https://deepmind.google/research/publications/65220/) |
| 13 | [People Powered](https://www.peoplepowered.org/) | Global practitioner network evaluating digital participation tools and publishing grounded, transferable cases. | Platform Ratings; vTaiwan case study |
| 14 | [Metadecidim](https://meta.decidim.org/) | Community that uses participatory infrastructure to govern that infrastructure's design and roadmap—a recursive bureaucracy worth studying. | Decidim |
| 15 | [Participatory Budgeting Project](https://www.participatorybudgeting.org/) | Practitioner network with process guides and evaluation tools attentive to participant experience, equity, and implementation. | Municipal participatory budgeting across North America |
| 16 | [Code for All](https://codeforall.org/) | International civic-tech network useful for finding community-led and thin-capacity work absent from large innovation archives. | Member organisations and local civic-tech projects |

## Cross-case findings for the Sparkle definition

1. **The affective intervention often happens at the synthesis or handoff, not at intake.** vTaiwan, Habermas Machine, and America in One Room make people encounter other positions differently. UrbanistAI gives them a shared object. Rahvakogu shows that a weak ending can undo a strong encounter.
2. **Reduced anxiety and uncertainty are plausible forms of Sparkle, but they need evidence.** Pathfinder, amica, and Document Assembly Line make consequential procedures more navigable. Only Pathfinder's professional-user survey and amica's hosted testimonial currently provide direct affect-adjacent evidence.
3. **Staff delight is not citizen delight.** Consult and Go Vocal have good user evidence from analysts. Their public-facing Sparkle remains unproven until contributors can see, understand, or challenge how their input was represented.
4. **A visible artifact connects feeling to power.** The best cases leave a consensus statement, tracked proposal, filed motion, legal agreement, funded park, changed street, or recorded institutional response.
5. **Contestability is the line between Sparkle and a soothing interface.** Human review is useful but insufficient if only officials can inspect or edit the AI's interpretation. vTaiwan's point-by-point response, Decidim's proposal traceability, and amica's non-binding, quality-assured suggestion offer stronger patterns.
6. **A strong public card may be a warning rather than a hero.** Rahvakogu is unusually useful for defining Sparkle because it demonstrates that invitation without honoured handoff can make people feel worse about power.

## Recommended candidates to carry into the shared 25-project longlist

Prioritise these nine from this research lane for portfolio balance:

1. **vTaiwan** — strongest combination of technology, ritual, civic handoff, and participant experience.
2. **Habermas Machine** — unusually strong participant evidence for AI-mediated common ground.
3. **Pathfinder** — clear boost for thin-capacity civic organisations inside a high-stakes bureaucracy.
4. **amica** — calm, safety-bounded redesign of an emotionally charged legal ritual.
5. **America in One Room** — strong affect evidence and a useful non-binding ancestor.
6. **UrbanistAI / Helsinki Summer Streets** — vivid shared imagination inside a real planning handoff, with affect caveat.
7. **Talk to the City** — central technical reference, published with explicit “affect unproven” wording.
8. **Document Assembly Line** — best “valuable infrastructure awaiting evidenced Sparkle” example.
9. **Rahvakogu** — strongest warning that procedural closure is part of the emotional design.

Hold Consult, Go Vocal, Policy Synth, Decidim, Decide Madrid, Better Reykjavík, and Paris Participatory Budget in the reserve pool; several may replace overlapping consultation or budgeting projects found in other lanes.
