import { log } from "console-log-colors";
import stringify from "./stringify/stringify.service";

/* obj : Object which is passed as an argument to stringify and stringifyBackward methods */
const obj = {
  first: 4,
  second: 3,
  third: 2,
  fourth: 1,
};

log.white("******************************************************");

/* Stringify Driver Code */
log.blueBright("Stringify \n");
log.yellow("Object to transaform :");
log.yellow(JSON.stringify(obj), "\n");

log.greenBright(`Output: ${stringify(obj)}`);
log.white("******************************************************");
