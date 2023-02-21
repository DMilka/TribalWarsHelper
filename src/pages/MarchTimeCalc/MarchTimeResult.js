import React from 'react';
import Table from '../../components/table/Table';
import TableHead from '../../components/table/TableHead';
import TableRow from '../../components/table/TableRow';
import TableCell from '../../components/table/TableCell';
import TableBody from '../../components/table/TableBody';
import TroopsHelper from '../../helpers/TroopsHelper';

const MarchTimeResult = (props) => {


  if(!props.result) {
    return null;
  }

  return (
      <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Nazwa jednostki</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.result && props.result.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{TroopsHelper.TROOPS_TRANSLATIONS[row.name]}</TableCell>
                  <TableCell align="left">{TroopsHelper.getStatusTranslation(row.status)}</TableCell>
                </TableRow>
            ))}
          </TableBody>
      </Table>
  );
};

export default MarchTimeResult;
