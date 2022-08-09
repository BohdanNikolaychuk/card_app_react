import React from 'react';
import { Button } from './Form';

const Success = ({ value, setValue }) => {
  return (
    <div>
      <h1>Confirm</h1>
      <p>Thank You!</p>
      <p>We added your card details</p>
      <Button onClick={() => setValue(!value)}>Continue</Button>
    </div>
  );
};

export default Success;
