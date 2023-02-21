import React from 'react';
import { TableBody as TableBodyMUI} from '@mui/material';
const TableBody = (props) => {
  return (
      <TableBodyMUI>
        {props.children}
      </TableBodyMUI>
  );
};

export default TableBody;
