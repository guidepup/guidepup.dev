---
title: "OrcaKeyCodeCommand"
description: Reference the Orca key code command type for Guidepup automation.
---

**Extends:** [object]

An object representing a keyboard command for the Orca screen reader. Get
available commands from [`orca.keyboardCommands`](./class-orca#orca-keyboard-commands)
or the [orcaKeyCodeCommands] collection.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();

  const command = orca.keyboardCommands.MoveToNextSibling;
  console.log(command.command);
  console.log(command.description);
  console.log(command.representation);
  console.log(command.service);

  await orca.perform(command);
  await orca.stop();
})();
```

**Contents:**

- [orcaKeyCodeCommand.command](./class-orca-key-code-command#orca-key-code-command-command)
- [orcaKeyCodeCommand.description](./class-orca-key-code-command#orca-key-code-command-description)
- [orcaKeyCodeCommand.representation](./class-orca-key-code-command#orca-key-code-command-representation)
- [orcaKeyCodeCommand.service](./class-orca-key-code-command#orca-key-code-command-service)

## orcaKeyCodeCommand.command {#orca-key-code-command-command}

The name of the Orca command.

**Type:** [string]

## orcaKeyCodeCommand.description {#orca-key-code-command-description}

A description of the Orca command.

**Type:** [string]

## orcaKeyCodeCommand.representation {#orca-key-code-command-representation}

The keyboard shortcut used to invoke the command in Orca.

**Type:** [string]

## orcaKeyCodeCommand.service {#orca-key-code-command-service}

The Orca service that provides the command.

**Type:** [string]

[orcakeycodecommands]: ./class-orca-key-code-commands "OrcaKeyCodeCommands"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
