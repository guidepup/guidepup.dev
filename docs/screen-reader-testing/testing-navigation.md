---
title: Testing navigation
description: Use Guidepup's navigation APIs to move through web content and verify spoken output.
---

# Testing navigation

Guidepup is designed around real cursor movement and spoken phrase verification. A navigation test usually moves the current screen reader selection to the next or previous item, optionally uses a semantic browser command such as a heading or link command, and then checks what that reader reported.

The common API surface is documented in the screen reader reference docs:

- [`next([options])`](../api/class-screenreader#screenreader-next)
- [`previous([options])`](../api/class-screenreader#screenreader-previous)
- [`perform(command[, options])`](../api/class-screenreader#screenreader-perform)
- [`lastSpokenPhrase()`](../api/class-screenreader#screenreader-last-spoken-phrase)

Those methods are available on the concrete implementations, including [`voiceOver`](../api/class-voiceover) and [`nvda`](../api/class-nvda). The platform screen reader wrapper, [`screenReader`](../api/class-screenreader), exposes the same navigation workflow when a test can run against the default environment reader.

## Move through the reading order

The simplest cursor movement flow is to advance the focus and immediately examine the last spoken phrase:

```ts
import { voiceOver } from "@guidepup/guidepup";

await voiceOver.start();

try {
  await voiceOver.next();

  expect(await voiceOver.lastSpokenPhrase()).toContain("Products");
} finally {
  await voiceOver.stop();
}
```

The matching API for moving backwards is [`previous([options])`](../api/class-screenreader#screenreader-previous):

```ts
await voiceOver.previous();
```

In practice, `next()` and `previous()` are the low-level building blocks for a screen reader style reading order traversal. They are the API equivalents of stepping through what the screen reader would present to a user.

## Targeted navigation with `perform`

For predictable page structure checks, `perform()` is used with a specific command object from the keyboard command catalog:

```ts
await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);
expect(await voiceOver.lastSpokenPhrase()).toContain("Pricing");
```

```ts
await nvda.perform(nvda.keyboardCommands.moveToNextHeading);
expect(await nvda.lastSpokenPhrase()).toContain("Pricing");
```

The command objects in the API docs are commands specific to the chosen screen reader. They describe navigation commands such as heading, link, landmark, form control, table, and similar semantic operations. That keeps the top-level API stable while still exposing each reader's command vocabulary.

Examples that fit the same pattern include:

```ts
await voiceOver.perform(voiceOver.keyboardCommands.findNextLink);
expect(await voiceOver.lastSpokenPhrase()).toContain("Add to basket");
```

```ts
await nvda.perform(nvda.keyboardCommands.moveToNextLink);
expect(await nvda.lastSpokenPhrase()).toContain("Add to basket");
```

## Assert on the spoken result

Navigation tests in Guidepup usually pair a cursor operation with a spoken phrase check:

```ts
await voiceOver.start();

try {
  await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);

  const headingOutput = await voiceOver.lastSpokenPhrase();
  expect(headingOutput).toContain("Products");
} finally {
  await voiceOver.stop();
}
```

The same pattern works for NVDA:

```ts
await nvda.start();

try {
  await nvda.perform(nvda.keyboardCommands.moveToNextHeading);

  const headingOutput = await nvda.lastSpokenPhrase();
  expect(headingOutput).toContain("Products");
} finally {
  await nvda.stop();
}
```

The exact spoken phrase can vary between readers and browser/OS configurations. In most cases it is more reliable to assert on a stable substring rather than a full literal match.

## Navigation checklist

A dependable Guidepup navigation test generally follows the same shape:

1. Start the screen reader.
2. Move the current cursor with `next()`, `previous()`, or an explicit `perform()` command.
3. Read the latest result from `lastSpokenPhrase()`.
4. Assert against the expected content.
5. Stop the reader in a `finally` block.

This pattern is the foundation for higher-level accessibility workflows, such as those described in [testing VoiceOver](./testing-voiceover), [testing NVDA](./testing-nvda), and [testing interactions](./testing-interactions).
