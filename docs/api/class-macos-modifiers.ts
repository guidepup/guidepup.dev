import { MacOSModifiers } from "@guidepup/guidepup";
import { writeFileSync } from "fs";

// TODO: generate header of file

const codes = Object.keys(MacOSModifiers)
  .filter((k) => `${parseInt(k)}` !== k)
  .sort()
  .map((k) => `- <kbd>${k}</kbd>\n`)
  .join("");

writeFileSync("./out.md", codes);
