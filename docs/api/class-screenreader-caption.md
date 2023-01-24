---
title: "ScreenReaderCaption"
---

Base interface for screen reader caption classes.

See also:

- [VoiceOverCaption]

**Contents:**

- [screenReaderCaption.itemText()](./class-screenreader-caption#screenreader-caption-item-text)
- [screenReaderCaption.itemTextLog()](./class-screenreader-caption#screenreader-caption-item-text-log)
- [screenReaderCaption.lastSpokenPhrase()](./class-screenreader-caption#screenreader-caption-last-spoken-phrase)
- [screenReaderCaption.spokenPhraseLog()](./class-screenreader-caption#screenreader-caption-spoken-phrase-log)

## screenReaderCaption.itemText() {#screenreader-caption-item-text}

Get the text of the item in the screen reader cursor.

**Returns:** &#60;[Promise]<[string]>&#62; The item's text.

## screenReaderCaption.itemTextLog() {#screenreader-caption-item-text-log}

Get the log of all visited item text for this screen reader instance.

**Returns:** &#60;[Promise]<[Array]<[string]>>&#62; The item text log.

## screenReaderCaption.lastSpokenPhrase() {#screenreader-caption-last-spoken-phrase}

Get the last spoken phrase.

**Returns:** &#60;[Promise]<[string]>&#62; The last spoken phrase.

## screenReaderCaption.spokenPhraseLog() {#screenreader-caption-spoken-phrase-log}

Get the log of all spoken phrases for this screen reader instance.

**Returns:** &#60;[Promise]<[Array]<[string]>>&#62; The spoken phrase log.

[commandoptions]: ./class-command-options "CommandOptions"
[voiceovercaption]: ./class-voiceover-caption "VoiceOverCaption"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
