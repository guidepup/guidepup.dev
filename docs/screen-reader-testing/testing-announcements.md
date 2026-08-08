---
title: Testing announcements
description: Capture and assert spoken output from Guidepup's real screen reader integration.
---

# Testing announcements

Screen reader testing is not only about moving through the page. It is also about observing what the screen reader says.

Guidepup exposes phrase capture APIs for that:

- [`lastSpokenPhrase()`](../api/class-screenreader#screenreader-last-spoken-phrase)
- [`spokenPhraseLog()`](../api/class-screenreader#screenreader-spoken-phrase-log)
- [`clearSpokenPhraseLog()`](../api/class-screenreader#screenreader-clear-spoken-phrase-log)
- [`clearItemTextLog()`](../api/class-screenreader#screenreader-clear-item-text-log)

Those APIs are available on the shared screen reader interface and on the concrete reader instances such as [`voiceOver`](../api/class-voiceover) and [`nvda`](../api/class-nvda).

## Capture the latest spoken phrase

After a navigation or interaction step, read the latest phrase from the reader:

```ts
import { voiceOver } from "@guidepup/guidepup";

await voiceOver.start();

try {
  await voiceOver.next();

  const phrase = await voiceOver.lastSpokenPhrase();
  expect(phrase).toContain("Products");
} finally {
  await voiceOver.stop();
}
```

The same shape works with NVDA:

```ts
await nvda.next();

const phrase = await nvda.lastSpokenPhrase();
expect(phrase).toContain("Products");
```

Use `lastSpokenPhrase()` when a test only needs the most recent announcement.

## Inspect a sequence of announcements

Use `spokenPhraseLog()` when you need to inspect a sequence of announcements instead of just the most recent one:

```ts
await voiceOver.start();

try {
  await voiceOver.next();
  await voiceOver.next();

  const log = await voiceOver.spokenPhraseLog();
  expect(log).toEqual(expect.arrayContaining([expect.any(String)]));
} finally {
  await voiceOver.stop();
}
```

This is useful for commands that produce a stream of output rather than one isolated phrase.

## Clear transcript state

Clear the spoken phrase history when you want to start a fresh observation window:

```ts
await voiceOver.clearSpokenPhraseLog();
```

```ts
await nvda.clearSpokenPhraseLog();
```

You can use the same idea with `clearItemTextLog()` when you want to reset collected item text state.

## Assertion advice

Announcements are often the least predictable part of a screen reader test. They vary across screen reader implementations, browsers, and page content.

A practical assertion is usually one of these:

- a full equality check when the phrase is intentionally stable
- a substring check when the phrase may vary

A typical announcement test reads like this:

```ts
await voiceOver.act();

const phrase = await voiceOver.lastSpokenPhrase();
expect(phrase).toContain("Added to basket");
```

This lets you verify dynamic announcements without hard-coding an overstrict phrase string.
