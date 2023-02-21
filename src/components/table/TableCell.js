import React from 'react';
import { TableCell as TableCellMUI} from '@mui/material';
const TableCell = (props) => {
  return (
      <TableCellMUI>
        {props.children}
      </TableCellMUI>
  );
};

export default TableCell;
