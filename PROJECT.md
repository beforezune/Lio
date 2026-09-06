# Lio Project Memory

## Product
Lio (Learn It Out) is an adaptive technology-learning platform. It should feel closer to a calm, useful Medium-style publication plus a personalized learning path than a conventional course platform.

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
- Markdown article files
- GitHub repository
- GitHub Pages
- GitHub Actions for deployment
- Browser localStorage for anonymous onboarding/progress

## Later stack, only when justified
- Astro or another static-site generator when content volume makes it useful
- Cloudflare Worker + D1 for accounts, synchronized progress, server recommendations, or other dynamic features
- Research agents/APIs for automation

## UX direction
Simple, cool, clean, fast, slightly playful. Strong typography, generous whitespace, topic chips, short cards, progress indicators, diagrams, and small interactive moments. Avoid noisy dashboards and aggressive gamification.

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
The target may eventually be high volume (for example, hundreds of pieces per month), but quality and curriculum structure matter more than a raw article count. Batch creation can be requested manually in ChatGPT and committed to GitHub.

## Memory rule
If a future conversation lacks context, read this file first. Update this file when a major architectural/product decision changes.
