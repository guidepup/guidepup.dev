---
title: "windowsQuit"
---

**Contents:**

- [`windowsQuit(applicationName)`](./class-windows-quit#windows-quit)

## windowsQuit(applicationName) {#windows-quit}

Quits a Windows application if running.

```ts
import { windowsActivate, windowsQuit } from "@guidepup/guidepup";

(async () => {
  // Open Microsoft Edge.
  await windowsActivate("msedge.exe", "Edge");

  // ... perform some commands.

  // Quits Microsoft Edge.
  await windowsQuit("msedge.exe")
})();
```

**Parameters:**

- `applicationPath` &#60;[string]&#62; Application executable path identifier.

**Returns:** &#60;[Promise]<[void]>&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"