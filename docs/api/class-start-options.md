---
title: "StartOptions"
description: Reference start options for launching a Guidepup screen reader session.
---

**Extends:** [CommandOptions]

Options for the screen reader start operation.

For example, use when starting VoiceOver:

```ts
import { voiceOver } from "@guidepup/guidepup";

const startCommandOptions = {
  capture: true,
  retries: 3,
  timeout: 10000,
  settings: {
    SCRCUserDefaultsCursorTrackingEnabled: false,
  },
};

(async () => {
  // Start VoiceOver with custom output capture, timeout, and retries.
  await voiceOver.start(startCommandOptions);
})();
```

See also:

- [CommandOptions]

**Contents:**

- [startOptions.settings](./class-start-options#start-options-settings)

## startOptions.settings {#start-options-settings}

**Optional:** Screen reader settings to apply on startup.

**Type:** [Record]&#60;[string], [unknown]&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[unknown]: https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown "unknown"
[record]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type "Record"
