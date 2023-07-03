---
title: "CommandOptions"
---

**Extends:** [object]

Generic options for the majority of screen reader operations.

For example, use when starting VoiceOver:

```ts
import { voiceOver } from "@guidepup/guidepup";

const startCommandOptions = {
  capture: true,
  retries: 3,
  timeout: 10000,
};

(async () => {
  // Start VoiceOver with custom output capture, timeout, and retries.
  await voiceOver.start(commandOptions);
})();
```

> **Note**: this configuration is used for each sub-operation of a command, they do not necessarily apply to the command as a whole.

See also:

- [ClickOptions]
- [KeyboardOptions]

**Contents:**

- [commandOptions.capture](./class-command-options#command-options-capture)
- [commandOptions.retries](./class-command-options#command-options-retries)
- [commandOptions.timeout](./class-command-options#command-options-timeout)

## commandOptions.capture {#command-options-capture}

**Optional:** Whether to capture the screen reader output:

- `true` will enabled full capture.
- `"initial"` will capture the first "page" of output, but not any subsequent content.
- `false` will disable capture.

Default is `true`.

**Type:** &#60;[boolean] | "initial"&#62;

## commandOptions.retries {#command-options-retries}

**Optional:** Number of times to retry.

Default is `3`.

**Type:** &#60;[number]&#62;

## commandOptions.timeout {#command-options-timeout}

**Optional:** How long to wait until the command times out in ms.

Default is `10000`.

**Type:** &#60;[number]&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[keyboardoptions]: ./class-keyboard-options "KeyboardOptions"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number "number"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
