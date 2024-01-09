import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../atoms/button";
import { Route, Routes, useNavigate } from "react-router-dom";
import DetailsPage from "../../container/pages/ DetailsPage";
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
  const navigate = useNavigate();

  const handleDetailClick = () => {
    // DETAIL ボタンがクリックされたときの処理
    navigate("/detailsPage");
  };

  const handleEditClick = () => {
    // EDIT ボタンがクリックされたときの処理
    // 適切な遷移先や処理を実装する
  };

  return (
    // <Routes>
    //   <Route path="/detailsPage" element={<DetailsPage />}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>商品名</TableCell>
            <TableCell align="right">価格</TableCell>
            <TableCell align="right">数量</TableCell>
            <TableCell align="right">詳細</TableCell>
            <TableCell align="right">編集</TableCell>
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
                  label="詳細"
                  onClick={handleDetailClick}
                  variant="contained"
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  label="編集"
                  onClick={handleEditClick}
                  variant="contained"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    //   </Route>
    // </Routes>
  );
};

export default BasicTable;
