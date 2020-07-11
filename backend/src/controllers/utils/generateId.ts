import crypto from 'crypto';

export default (length: number) => {
  return crypto.randomBytes(length).toString('hex');
};