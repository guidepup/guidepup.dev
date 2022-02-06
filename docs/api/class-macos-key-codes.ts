import { MacOSKeyCodes } from "@guidepup/guidepup";
import { writeFileSync } from "fs";

// TODO: generate header of file

// @ts-expect-error
const codes = Object.keys(MacOSKeyCodes)
  .filter((k) => `${parseInt(k)}` !== k)
  .sort()
  .map((k) => `- \`${k}\`\n`)
  .join("");

writeFileSync("./out.md", codes);
