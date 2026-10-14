---
title: "macOSActivateId"
description: Activate macOS apps and automation targets by ID with the Guidepup API.
---

**Contents:**

- [`macOSActivateId(applicationId[, options])`](./class-macos-activate-id#macos-activate-id)

## macOSActivateId(applicationId[, options]) {#macos-activate-id}

Opens a macOS application from it's ID, if not already open, and focuses the application.

```ts
import { macOSActivateId } from "@guidepup/guidepup";

(async () => {
  // Opens Chrome if not already open, and focuses the window.
  await macOSActivateId("com.google.Chrome");
})();
```

**Parameters:**

- `applicationId` [string] Application identifier.
- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
