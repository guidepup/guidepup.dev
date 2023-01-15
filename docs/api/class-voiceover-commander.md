---
title: "VoiceOverCommander"
---

Class for [VoiceOver Commander](https://support.apple.com/en-gb/guide/voiceover/cpvoukbcmdr/mac) operations.

```ts
import { voiceOver } from "@guidepup/guidepup";

const voiceOverCommander = voiceOver.commander;

// ... perform Commander commands.
```

**Contents:**

- [voiceOverCommander.perform(command[, options])](./class-voiceover-commander#voiceover-commander-perform)
- [voiceOverCommander.commands](./class-voiceover-commander#voiceover-commander-commands)

## voiceOverCommander.perform(command[, options]) {#voiceover-commander-perform}

Perform a VoiceOver commander command.

This command is specific to the VoiceOver screen reader.

```ts
import { voiceOver, VoiceOverCommanderCommands } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move down.
  await voiceOver.commander.perform(VoiceOverCommanderCommands.MOVE_DOWN);

  // Commands also available on the VoiceOver Commander object.
  await voiceOver.commander.perform(voiceOver.commander.commands.MOVE_DOWN);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver Commander class:
>
> ```ts
> await voiceOver.perform(voiceOver.commander.commands.MOVE_DOWN);
> ```
> 
> See [VoiceOver] for further details.

**Parameters:**

- `command` &#60;[VoiceOverCommanderCommands]&#62; The lowercase English command for the VoiceOver commander to perform.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCommander.commands {#voiceover-commander-commands}

Getter for all VoiceOver commander commands.

Use with the VoiceOver `perform` command to invoke a Commander action:

```ts
import { voiceOver, VoiceOverCommanderCommands } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move down.
  await voiceOver.perform(voiceOver.commander.commands.MOVE_DOWN);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Returns:** &#60;[VoiceOverCommanderCommands]&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[voiceover]: ./class-voiceover "VoiceOver"
[VoiceOverCommanderCommands]: ./class-voiceover-commander-commands "VoiceOverCommanderCommands"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
