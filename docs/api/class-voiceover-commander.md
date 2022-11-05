---
title: "VoiceOverCommander"
---

**Contents:**

- [voiceOverCommander.perform(command[, options])](./class-voiceover-commander#voiceover-commander-perform)
- [voiceOverCommander.commands](./class-voiceover-commander#voiceover-commander-commands)

## voiceOverCommander.perform(command[, options]) {#voiceover-commander-perform}

Perform a VoiceOver commander command.

**Parameters:**

- `command` &#60;[VoiceOverCommanderCommands]&#62; The lowercase english command for the VoiceOver commander to perform.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCommander.commands {#voiceover-commander-commands}

VoiceOver commander commands.

**Returns:** &#60;[VoiceOverCommanderCommands]&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[VoiceOverCommanderCommands]: ./class-voiceover-commander-commands "VoiceOverCommanderCommands"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
