import { log } from "console-log-colors";
/**
 * The identity monad just wraps a value.
 * The Identity constructor will serve as the unit function.
 */
export class IdentityImplementation {
  value: number;
  constructor(value: number) {
    this.value = value;
  }

  bind(transform: (value: number) => void) {
    log.yellow("Current value passed: ", this.value);
    return transform(this.value);
  }

  getIdentity(): number {
    return this.value;
  }
}
