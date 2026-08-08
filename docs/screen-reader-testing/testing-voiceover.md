---
title: Testing VoiceOver
description: Automate Apple VoiceOver with Guidepup for end-to-end accessibility testing on macOS.
---

# Testing VoiceOver

Guidepup provides programmatic control of [VoiceOver](https://support.apple.com/en-gb/guide/voiceover-guide/welcome/web), Apple's built-in screen reader for macOS.

You can use Guidepup to start and stop VoiceOver, navigate web content, interact with controls, and capture what VoiceOver communicates to the user.

## Requirements

VoiceOver automation requires:

- macOS
- VoiceOver
- A supported browser, such as Safari
- Node.js
- [`@guidepup/guidepup`](https://www.npmjs.com/package/@guidepup/guidepup)

For the current supported versions and configurations, see the [support matrix](../reference/support-matrix).

## Machine setup

Configure your Mac for VoiceOver automation:

```bash
npx @guidepup/setup setup
```

Install the VoiceOver assets required by your installed version of Guidepup:

```bash
npx @guidepup/setup install
```

See the [machine setup guide](../guides/machine-setup) for more information about the configuration performed by `@guidepup/setup`.

## Starting VoiceOver

The `voiceOver` instance provides direct control over VoiceOver:

```ts
import { voiceOver } from "@guidepup/guidepup";

await voiceOver.start();

try {
  // VoiceOver automation.
} finally {
  await voiceOver.stop();
}
```

Always stop VoiceOver when the test completes, including when the test fails.

When using [`@guidepup/playwright`](https://www.npmjs.com/package/@guidepup/playwright), the integration handles starting and stopping VoiceOver for each test.

## Navigating web content

VoiceOver navigation is usually expressed through its [`keyboardCommands`](../api/class-voiceover#voiceover-keyboard-commands) collection and the [`perform()` API](../api/class-voiceover#voiceover-perform):

```ts
await voiceOver.perform(voiceOver.keyboardCommands.findNextGraphic);

expect(await voiceOver.lastSpokenPhrase()).toContain("Products");
```

Guidepup provides commands for common VoiceOver navigation patterns, including navigating by:

- Headings
- Links
- Landmarks
- Form controls
- Tables
- Other web content

The example above is the same basic pattern you will see on the [testing navigation](./testing-navigation) page: discover the target with a screen reader command, then confirm what the reader reported.

When using [`@guidepup/playwright`](https://www.npmjs.com/package/@guidepup/playwright) an additional command for navigating to the web content from the desktop is provided:

```ts
await voiceOver.navigateToWebContent();
```

## Interacting with controls

VoiceOver can be used to interact with the same controls a user would encounter during a workflow:

```ts
await voiceOver.nextLink();

expect(await voiceOver.lastSpokenPhrase()).toContain("View all");

await voiceOver.act();
```

You can combine these commands with Playwright's browser APIs to create complete end-to-end tests.

See [testing interactions](./testing-interactions) for examples covering forms, links and other interactive content.

## Testing spoken output

Guidepup can capture what VoiceOver speaks during a test:

```ts
await voiceOver.act();

expect(await voiceOver.lastSpokenPhrase()).toContain("Added to basket");
```

You can also inspect the spoken phrase history when you need to verify a sequence of announcements.

The [`lastSpokenPhrase()` API](../api/class-voiceover#voiceover-last-spoken-phrase) and the [`spokenPhraseLog()` API](../api/class-voiceover#voiceover-spoken-phrase-log) are the two most common ways to assert against VoiceOver output. See [testing announcements](./testing-announcements) for more examples.

## VoiceOver specific behaviour

Guidepup exposes a common screen reader API where possible, while also providing access to VoiceOver specific commands and settings.

This means tests can share the same general structure across VoiceOver and NVDA without hiding the differences between the two screen readers.

Where there are VoiceOver specific commands the [`perform()` API](../api/class-voiceover#voiceover-perform) provides an escape hatch:

```ts
await voiceOver.perform(voiceOver.keyboardCommands.readPreviousSentence);
```

This API is the same extension point described in the VoiceOver reference docs and is the place to use VoiceOver only navigation commands that do not exist on the shared `screenReader` abstraction.

See [testing NVDA](./testing-nvda) for the equivalent NVDA workflow.
