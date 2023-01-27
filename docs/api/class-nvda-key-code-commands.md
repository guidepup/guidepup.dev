---
title: "NVDAKeyCodeCommands"
---

**Extends:** [object]

**Implements:** &#60;[Record]<[string], [WindowsKeyCodeCommand]>&#62;

[Key code commands for the NVDA screen reader](https://www.nvaccess.org/files/nvda/releases/2021.2/documentation/keyCommands.html) on Windows.

Use with the NVDA `perform` to invoke the key code command:

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.perform(nvda.keyboardCommands.moveToNext);

  // Stop NVDA.
  await nvda.stop();
})();
```

**Contents:**

- TBD

[windowskeycodecommand]: ./class-windows-key-code-command "WindowsKeyCodeCommand"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[record]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type "Record"
