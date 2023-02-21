import React from 'react';
import { TableRow as TableRowMUI} from '@mui/material';
const TableRow = (props) => {
  return (
      <TableRowMUI>
        {props.children}
      </TableRowMUI>
  );
};

export default TableRow;
