---
title: "macOSQuit"
---

**Contents:**

- [`macOSQuit(applicationName[, options])`](./class-macos-quit#macos-quit)

## macOSQuit(applicationName[, options]) {#macos-quit}

Quits a MacOS application if running.

```ts
import { macOSActivate, macOSQuit, MacOSApplications } from "@guidepup/guidepup";

(async () => {
  // Open Safari.
  await macOSActivate(MacOSApplications.Safari);

  // ... perform some commands.

  // Quits Safari.
  await macOSQuit(MacOSApplications.Safari);
})();
```

**Parameters:**

- `applicationName` &#60;[string]&#62; Application identifier. See [MacOSApplications].
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[macosapplications]: ./class-macos-applications "MacOSApplications"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
