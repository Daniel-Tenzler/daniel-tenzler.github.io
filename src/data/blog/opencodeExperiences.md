---
title: 'Experiences Using Opencode’s Zen Model “Big Pickle” for Project Development'
description: 'A practical assessment of strengths and limitations encountered while using Opencode’s Zen model Big Pickle for real-world projects.'
pubDate: 'Jan 01 2026'
heroImage: '/blog-placeholder-3.jpg'
tags: ['web dev', 'AI', 'coding']
---

Over the past month, I have been working with Opencode’s Zen model “Big Pickle” in my spare time on several personal projects. These include my personal website, a reaction time training Android app, a Doppelkopf calculator, a web-based idle game, and a Steam library visualizer.

Big Pickle is clearly a capable model when used with care and clear boundaries. This is even more impressive given that the model is currently available for free, although it does use submitted data for training purposes (see https://opencode.ai/docs/zen/#privacy). Below are some practical experiences from using the model across different projects and setups.

## The Good

Big Pickle is particularly strong at code analysis, documentation, and implementation planning. While it is somewhat verbose by default, it processes information quickly and produces structured, mostly well-reasoned plans. Even without a dedicated planning MCP, the model is often able to stay on track across multiple messages. That said, maintaining a dedicated task or plan file is still more reliable than relying entirely on the model’s context.

For a free model, performance is also quite reasonable. Compared to locally hosted qwen3-8b or qwen3-24b models , Big Pickle handles file reads and writes noticeably faster. Although to be fair, I run an AMD GPU, so my setup is not optimal at all for local LLM hosting. When compared to remote Devstral 2 Small and Devstral 2 (both currently free), it outperforms Devstral 2 in terms of speed and is roughly on par with Devstral 2 Small.

## The Bad

Using Big Pickle without MCPs or subagents becomes difficult once a project reaches a moderate size. In practice, the model does not reliably handle its 200k token context. I consistently observed breakdowns between roughly 50k and 70k tokens, after which file edits failed more often and hallucinated code started to appear. While this can be reduced by using specialized subagents, it still requires actively keeping an eye on context size during each session.

The model also struggles with larger files, especially those exceeding 400–500 lines of code. While this depends on the language and content, files beyond this size are often only partially read. This leads to lost context, incomplete edits, and increasingly messy results. This is made worse by the model’s tendency to generate overly bloated files if not kept on a tight leash.

## The Ugly

When writing code, Big Pickle sometimes ignores constraints defined in AGENTS.md. This is not unique to this model, but it is still frustrating when it happens, especially in projects that rely on strict agent rules.

A more serious issue came up when I learned—through experience—that git commands must be explicitly disallowed in the configuration. While stuck on a task due to repeated file edit failures, the model executed a command that deleted all unstaged changes. This included unrelated work as well as finished and in-progress code.