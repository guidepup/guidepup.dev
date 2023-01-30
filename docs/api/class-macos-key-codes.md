---
title: "MacOSKeyCodes"
---

Key codes for MacOS.

For example, use when performing a VoiceOver command:

```ts
import { voiceOver, MacOSKeyCodes, MacOSModifiers } from "@guidepup/guidepup";

const moveToNextKeyCodeCommand = {
  keyCode: MacOSKeyCodes.ArrowRight,
  modifiers: [MacOSModifiers.Control, MacOSModifiers.Option],
};

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.perform(moveToNextKeyCodeCommand);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

List of all key code accessors:

- `Add`
- `Alt`
- `AltLeft`
- `AltRight`
- `ArrowDown`
- `ArrowLeft`
- `ArrowRight`
- `ArrowUp`
- `Backslash`
- `Backspace`
- `Backtick`
- `CapsLock`
- `Clear`
- `Comma`
- `Command`
- `CommandLeft`
- `CommandRight`
- `Control`
- `ControlLeft`
- `ControlRight`
- `Dash`
- `Decimal`
- `Delete`
- `Digit0`
- `Digit1`
- `Digit2`
- `Digit3`
- `Digit4`
- `Digit5`
- `Digit6`
- `Digit7`
- `Digit8`
- `Digit9`
- `Divide`
- `Down`
- `End`
- `Enter`
- `Equals`
- `Escape`
- `F1`
- `F2`
- `F3`
- `F4`
- `F5`
- `F6`
- `F7`
- `F8`
- `F9`
- `F10`
- `F11`
- `F12`
- `F13`
- `F14`
- `F15`
- `F16`
- `F17`
- `F18`
- `F19`
- `F20`
- `Fn`
- `ForwardDelete`
- `ForwardSlash`
- `FullStop`
- `Help`
- `Home`
- `Insert`
- `KeyA`
- `KeyB`
- `KeyC`
- `KeyD`
- `KeyE`
- `KeyF`
- `KeyG`
- `KeyH`
- `KeyI`
- `KeyJ`
- `KeyK`
- `KeyL`
- `KeyM`
- `KeyN`
- `KeyO`
- `KeyP`
- `KeyQ`
- `KeyR`
- `KeyS`
- `KeyT`
- `KeyU`
- `KeyV`
- `KeyW`
- `KeyX`
- `KeyY`
- `KeyZ`
- `Left`
- `LeftSquareBracket`
- `LineFeed`
- `Meta`
- `Minus`
- `Multiply`
- `Mute`
- `Option`
- `OptionLeft`
- `OptionRight`
- `PageDown`
- `PageUp`
- `Period`
- `Return`
- `Right`
- `RightSquareBracket`
- `SectionSign`
- `SemiColon`
- `Shift`
- `ShiftLeft`
- `ShiftRight`
- `SingleQuote`
- `Space`
- `Spacebar`
- `Subtract`
- `Tab`
- `Up`
- `VolumeDown`
- `VolumeUp`
- `" "` (don't include the quotes)
- `'`
- `,`
- `-`
- `.`
- `/`
- `;`
- `=`
- `[`
- `\`
- `]`
- `` ` ``
- `A`
- `B`
- `C`
- `D`
- `E`
- `F`
- `G`
- `H`
- `I`
- `J`
- `K`
- `L`
- `M`
- `N`
- `O`
- `P`
- `Q`
- `R`
- `S`
- `T`
- `U`
- `V`
- `W`
- `X`
- `Y`
- `Z`
- `a`
- `b`
- `c`
- `d`
- `e`
- `f`
- `g`
- `h`
- `i`
- `j`
- `k`
- `l`
- `m`
- `n`
- `o`
- `p`
- `q`
- `r`
- `s`
- `t`
- `u`
- `v`
- `w`
- `x`
- `y`
- `z`