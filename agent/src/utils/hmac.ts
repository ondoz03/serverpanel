import crypto from 'crypto';
import { config } from '../config';

export function generateHmac(signable: string): string {
  return crypto.createHmac('sha256', config.agentToken).update(signable).digest('hex');
}

export function verifyPlatformSignature(signable: string, signature: string): boolean {
  if (!signature || !signable) {
    return false;
  }

  const expected = generateHmac(signable);

  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  } catch {
    return false;
  }
}
