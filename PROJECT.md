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
- Self-hosted educational SVG visuals in `assets/`
- GitHub repository
- GitHub Pages deployed from `main` / repository root through Settings
- Browser localStorage for anonymous onboarding and reading progress
- No backend, database, paid API, or secret key

## Deployment decision
Use GitHub Pages **Deploy from a branch → `main` → `/ (root)`** for the MVP. Do not add an Actions deployment workflow unless the deployment strategy changes.

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
- flagship learning paths should feel like a visual course embedded inside the publication

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

**Storytelling default:** use fictional names/scenarios when they make an abstract technical idea easier to follow (for example, “Priya needs to find a name in a huge list”). Make it obvious when a scenario is illustrative. Do not invent a fictional anecdote and present it as a real event. For real research, companies, experiments, incidents, or historical events, use the real entities and cite the relevant sources.

The default narrative rhythm should feel like a strong Medium/InfoSec-style technical write-up: hook → situation/problem → curiosity → beginner explanation → concrete steps or mechanism → deeper technical explanation → caveat → practical takeaway → natural next story. This is a **storytelling structure reference, not a copying instruction**. Do not copy wording, distinctive phrases, or an author's personal voice from another publication.

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

The reference is **Medium-style human readability and storytelling**, not copying Medium's visual UI or any particular author's voice. Technology writing should be clear, specific, grounded, and willing to show uncertainty.

## Current implementation
- Homepage redesigned around a deep-learning publication rather than a card-heavy landing page.
- Homepage has a large LLM visual, editorial manifesto, a featured 10-lesson LLM path, story rows, and onboarding.
- Added self-hosted explanatory visuals: `assets/llm-pipeline.svg`, `assets/attention.svg`, and `assets/training-loop.svg`.
- Added a complete 10-article **Build an LLM From Scratch** learning path:
  1. `llm-from-scratch-roadmap.html`
  2. `llm-tokenization.html`
  3. `llm-embeddings.html`
  4. `llm-self-attention.html`
  5. `llm-multihead.html`
  6. `llm-transformer-block.html`
  7. `llm-training.html`
  8. `llm-data-batching.html`
  9. `llm-generation.html`
  10. `llm-from-base-to-assistant.html`
- The LLM path includes theory, equations, tensor shapes, PyTorch code, experiments, caveats, and links between lessons.
- `content.json` contains structured metadata and prerequisites for the LLM path.
- Shared article CSS supports code blocks, readable serif body copy, pull quotes, diagrams, lesson boxes, and next-story navigation.
- Onboarding/localStorage behavior remains compatible with the redesigned homepage.
- The four original seed articles were rewritten into the story-driven standard: `articles/algorithms.html`, `articles/neural-networks.html`, `articles/llm-next-word.html`, and `articles/attention.html`.

## LLM curriculum rule
The LLM series is a flagship curriculum, not ten disconnected blog posts. The intended progression is:
`text → tokens → embeddings → self-attention → multi-head attention → Transformer block → training → data/batching → generation → post-training/assistant`

Every lesson should make the previous lesson necessary and the next lesson feel like a natural consequence. Code should use PyTorch for tensors/autograd/GPU execution while implementing the core model mechanics explicitly enough for a learner to inspect them.

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
1. Add article quizzes and completion events to the LLM path.
2. Build browser-side recommendation scoring from `content.json`, interests, read history, and prerequisites.
3. Add topic/index pages and visible learning progress.
4. Expand the knowledge graph and next-story links.
5. Continue replacing older short seed articles with the new long-form standard.

### Later, only when justified
- Astro or another static-site generator when content volume makes it useful
- Cloudflare Worker + D1 for accounts, synchronized progress, server recommendations, or other dynamic features
- Research agents/APIs for automation

## Safety / engineering rule
Never reset, force-push, or replace the main branch wholesale to make a website change. Prefer small, file-level commits and verify the current file SHA before every update/delete. Never put API keys or secrets in frontend files. The MVP should remain safe to publish as a public GitHub repository.

## Memory rule
If a future conversation lacks context, read this file first. Update this file when a major architectural/product decision changes.
