import React from 'react';
import { TableHead as TableHeadMUI } from '@mui/material';

const TableHead = (props) => {
  return (
      <TableHeadMUI>
        {props.children}
      </TableHeadMUI>
  );
};

export default TableHead;
