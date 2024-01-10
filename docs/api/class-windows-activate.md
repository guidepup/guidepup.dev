---
title: "windowsActivate"
---

**Contents:**

- [`windowsActivate(applicationPath, applicationWindowTitle)`](./class-windows-activate#windows-activate)

## windowsActivate(applicationPath, applicationWindowTitle) {#windows-activate}

Opens a Windows application if not already open, and focuses the application.

```ts
import { windowsActivate } from "@guidepup/guidepup";

(async () => {
  // Opens Microsoft Edge if not already open, and focuses the window.
  await windowsActivate("msedge.exe", "Edge");
})();
```

**Parameters:**

- `applicationPath` [string] Application executable path identifier.
- `applicationWindowTitle` [string] Application window title identifier.

**Returns:** [Promise]&#60;[void]&#62;

[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
