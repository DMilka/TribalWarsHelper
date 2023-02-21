import React from 'react';
import { Grid } from '@mui/material';

const GridContainer = (props) => {
  return (
      <Grid container {...props} spacing={props.spacing ?? 0}>
        {props.children}
      </Grid>
  );
};

export default GridContainer;
