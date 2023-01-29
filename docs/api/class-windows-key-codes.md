---
title: "WindowsKeyCodes"
---

Key codes for Windows.

For example, use when performing a NVDA command:

```ts
import { nvda, WindowsKeyCodes } from "@guidepup/guidepup";

const moveToNextKeyCodeCommand = {
  keyCode: WindowsKeyCodes.ArrowDown,
};

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.perform(moveToNextKeyCodeCommand);

  // Stop NVDA.
  await nvda.stop();
})();
```

List of all key code accessors:

- `Alt`
- `AltLeft`
- `AltRight`
- `Application`
- `ArrowDown`
- `ArrowLeft`
- `ArrowRight`
- `ArrowUp`
- `Backslash`
- `Backspace`
- `Backtick`
- `Break`
- `CapsLock`
- `Caret`
- `Clear`
- `Comma`
- `Control`
- `ControlLeft`
- `Dash`
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
- `Down`
- `End`
- `Enter`
- `Equals`
- `Escape`
- `Exclamation`
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
- `ForwardDelete`
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
- `Minus`
- `NumPad0`
- `NumPad1`
- `NumPad2`
- `NumPad3`
- `NumPad4`
- `NumPad5`
- `NumPad6`
- `NumPad7`
- `NumPad8`
- `NumPad9`
- `NumPadDelete`
- `NumPadDivide`
- `NumPadEnter`
- `NumPadMinus`
- `NumPadMultiply`
- `NumPadPlus`
- `Numlock`
- `Nvda`
- `PageDown`
- `PageUp`
- `Pause`
- `Period`
- `Plus`
- `PrintScreen`
- `Right`
- `RightSquareBracket`
- `ScrollLock`
- `Shift`
- `ShiftLeft`
- `SingleQuote`
- `Space`
- `Spacebar`
- `Tab`
- `Tilde`
- `Up`
- `Windows`
- `" "` (don't include the quotes)
- `'`
- `,`
- `-`
- `.`
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
