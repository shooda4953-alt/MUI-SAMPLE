import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../atoms/button";

interface RowData {
  name: string;
  price: number;
  numberOfPrice: number;
  carbs: number;
  protein: number;
}

interface BasicTableProps {
  data: RowData[];
}

const BasicTable: React.FC<BasicTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Number of pieces</TableCell>
            <TableCell align="right">Detail</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.numberOfPrice}</TableCell>
              <TableCell align="right">
                <Button
                  label="DETAIL"
                  onClick={() => {
                    /* クリック時の処理 */
                  }}
                  variant="contained"
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  label="EDIT"
                  onClick={() => {
                    /* クリック時の処理 */
                  }}
                  variant="contained"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
