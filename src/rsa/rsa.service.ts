import { Keys } from "./types/keys.type";

//Prime Numbers
const p = 3;
const q = 11;
const n = p * q;

//Euler's totient function
const eulerTotient = (p - 1) * (q - 1);

/**
 * - Input        : a (number), b(number)
 * - Output       : greatestCommonDivisor of (a,b) (number)
 * - Description  :This returns greatest common divisor of two numbers
 */
function greatestCommonDivisor(a: number, b: number): number {
  if (a == 0) return b;
  else return greatestCommonDivisor(b % a, a);
}

/**
 * - Input        : None
 * - Output       : {privateKey, publicKey} (Keys)
 */
export function generateKeys(): Keys {
  let encryptionExponent: number;
  let decryptionExponent = 0;
  let x: number;
  for (
    encryptionExponent = 2;
    encryptionExponent < eulerTotient;
    encryptionExponent++
  ) {
    if (greatestCommonDivisor(encryptionExponent, eulerTotient) == 1) {
      break;
    }
  }
  for (let i = 0; i <= 9; i++) {
    x = 1 + i * eulerTotient;
    if (x % encryptionExponent == 0) {
      decryptionExponent = x / encryptionExponent;
      break;
    }
  }
  const keys = {
    publicKey: encryptionExponent,
    privateKey: decryptionExponent,
  };
  return keys;
}

/**
 * - Input        : message (number), publicKey (number)
 * - Output       : cipherText (number)
 */
export function encrypt(message: number, publicKey: number): number {
  const cipherText = parseInt(Math.pow(message, publicKey).toFixed(0)) % n;
  return cipherText;
}

/**
 * - Input        : cipherText (number), privateKey (number)
 * - Output       : decipherText (number)
 */
export function decrypt(cipherText: number, privateKey: number): number {
  const decipherText = parseInt(Math.pow(cipherText, privateKey).toFixed(0)) % n;
  return decipherText;
}
