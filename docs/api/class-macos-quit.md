---
title: "macOSQuit"
---

**Contents:**

- [`macOSQuit(applicationName[, options])`](./class-macos-quit#macos-quit)

## macOSQuit(applicationName[, options]) {#macos-quit}

Quits a MacOS application if running.

```ts
import {
  macOSActivate,
  macOSQuit,
  MacOSApplications,
} from "@guidepup/guidepup";

(async () => {
  // Open Safari.
  await macOSActivate(MacOSApplications.Safari);

  // ... perform some commands.

  // Quits Safari.
  await macOSQuit(MacOSApplications.Safari);
})();
```

**Parameters:**

- `applicationName` [string] Application identifier. See [MacOSApplications].
- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[macosapplications]: ./class-macos-applications "MacOSApplications"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
