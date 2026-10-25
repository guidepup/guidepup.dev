---
title: "NavigateOptions"
description: Reference navigate options for navigate until operations.
---

**Extends:** [CommandOptions]

Options for the screen reader navigate until operations.

For example:

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Navigate to the next location until partial matching "Home", navigating at
  // most 20 times before throwing an error for a failed search.
  await voiceOver.navigateNextUntil(/Home/, { maxNavigationAttempts: 20 });

  // Navigate to the next heading until partial matching "Links", navigating at
  // most 10 times, as the default, before throwing an error for a failed
  // search.
  await voiceOver.navigateNextHeadingUntil(/Links/);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

See also:

- [CommandOptions]

**Contents:**

- [navigateOptions.maxNavigationAttempts](./class-navigate-options#navigate-options-max-navigation-attempts)

## navigateOptions.maxNavigationAttempts {#navigate-options-max-navigation-attempts}

**Optional:** Maximum number of navigation commands before the search fails. Defaults to `10` if not provided.

**Type:** [number]

[commandoptions]: ./class-command-options "CommandOptions"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number "number"
