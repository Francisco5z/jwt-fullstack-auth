import api from './api';

interface Input {
  email: string;
  password: string;
}


export async function signIn(input: Input) { 
  try {

    const response = await api.post('/session', input);
    
    return response;
  } catch (e) {
    return e.response.status;
  }
}