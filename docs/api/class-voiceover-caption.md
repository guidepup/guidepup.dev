---
title: "VoiceOverCaption"
---

**Implements:** [ScreenReaderCaption]

- [voiceOverCaption.copyLastSpokenPhrase([options])](./class-voiceover-caption#voiceover-caption-copy-last-spoken-phrase)
- [voiceOverCaption.itemText([options])](./class-voiceover-caption#voiceover-caption-item-text)
- [voiceOverCaption.itemTextLog()](./class-voiceover-caption#voiceover-caption-item-text-log)
- [voiceOverCaption.lastSpokenPhrase([options])](./class-voiceover-caption#voiceover-caption-last-spoken-phrase)
- [voiceOverCaption.saveLastSpokenPhrase([options])](./class-voiceover-caption#voiceover-caption-save-last-spoken-phrase)
- [voiceOverCaption.spokenPhraseLog()](./class-voiceover-caption#voiceover-caption-spoken-phrase-log)

## voiceOverCaption.copyLastSpokenPhrase([options]) {#voiceover-caption-copy-last-spoken-phrase}

Copy the last spoken phrase to the Clipboard (also called the "Pasteboard").

Command specific to the VoiceOver ScreenReader.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCaption.itemText([options]) {#voiceover-caption-item-text}

Get the text of the item in the VoiceOver cursor.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The item's text.

## voiceOverCaption.itemTextLog() {#voiceover-caption-item-text-log}

Get the log of all visited item text for this VoiceOver instance.

**Returns:** &#60;[Array]<[string]>&#62; The item text log.

## voiceOverCaption.lastSpokenPhrase([options]) {#voiceover-caption-last-spoken-phrase}

Get the last spoken phrase.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The last spoken phrase.

## voiceOverCaption.saveLastSpokenPhrase([options]) {#voiceover-caption-save-last-spoken-phrase}

Save the last spoken phrase and the crash log to a file on the desktop for troubleshooting.

Command specific to the VoiceOver ScreenReader.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCaption.spokenPhraseLog() {#voiceover-caption-spoken-phrase-log}

Get the log of all spoken phrases for this VoiceOver instance.

**Returns:** &#60;[Array]<[string]>&#62; The spoken phrase log.

[commandoptions]: ./class-command-options "CommandOptions"
[screenreadercaption]: ./class-screenreader-caption "ScreenReaderCaption"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
