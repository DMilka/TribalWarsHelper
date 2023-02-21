import React from 'react';
import { Button as ButtonMUI } from '@mui/material';

const Button = (props) => {
  return (
      <ButtonMUI variant="contained" onClick={props.callback} >{props.buttonText ?? 'Przycisk'}</ButtonMUI>
  );
};

export default Button;
