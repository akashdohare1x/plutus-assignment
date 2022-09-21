import { log } from "console-log-colors";
import { Either, Left, Right, caseOf } from "./monad/either.monad.service";
import { IdentityImplementation } from "./monad/identity.monad.service";
import { decrypt, encrypt, generateKeys } from "./rsa/rsa.service";
import { Keys } from "./rsa/types/keys.type";
import stringifyBackward from "./stringify-backward/stringify-backward.service";
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

/* Stringify Backward Driver Code */
log.blueBright("Stringify Backward  \n");
log.yellow("Object to transaform :");
log.yellow(JSON.stringify(obj), "\n");

log.greenBright(`Output: ${stringifyBackward(obj)}`);
log.white("******************************************************");

/* Either Monad */
log.blue("Either Monad \n");
const x: Either<string, Error> = new Left("Akash");
const y = new Right(new Error());

log.yellow("Passing an error \n");
caseOf(y, {
  left: (v) => log.green(`Output: ${v}`),
  right: (v) => log.green(`Output:  ${v}`),
});

log.yellow("\nPassing a string \n");
caseOf(x, {
  left: (v) => log.green(`Output: ${v}`),
  right: (v) => log.green(`Output:  ${v}`),
});
log.white("******************************************************");

/* Identity Monad */
log.blue("Identity Monad \n");
/*The example below computes addition using the Identity monad. */
const result = new IdentityImplementation(5).bind((value1: number) =>
  new IdentityImplementation(4).bind((value2: number) => value1 + value2)
);
log.green("\nOutput: ", result);
log.white("******************************************************");

/* RSA Algorithm Driver Code */
log.blueBright("RSA Algorithm \n");
const message = 13;
log.yellow("Original Message =", message, "\n");
const { privateKey, publicKey }: Keys = generateKeys();

const encryptedMessage: number = encrypt(message, publicKey);
log.green("Encrypted data =", encryptedMessage);

const decryptedMessage: number = decrypt(encryptedMessage, privateKey);
log.green("Decrypted data =", decryptedMessage);
log.white("******************************************************");
