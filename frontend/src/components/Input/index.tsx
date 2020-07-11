import React, { InputHTMLAttributes } from 'react';

// import { Container } from './styles';

const Input: React.FC<InputHTMLAttributes<any>> = (props) => {
  return (
    <input {...props} />
  );
}

export default Input;