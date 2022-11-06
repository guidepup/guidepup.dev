---
title: "CommandOptions"
---

**Extends:** [object]

Generic options for the majority of screen-reader operations.

For example, use when starting VoiceOver:

```ts
import { voiceOver } from "@guidepup/guidepup";

const startCommandOptions = {
  timeout: 10000,
  retries: 3,
};

(async () => {
  // Start VoiceOver with custom timeout and retries.
  await voiceOver.start(commandOptions);
})();
```

> **Note**: this configuration is used for each sub-operation of a command, they do not necessarily apply to the whole command.

See also:

- [ClickOptions]
- [KeyboardOptions]

**Contents:**

- [commandOptions.retries](./class-command-options#command-options-retries)
- [commandOptions.timeout](./class-command-options#command-options-timeout)

## commandOptions.retries {#command-options-retries}

**Optional:** Number of times to retry.

**Type:** &#60;[number]&#62;

## commandOptions.timeout {#command-options-timeout}

**Optional:** How long to wait until the command times out in ms.

**Type:** &#60;[number]&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[keyboardoptions]: ./class-keyboard-options "KeyboardOptions"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "number"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
