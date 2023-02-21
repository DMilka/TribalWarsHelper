import React from 'react';
import { TableCell as TableCellMUI} from '@mui/material';
const TableCell = (props) => {
  return (
      <TableCellMUI style={{color: '#FFF'}}>
        {props.children}
      </TableCellMUI>
  );
};

export default TableCell;
