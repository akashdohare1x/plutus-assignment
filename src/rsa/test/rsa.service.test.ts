import { decrypt, encrypt, generateKeys } from "../rsa.service";
import { Keys } from "../types/keys.type";

describe("RSA Algorithm", () => {
  const message = 13;
  let privateKey: number;
  let publicKey: number;
  let encryptedMessage: number;

  test("generateKeys should generate private and public keys", async () => {
    const keys: Keys = generateKeys();
    privateKey = keys.privateKey;
    publicKey = keys.publicKey;
    expect(publicKey).toEqual(3);
    expect(privateKey).toEqual(7);
  });

  test("encrypt should encrypt the original message", async () => {
    encryptedMessage = encrypt(message, publicKey);
    expect(encryptedMessage).toEqual(19);
  });

  test("decrypt should decrypt the encrypted message", async () => {
    expect(decrypt(encryptedMessage, privateKey)).toEqual(message);
  });
});
