---
title: Testing announcements
description: Capture and assert spoken output from Guidepup's Virtual Screen Reader.
---

# Testing announcements

The Virtual Screen Reader can capture what would be announced to a user as it moves through a DOM fixture.

The main observation APIs are:

- [`lastSpokenPhrase()`](../api/class-virtual#virtual-last-spoken-phrase)
- [`spokenPhraseLog()`](../api/class-virtual#virtual-spoken-phrase-log)
- [`clearSpokenPhraseLog()`](../api/class-virtual#virtual-clear-spoken-phrase-log)
- [`itemText()`](../api/class-virtual#virtual-item-text)
- [`itemTextLog()`](../api/class-virtual#virtual-item-text-log)
- [`clearItemTextLog()`](../api/class-virtual#virtual-clear-item-text-log)

These APIs give you a way to assert on a single spoken phrase or on a sequence of results produced during a test.

## Capture the latest spoken phrase

After a navigation or interaction step, inspect the most recent announcement:

```ts
await virtual.next();

const phrase = await virtual.lastSpokenPhrase();
expect(phrase).toContain("Search");
```

## Inspect the spoken phrase log

When you want the complete spoken output for a test run, read the phrase history:

```ts
const log = await virtual.spokenPhraseLog();
expect(log).toEqual(expect.arrayContaining([expect.any(String)]));
```

This is useful when navigating through several elements and validating a full announcement sequence.

## Clear transcript state

Use the clear APIs when a test needs to reset observation state before a new sequence:

```ts
await virtual.clearSpokenPhraseLog();
await virtual.clearItemTextLog();
```

## Assertion advice

The Virtual Screen Reader reports spoken phrases from the DOM structure it is aware of. The most useful assertions are usually small and stable, such as a heading phrase, an input label, or a role phrase that should remain visible across a DOM fixture.
