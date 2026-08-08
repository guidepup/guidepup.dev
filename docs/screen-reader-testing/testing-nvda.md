---
title: Testing NVDA
description: Automate NVDA with Guidepup for end-to-end accessibility testing on Windows.
---

# Testing NVDA

Guidepup provides programmatic control over [NVDA](https://github.com/nvaccess/nvda), the open-source screen reader for Windows.

You can use Guidepup to start and stop NVDA, navigate web content, interact with controls, and capture what NVDA communicates to the user.

## Requirements

NVDA automation requires:

- Windows
- NVDA
- A supported browser, such as Chromium or Firefox
- Node.js
- [`@guidepup/guidepup`](https://www.npmjs.com/package/@guidepup/guidepup)

For the current supported versions and configurations, see the [support matrix](../reference/support-matrix).

## Machine setup

Configure your Windows machine for NVDA automation:

```bash
npx @guidepup/setup setup
```

Install the NVDA assets required by your installed version of Guidepup:

```bash
npx @guidepup/setup install
```

See the [machine setup guide](../guides/machine-setup) for more information about the configuration performed by `@guidepup/setup`.

## Starting NVDA

The `nvda` instance provides direct control over NVDA:

```ts
import { nvda } from "@guidepup/guidepup";

await nvda.start();

try {
  // NVDA automation.
} finally {
  await nvda.stop();
}
```

Always stop NVDA when the test completes, including when the test fails.

When using [`@guidepup/playwright`](https://www.npmjs.com/package/@guidepup/playwright), the integration handles starting and stopping NVDA for each test.

## Navigating web content

NVDA navigation is typically expressed with its [`keyboardCommands`](../api/class-nvda#nvda-keyboard-commands) collection and the [`perform()` API](../api/class-nvda#nvda-perform):

```ts
await nvda.perform(nvda.keyboardCommands.moveToNextHeading);

expect(await nvda.lastSpokenPhrase()).toContain("Products");
```

Guidepup provides commands for common NVDA navigation patterns, including navigating by:

- Headings
- Links
- Landmarks
- Form controls
- Tables
- Other web content

That same command and assert shape is called out in [testing navigation](./testing-navigation): a navigation command moves the cursor, and the resulting phrase is read back from the screen reader.

When using [`@guidepup/playwright`](https://www.npmjs.com/package/@guidepup/playwright) an additional command for navigating to the web content from the desktop is provided:

```ts
await nvda.navigateToWebContent();
```

## Interacting with controls

NVDA can be used to interact with the same controls a user would encounter during a workflow:

```ts
await nvda.perform(nvda.keyboardCommands.moveToNextLink);

expect(await nvda.lastSpokenPhrase()).toContain("Add to basket");

await nvda.act();
```

You can combine these commands with Playwright's browser APIs to create complete end-to-end tests.

See [testing interactions](./testing-interactions) for examples covering forms, links and other interactive content.

## Testing spoken output

Guidepup can capture what NVDA speaks during a test:

```ts
await nvda.act();

expect(await nvda.lastSpokenPhrase()).toContain("Added to basket");
```

You can also inspect the spoken phrase history when you need to verify a sequence of announcements.

The [`lastSpokenPhrase()` API](../api/class-nvda#nvda-last-spoken-phrase) and the [`spokenPhraseLog()` API](../api/class-nvda#nvda-spoken-phrase-log) are the main observation points for test assertions. See [testing announcements](./testing-announcements) for more examples.

## NVDA specific behaviour

Guidepup exposes a common screen reader API where possible, while also providing access to NVDA specific commands and settings.

This means tests can share the same general structure across NVDA and VoiceOver without hiding the differences between the two screen readers.

Where there are NVDA specific commands the [`perform` API](../api/class-nvda#nvda-perform) provides an escape hatch:

```ts
await nvda.perform(nvda.keyboardCommands.readPreviousSentence);
```

This API is the public extension point for NVDA-only reading commands that belong to the active screen reader vocabulary rather than the shared screen reader abstraction.

See [testing VoiceOver](./testing-voiceover) for the equivalent VoiceOver workflow.
