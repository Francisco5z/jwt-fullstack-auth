import crypto from 'crypto';

export default (length: number) => {
  const alfanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toLowerCase();

  const id = `${alfanum[Math.floor(Math.random() * 10)]}${crypto.randomBytes(length).toString('hex')}`
  
  return id
};