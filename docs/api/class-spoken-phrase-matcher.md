---
title: "SpokenPhraseMatcher"
description: Reference spoken phrase matcher for navigate until operations.
---

Spoken phrase matcher for the screen reader navigate until operations.

For example:

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Navigate to the next location until fully matching "Links, heading level 2".
  await voiceOver.navigateNextHeadingUntil("Links, heading level 2");

  // Navigate to the next link until partial matching "Home".
  await voiceOver.navigateNextLinkUntil(/Home/);

  // Navigate to the next location until the callback function returns true.
  await voiceOver.navigateNextUntil((spokenPhrase) =>
    spokenPhrase.includes("Submit"),
  );

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Contents:**

- [spokenPhraseMatcher](./class-spoken-phrase-matcher#spoken-phrase-matcher)

## spokenPhraseMatcher {#spoken-phrase-matcher}

A spoken phrase matcher can be an exact matching string, a regular expression,
or a function that returns whether the spoken phrase matches.

**Type:** [string] | [RegExp] | (spokenPhrase: [string]) => [boolean]

[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
