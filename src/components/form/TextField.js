import React from 'react';
import { TextField as TextFieldMUI } from '@mui/material';
const TextField = (props) => {
  return (
      <TextFieldMUI
          {...props}
          label={props.label}
          defaultValue={props.value}
          variant="outlined"
          onChange={props.callback}
          fullWidth
          InputLabelProps={{style: {color: '#FFF'}}}
          InputProps={{style: {color: '#FFF'}}}
          sx={{fieldset: {borderColor: '#FFF'}}}
      />
  );
};

export default TextField;
