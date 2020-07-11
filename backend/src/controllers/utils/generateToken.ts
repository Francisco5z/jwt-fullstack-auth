import jwt from 'jsonwebtoken'

import authConfig from '../../config/auth';

export default (params: { id: string }) => {
  return jwt.sign(params, authConfig.secret);
};