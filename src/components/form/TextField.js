import React from 'react';
import { TextField as TextFieldMUI } from '@mui/material';
const TextField = (props) => {
  return (
      <TextFieldMUI {...props} label={props.label} defaultValue={props.value} variant="outlined" onChange={props.callback} />
  );
};

export default TextField;
