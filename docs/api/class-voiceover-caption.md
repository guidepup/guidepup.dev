---
title: "VoiceOverCaption"
---

**Implements:** [ScreenReaderCaption]

Class for VoiceOver caption operations.

```ts
import { voiceOver } from "@guidepup/guidepup";

const voiceOverCaption = voiceOver.caption;

// ... perform caption commands.
```

**Contents:**

- [voiceOverCaption.copyLastSpokenPhrase([options])](./class-voiceover-caption#voiceover-caption-copy-last-spoken-phrase)
- [voiceOverCaption.itemText([options])](./class-voiceover-caption#voiceover-caption-item-text)
- [voiceOverCaption.itemTextLog()](./class-voiceover-caption#voiceover-caption-item-text-log)
- [voiceOverCaption.lastSpokenPhrase([options])](./class-voiceover-caption#voiceover-caption-last-spoken-phrase)
- [voiceOverCaption.saveLastSpokenPhrase([options])](./class-voiceover-caption#voiceover-caption-save-last-spoken-phrase)
- [voiceOverCaption.spokenPhraseLog()](./class-voiceover-caption#voiceover-caption-spoken-phrase-log)

## voiceOverCaption.copyLastSpokenPhrase([options]) {#voiceover-caption-copy-last-spoken-phrase}

Copy the last spoken phrase to the Clipboard (also called the "Pasteboard").

This command is specific to the VoiceOver screen-reader.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Copy the phrase spoken by VoiceOver from moving to the next item above to
  // the Clipboard.
  await voiceOver.caption.copyLastSpokenPhrase();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCaption.itemText([options]) {#voiceover-caption-item-text}

Get the text of the item in the VoiceOver cursor.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Get the text (if any) for the item currently in focus by the VoiceOver
  // cursor.
  const itemText = await voiceOver.caption.itemText();
  console.log(itemText);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver caption class:
>
> ```ts
> const itemText = await voiceOver.itemText();
> ```
>
> See [VoiceOver] for further details.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The item's text.

## voiceOverCaption.itemTextLog() {#voiceover-caption-item-text-log}

Get the log of all visited item text for this VoiceOver instance.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await voiceOver.next();
  }

  // Get the text (if any) for all the items visited by the VoiceOver cursor.
  const itemTextLog = voiceOver.caption.itemTextLog();
  console.log(itemTextLog);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver caption class:
>
> ```ts
> const itemTextLog = voiceOver.itemTextLog();
> ```
>
> See [VoiceOver] for further details.

**Returns:** &#60;[Array]<[string]>&#62; The item text log.

## voiceOverCaption.lastSpokenPhrase([options]) {#voiceover-caption-last-spoken-phrase}

Get the last spoken phrase.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Get the phrase spoken by VoiceOver from moving to the next item above.
  const lastSpokenPhrase = await voiceOver.caption.lastSpokenPhrase();
  console.log(lastSpokenPhrase);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver caption class:
>
> ```ts
> const lastSpokenPhrase = await voiceOver.lastSpokenPhrase();
> ```
>
> See [VoiceOver] for further details.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The last spoken phrase.

## voiceOverCaption.saveLastSpokenPhrase([options]) {#voiceover-caption-save-last-spoken-phrase}

Save the last spoken phrase and the crash log to a file on the desktop for troubleshooting.

This command is specific to the VoiceOver screen-reader.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Save the phrase spoken by VoiceOver from moving to the next item above to
  // a file on the desktop.
  await voiceOver.caption.saveLastSpokenPhrase();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCaption.spokenPhraseLog() {#voiceover-caption-spoken-phrase-log}

Get the log of all spoken phrases for this VoiceOver instance.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await voiceOver.next();
  }

  // Get the phrase spoken by VoiceOver from moving through the items above.
  const spokenPhraseLog = voiceOver.caption.spokenPhraseLog();
  console.log(spokenPhraseLog);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver caption class:
>
> ```ts
> const spokenPhraseLog = voiceOver.spokenPhraseLog();
> ```
>
> See [VoiceOver] for further details.

**Returns:** &#60;[Array]<[string]>&#62; The spoken phrase log.

[commandoptions]: ./class-command-options "CommandOptions"
[screenreadercaption]: ./class-screenreader-caption "ScreenReaderCaption"
[voiceover]: ./class-voiceover "VoiceOver"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
