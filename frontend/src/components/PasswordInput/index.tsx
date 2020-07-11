import React, { InputHTMLAttributes } from 'react';

import Input from '../Input';
// import { Container } from './styles';

const PasswordInput: React.FC<InputHTMLAttributes<any>> = (props) => {
  return (
    <div>
      <Input {...props} />
      <button>Sdsdsa</button>
    </div>
  )
}

export default PasswordInput;