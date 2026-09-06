# Lio Project Memory

## Product
Lio (Learn It Out) is an adaptive technology-learning publication and learning path. It should feel like a thoughtful independent technology publication with a personalized layer — not a conventional course dashboard and not an AI-generated content farm.

**Core promise:** turn difficult and changing technology into understandable, practical stories, then recommend what a reader should learn next.

## Principles
1. Beginner-first: a reader can start with zero knowledge.
2. Human-first writing: articles should sound like a curious, informed writer explaining something to another person — not like generated documentation.
3. Story before terminology: begin with a question, tension, example, observation, or concrete problem; introduce technical vocabulary after the reader has a reason for it.
4. Progressive depth: intuition first, mechanism second, technical detail third.
5. Useful over clickbait: optimize learning value, relevance, and healthy engagement—not raw time-on-site.
6. Research is raw material, not the product. A paper can become several explainers, tutorials, visualizations, experiments, or challenges.
7. Every article has structured metadata so content can become a knowledge graph.
8. Keep the first version $0 and simple.
9. GitHub is the source of truth for code, content, metadata, prompts, and project decisions.
10. Do not make the first version depend on an AI API. Human-triggered ChatGPT-assisted content production is acceptable. APIs/agents are optional later.

## Current stack
- Static HTML/CSS/JavaScript MVP
- HTML article files for the current seed library
- GitHub repository
- GitHub Pages deployed from `main` / repository root through Settings
- Browser localStorage for anonymous onboarding and reading progress
- No backend, database, paid API, or secret key

## Deployment decision
Use GitHub Pages **Deploy from a branch → `main` → `/ (root)`** for the MVP. The previous Actions deployment workflow is not required for this setup.

## Visual direction
The current redesign takes inspiration from the qualities the user liked in Claude/Anthropic's product presentation: calm, confident, spacious, premium, restrained, and typography-led. It is **not a visual copy**.

Design rules:
- warm paper/off-white background rather than bright white
- near-black typography
- serif editorial display typography paired with a quiet sans-serif UI
- restrained lime accent used only to create emphasis
- generous whitespace and readable line lengths
- minimal navigation
- thin rules and editorial dividers instead of a grid of rounded cards
- educational diagrams that explain the subject rather than decorative stock images
- subtle interaction; no noisy gamification
- homepage reads like a publication front page
- article pages read like essays/books, not dashboards

## Article quality standard
The old seed articles were too short and felt AI-written because they moved directly from definition → list of facts → summary. Future articles should be substantially more developed.

A strong Lio article should normally have:
1. A human opening — a question, observation, scene, misconception, or concrete problem.
2. A clear promise: what the reader will understand by the end.
3. A mental model before terminology.
4. Examples and concrete situations.
5. A natural narrative progression: problem → discovery → mechanism → consequence.
6. Technical vocabulary introduced only when useful.
7. Honest caveats and boundaries.
8. One or more useful diagrams/examples where they materially improve understanding.
9. A concise “what you should remember” section.
10. A meaningful next story connected to the knowledge graph.

Target article size is generally **1,200–2,500 words for a substantial explainer**, with shorter pieces allowed when the idea genuinely needs less. A 300-word article is not automatically bad, but a flagship concept should not feel compressed merely to increase publishing volume.

The writing should avoid repetitive AI patterns such as:
- “In today's rapidly evolving world…” openings
- definition-first encyclopedia tone
- excessive headings every few sentences
- generic “key takeaways” padding
- fake personal anecdotes
- exaggerated claims
- unnecessary bullet lists
- saying the same idea three different ways
- polished but emotionally flat prose

The reference is **Medium-style human readability and storytelling**, not copying Medium's visual UI or any particular author's voice. Technology writing should be clear, specific, grounded, and willing to show uncertainty. The Columbia Tow Center's technology-writing guidance is a useful reminder to avoid jargon and clichés.

## Current implementation
- Homepage redesigned as an editorial publication front page.
- Homepage now uses a large narrative feature, substantial story rows, topic exploration, and an editorial “why” section rather than many small cards.
- Educational SVGs are self-hosted and explanatory.
- Flagship Neural Networks article rewritten as a long-form human-first story.
- LLM next-token article rewritten as a long-form human-first story.
- Shared article CSS now supports readable serif body copy, pull quotes, diagrams, lesson boxes, and next-story navigation.
- Onboarding/localStorage behavior remains compatible with the redesigned homepage.

## Learning model
Reader profile eventually contains:
- interests
- goals
- self-described level
- concepts known/uncertain
- completed articles
- quiz/practice evidence
- recent interests
- difficulty tolerance

Recommendation candidates are scored using relevance, knowledge gap, prerequisite readiness, learning value, practical value, freshness, difficulty fit, novelty, and diversity.

Core loop:
`onboarding → personalized feed → article → quiz/practice → knowledge estimate → next useful concept`

## Content types
- Explainer
- Concept
- Tutorial
- Research
- Comparison
- Experiment
- Visualization
- Challenge
- Project idea

## Article metadata
Each article should ideally define:
- id
- title
- type
- topics
- difficulty
- prerequisites
- concepts_taught
- estimated_time
- learning_value
- practical_value
- freshness
- related / next articles
- sources when claims depend on external research

## Content production
Do not optimize for a raw target such as 300 shallow blogs/month. The target is hundreds of useful **learning experiences** when the curriculum can support them. Batch creation is acceptable, but every batch should be edited for voice, narrative, factual accuracy, examples, and curriculum connections.

## Roadmap
### Now
1. Finish the remaining seed articles to the new long-form standard.
2. Add article quizzes and completion events.
3. Build browser-side recommendation scoring from `content.json`, interests, read history, and prerequisites.
4. Add topic/index pages and visible learning progress.
5. Expand the knowledge graph and next-story links.

### Later, only when justified
- Astro or another static-site generator when content volume makes it useful
- Cloudflare Worker + D1 for accounts, synchronized progress, server recommendations, or other dynamic features
- Research agents/APIs for automation

## Safety / engineering rule
Never reset, force-push, or replace the main branch wholesale to make a website change. Prefer small, file-level commits and verify the current file SHA before every update/delete. Never put API keys or secrets in frontend files. The MVP should remain safe to publish as a public GitHub repository.

## Memory rule
If a future conversation lacks context, read this file first. Update this file when a major architectural/product decision changes.
