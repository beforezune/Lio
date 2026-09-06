# Lio Project Memory

## Product
Lio (Learn It Out) is an adaptive technology-learning platform. It should feel closer to a calm, useful publication plus a personalized learning path than a conventional course platform.

**Core promise:** turn difficult and changing technology into understandable, practical learning experiences, then recommend what a reader should learn next.

## Principles
1. Beginner-first: a reader can start with zero knowledge.
2. Progressive depth: intuition first, technical detail later.
3. Useful over clickbait: optimize learning value, relevance, and healthy engagement—not raw time-on-site.
4. Research is raw material, not the product. A paper can become several explainers, tutorials, visualizations, experiments, or challenges.
5. Every article has structured metadata so content can become a knowledge graph.
6. Keep the first version $0 and simple.
7. GitHub is the source of truth for code, content, metadata, prompts, and project decisions.
8. Do not make the first version depend on an AI API. Human-triggered ChatGPT-assisted content production is acceptable. APIs/agents are optional later.

## Current stack
- Static HTML/CSS/JavaScript MVP
- HTML article files for the current seed library
- GitHub repository
- GitHub Pages deployed from `main` / repository root through Settings
- Browser localStorage for anonymous onboarding and reading progress
- No backend, database, paid API, or secret key

## Deployment decision
Use GitHub Pages **Deploy from a branch → `main` → `/ (root)`** for the MVP. The previous `.github/workflows/pages.yml` was removed because Actions deployment is unnecessary for this setup and had caused a Pages configuration failure.

## Current UX direction
The homepage is now editorial and typography-first rather than a card-heavy startup dashboard:
- warm off-white canvas
- near-black type
- restrained lime accent
- generous whitespace
- strong headlines
- minimal navigation
- educational SVG diagrams instead of random stock imagery
- one featured learning experience
- linear article feed
- topic exploration
- calm onboarding
- subtle motion, no aggressive gamification

The visual goal is **inspired by the calm, premium qualities of modern editorial/AI products, not a copy of any specific site**.

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

## Content quality rule
Do not optimize for a raw target such as 300 shallow blogs/month. The target is hundreds of useful **learning experiences** when the curriculum can support them. Articles should be substantial enough to teach, include useful visuals/examples where appropriate, and connect to prerequisites and next concepts.

## Roadmap
### Now
1. Finish the editorial homepage and navigation.
2. Make flagship articles substantially deeper.
3. Add article quizzes and completion events.
4. Build browser-side recommendation scoring from `content.json`, interests, read history, and prerequisites.
5. Add topic/index pages and visible learning progress.

### Later, only when justified
- Astro or another static-site generator when content volume makes it useful
- Cloudflare Worker + D1 for accounts, synchronized progress, server recommendations, or other dynamic features
- Research agents/APIs for automation

## Safety / engineering rule
Never reset, force-push, or replace the main branch wholesale to make a website change. Prefer small, file-level commits and verify the current file SHA before every update/delete. Never put API keys or secrets in frontend files. The MVP should remain safe to publish as a public GitHub repository.

## Memory rule
If a future conversation lacks context, read this file first. Update this file when a major architectural/product decision changes.
