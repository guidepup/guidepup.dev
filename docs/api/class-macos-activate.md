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

- `applicationName` &#60;[string]&#62; Application identifier. See [MacOSApplications].
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[macosapplications]: ./class-macos-applications "MacOSApplications"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"