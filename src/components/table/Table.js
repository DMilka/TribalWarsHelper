import React from 'react';
import { TableContainer,Table as TableMUI } from '@mui/material';
import Paper from '@mui/material/Paper';
const Table = (props) => {
  return (
      <TableContainer component={Paper}>
        <TableMUI sx={{ minWidth: 650 }} aria-label="table">
          {props.children}
        </TableMUI>
      </TableContainer>
  );
};

export default Table;
