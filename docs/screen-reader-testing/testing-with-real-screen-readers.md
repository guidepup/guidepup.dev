---
title: Testing with real screen readers
description: Learn how to automate real screen readers with Guidepup for end-to-end accessibility testing.
---

# Testing with real screen readers

Guidepup can automate real screen readers, allowing you to test accessibility behaviour in the same environment your users rely on.

Currently, Guidepup supports automating [VoiceOver](./testing-voiceover) on macOS and [NVDA](./testing-nvda) on Windows.

The common test model is the same regardless of the reader in use: start the reader, move it through the page using shared commands or commands specific to the reader, capture what it says, and then make an assertion.

The shared APIs are described in the API reference for [screenReader](../api/class-screenreader), [VoiceOver](../api/class-voiceover), and [NVDA](../api/class-nvda). In each case, the navigation workflow is centred around `next()`, `previous()`, `perform()`, and `lastSpokenPhrase()`.

## Why test with real screen readers?

The [Virtual Screen Reader](../virtual-screen-reader/introduction) provides a fast way to test screen reader behaviour without running a platform screen reader.

Real screen reader testing goes one step further by exercising the actual screen reader, operating system accessibility APIs, browser, and web application together.

This makes it useful for end-to-end regression testing where fidelity to the user's environment matters.

## What can you test?

With a real screen reader, you can automate workflows involving:

- **Navigation** — move through content using screen reader commands and navigate by headings, links, landmarks, form controls and other elements.
- **Interaction** — activate controls, enter and exit interactive content, complete forms and interact with application UI.
- **Announcements** — capture and assert spoken phrases, including announcements caused by dynamic changes.
- **Screen reader state** — configure settings and control screen reader behaviour as part of a test.
- **User journeys** — combine navigation, interaction and announcements to test complete workflows.

See [testing navigation](./testing-navigation), [testing announcements](./testing-announcements), and [testing interactions](./testing-interactions) for focused examples.

## VoiceOver and NVDA

Guidepup provides a consistent API across supported screen readers while retaining access to behaviour specific to the selected screen reader when required.

The screen reader you use depends on your test environment:

| Screen reader | Operating system | Guidepup    |
| ------------- | ---------------- | ----------- |
| VoiceOver     | macOS            | `voiceOver` |
| NVDA          | Windows          | `nvda`      |

See [testing VoiceOver](./testing-voiceover) and [testing NVDA](./testing-nvda) for platform specific setup and examples.

The API layer for VoiceOver is described in [class-voiceover](../api/class-voiceover#voiceover-perform) and the NVDA API is described in [class-nvda](../api/class-nvda#nvda-perform).

## Real screen readers in automated tests

Real screen reader tests can be used directly with Guidepup or alongside a browser automation framework such as Playwright.

For example, a test can use Playwright to navigate to an application while Guidepup controls the screen reader:

```ts
import { voiceOverTest as test } from "@guidepup/playwright";
import { expect } from "@playwright/test";

test("checkout is accessible", async ({ page, voiceOver }) => {
  await page.goto("/checkout");

  await voiceOver.navigateToWebContent();

  await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);

  expect(await voiceOver.lastSpokenPhrase()).toBe("heading level 1, Checkout");
});
```

The browser automation and screen reader automation work together: Playwright controls the application, while Guidepup controls and observes the screen reader.

The same high-level test shape is visible in the real screen reader docs for [testing VoiceOver](./testing-voiceover) and [testing NVDA](./testing-nvda): start the reader, move to a target, inspect the phrase, and compare it with the expectation.

## Running real screen readers reliably

Real screen reader automation has additional requirements compared with browser-only tests.

Tests should:

- Run on the operating system required by the screen reader.
- Configure the machine using [`@guidepup/setup`](https://www.npmjs.com/package/@guidepup/setup).
- Install the screen reader assets required by the Guidepup version being tested using [`@guidepup/setup`](https://www.npmjs.com/package/@guidepup/setup).
- Avoid running multiple tests concurrently when they share a screen reader.
- Use a headed browser where required by the screen reader and browser combination.

For CI environments, see [CI/CD](../getting-started/ci-cd).

For the current platform and screen reader support, see the [support matrix](../reference/support-matrix).
