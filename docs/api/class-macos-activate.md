---
title: "macOSActivate"
---

**Contents:**

- [`macOSActivate(applicationName[, options])`](./class-macos-activate#macos-activate)

## macOSActivate(applicationName[, options]) {#macos-activate}

Opens a MacOS application if not already open, and focuses the application.

```ts
import { macOSActivate, MacOSApplications } from "@guidepup/guidepup";

(async () => {
  // Opens Safari if not already open, and focuses the window.
  await macOSActivate(MacOSApplications.Safari);
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
