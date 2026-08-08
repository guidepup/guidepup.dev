---
title: Introduction
description: Learn when to use Guidepup's Virtual Screen Reader.
---

# Introduction

Guidepup Virtual Screen Reader is a screen reader simulator for unit tests.

This package aims to supplement your testing by enabling you to automate a Virtual Screen Reader for unit test workflows the same you as would for mouse or keyboard based scenarios.

- **Mirrors Screen Reader Functionality** - simulate and assert on what users can do when using screen readers.
- **Test Framework Agnostic** - run with Jest, Vitest, Web Test Runner, in Storybook, as an independent script, no vendor lock-in.
- **UI Framework Agnostic** - want to use React, Vue, Solid, Svelte, etc.? All good here! Works with any UI framework, and plays nicely with the [Testing Library](https://testing-library.com/) suite.
- **Fast Feedback** - avoid the cumbersome overhead of running an e2e test with a real screen reader by running virtually over the provided DOM.

> <svg style={{ display:"inline-block", fill: "#fff", verticalAlign: "text-bottom", marginRight: "0.5rem" }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> **Important**
>
> This package should not replace but augment your screen reader testing, there is no substitute for testing with real screen readers and with real users.

If you are looking to automate real screen readers, see the [Guidepup API documentation](../getting-started/getting-started) and the [`@guidepup/guidepup`](https://github.com/guidepup/guidepup) package.

See the [getting started](./getting-started) guide for a minimal setup and the [Jest, Vitest, and Testing Library](./using-with-jest-vitest-testing-library) guide for framework-specific examples.

If you are looking to for quick and easy Jest snapshot testing, check out the [`@guidepup/jest`](https://github.com/guidepup/jest) package.
