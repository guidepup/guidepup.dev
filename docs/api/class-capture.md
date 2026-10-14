---
title: "Capture"
description: Reference the result returned when capturing screen reader output.
---

**Extends:** [object]

The result returned by a `capture` operation. It
contains the result of the action and the screen reader output captured while
the action ran.

**Contents:**

- [capture.itemText](./class-capture#capture-item-text)
- [capture.result](./class-capture#capture-result)
- [capture.spokenPhrase](./class-capture#capture-spoken-phrase)

## capture.itemText {#capture-item-text}

Text for the screen reader item associated with the captured action.

**Type:** [string]

## capture.result {#capture-result}

The value returned by the action passed to `capture`.

**Type:** [unknown]

## capture.spokenPhrase {#capture-spoken-phrase}

Spoken output associated with the captured action.

**Type:** [string]

[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[unknown]: https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown "unknown"
