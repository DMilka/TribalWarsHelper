import React from 'react';
import { Grid } from '@mui/material';

const GridItem = (props) => {
  return (
      <Grid item {...props}>
        {props.children}
      </Grid>
  );
};

export default GridItem;
