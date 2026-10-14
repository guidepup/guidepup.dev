---
title: Testing Orca
description: Automate Orca with Guidepup for end-to-end accessibility testing on Linux.
---

# Testing Orca

Guidepup provides preview support for [Orca](https://orca.gnome.org/), the
open-source screen reader for Linux. The API is available through the preview
`unstable_orca` export.

You can use Guidepup to start and stop Orca, navigate web content, interact with
controls, and capture what Orca communicates to the user.

## Requirements

Orca automation requires:

- Linux with a supported kernel version
- Orca
- A supported browser, such as Firefox
- Node.js
- [`@guidepup/guidepup`](https://www.npmjs.com/package/@guidepup/guidepup)

For the current supported versions and configurations, see the
[support matrix](../reference/support-matrix).

## Machine setup

Configure your Linux machine for Orca automation:

```bash
npx @guidepup/setup setup
```

Install the Orca assets required by your installed version of Guidepup:

```bash
npx @guidepup/setup install
```

See the [machine setup guide](../guides/machine-setup) for more information
about the configuration performed by `@guidepup/setup`.

## Starting Orca

The `unstable_orca` instance provides direct control over Orca:

```ts
import { unstable_orca } from "@guidepup/guidepup";

await unstable_orca.start();

try {
  // Orca automation.
} finally {
  await unstable_orca.stop();
}
```

Always stop Orca when the test completes, including when the test fails.

When combining Orca with Playwright, start and stop `unstable_orca` directly in
your test.

## Navigating web content

Orca navigation is usually expressed through its
[`keyboardCommands`](../api/class-orca#unstable-orca-keyboard-commands)
collection and the [`perform()` API](../api/class-orca#unstable-orca-perform):

```ts
await unstable_orca.perform(unstable_orca.keyboardCommands.MoveToNextSibling);

expect(await unstable_orca.lastSpokenPhrase()).toContain("Products");
```

Guidepup also provides common navigation methods, including navigating by:

- Headings
- Links
- Landmarks
- Form controls
- Tables
- Other web content

The example above follows the same basic pattern described in
[testing navigation](./testing-navigation): move to content with a screen
reader command, then confirm what Orca reported.

See the [Orca key code command reference](../api/class-orca-key-code-commands)
for the available commands and keyboard representations.

When using [`@guidepup/playwright`](https://www.npmjs.com/package/@guidepup/playwright) an additional command for navigating to the web content from the desktop is provided:

```ts
await orca.navigateToWebContent();
```

## Interacting with controls

Orca can be used to interact with controls during a workflow:

```ts
await unstable_orca.nextLink();

expect(await unstable_orca.lastSpokenPhrase()).toContain("View all");

await unstable_orca.act();
```

You can combine these commands with Playwright's browser APIs to create
end-to-end tests.

See [testing interactions](./testing-interactions) for examples covering forms,
links, and other interactive content.

## Testing spoken output

Guidepup can capture what Orca speaks during a test:

```ts
await unstable_orca.act();

expect(await unstable_orca.lastSpokenPhrase()).toContain("Added to basket");
```

You can also inspect the spoken phrase history when you need to verify a
sequence of announcements.

The [`lastSpokenPhrase()` API](../api/class-orca#unstable-orca-last-spoken-phrase)
and the [`spokenPhraseLog()` API](../api/class-orca#unstable-orca-spoken-phrase-log)
are the main observation points for test assertions. See
[testing announcements](./testing-announcements) for more examples.

## Orca specific behaviour

Guidepup exposes a common screen reader API where possible, while also
providing access to Orca-specific commands and settings.

This means tests can share the same general structure across Orca, VoiceOver,
and NVDA without hiding the differences between screen readers.

Orca supports `interact()` and `stopInteracting()` for entering and leaving an
item's interaction mode. The [`perform()` API](../api/class-orca#unstable-orca-perform)
provides access to Orca-specific commands:

```ts
await unstable_orca.perform(unstable_orca.keyboardCommands.MoveToNextSibling);
```

Orca does not currently implement `press()` or `type()`. Use Playwright's
browser APIs for keyboard input or text entry.

See [testing NVDA](./testing-nvda) and [testing VoiceOver](./testing-voiceover) for the equivalent workflows.
