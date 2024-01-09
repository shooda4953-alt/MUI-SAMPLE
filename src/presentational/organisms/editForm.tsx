import React from "react";
import TextField from "../atoms/textField";
import { Button, Stack } from "@mui/material";

const EditForm: React.FC = () => {
  return (
    <Stack spacing={2}>
      {/* 商品名 */}
      <TextField
        label="商品名"
        variant="outlined"
        onChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />

      {/* 金額 */}
      <TextField
        label="金額"
        variant="outlined"
        onChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />

      {/* 数量 */}
      <TextField
        label="数量"
        variant="outlined"
        onChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />

      {/* 送信ボタン */}
      <Button variant="contained" color="primary">
        登録
      </Button>
    </Stack>
  );
};

export default EditForm;
