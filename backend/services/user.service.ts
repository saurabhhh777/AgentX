import nacl from "tweetnacl";
import bs58 from "bs58";

export const verifySolanaSignature = async (publicKey: string, signature: string, nonce: string): Promise<boolean> => {
  const pubKeyBytes = bs58.decode(publicKey);
  const msgBytes = new TextEncoder().encode(nonce);
  const sigBytes = bs58.decode(signature);

  return nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes);
};
