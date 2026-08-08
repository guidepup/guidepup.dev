---
title: Guidepup vs other accessibility testing
description: Understand how Guidepup complements accessibility testing tools such as axe and Playwright.
---

# Guidepup vs other accessibility testing

Guidepup is not a replacement for existing accessibility testing tools.

Different tools test different aspects of an application, and a strong accessibility testing strategy can combine them.

## Different tools, different questions

| Tool                                                                                     | What it helps you test                                 |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [axe](https://www.deque.com/axe/)                                                        | Automatically detectable accessibility violations      |
| [Playwright](https://playwright.dev/)                                                    | Application behaviour and UI interactions              |
| [Playwright accessibility assertions](https://playwright.dev/docs/accessibility-testing) | Expected accessible names, roles, states and structure |
| [Guidepup Virtual Screen Reader](../virtual-screen-reader/introduction)                  | Screen reader behaviour in fast, isolated tests        |
| [Guidepup with VoiceOver or NVDA](../getting-started)                                    | Screen reader behaviour using a real screen reader     |
| Manual testing                                                                           | Real-world accessibility and usability                 |

The distinction is important.

An accessibility scanner might tell you that a button has an accessible name. A browser assertion might tell you that the button has the expected role and state.

Guidepup can test what happens when a screen reader user actually navigates to and interacts with that button.

## Complementary, not competing

For example, an accessibility test suite might include:

1. **Static analysis** to catch automatically detectable accessibility issues.
2. **Browser and component tests** to verify application behaviour and accessible interface structure.
3. **Screen reader tests** to verify screen reader navigation, interaction and output.
4. **Manual testing** to evaluate the experience with real users.

Each layer catches problems that the others may not.

Guidepup is intended to add screen reader testing to this strategy rather than replace the tools you already use.

## Real screen readers and the Virtual Screen Reader

Guidepup provides two ways to automate screen reader behaviour:

### Real screen readers

Guidepup can automate real screen readers such as VoiceOver and NVDA.

That gives you higher-fidelity end-to-end coverage of the actual screen reader experience.

See [getting started](../getting-started) to learn more.

### Virtual Screen Reader

The Virtual Screen Reader provides a fast way to test screen reader behaviour without running a platform screen reader.

It is well suited to component and integration tests where you want to run many tests quickly.

See [Virtual Screen Reader](../virtual-screen-reader/introduction) for more information.
