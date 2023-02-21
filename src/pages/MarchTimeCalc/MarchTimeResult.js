import React from 'react';
import Table from '../../components/table/Table';
import TableHead from '../../components/table/TableHead';
import TableRow from '../../components/table/TableRow';
import TableCell from '../../components/table/TableCell';
import TableBody from '../../components/table/TableBody';

const MarchTimeResult = (props) => {


  if(!props.result) {
    return null;
  }

  return (
      <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.result && props.result.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
            ))}
          </TableBody>
      </Table>
  );
};

export default MarchTimeResult;
