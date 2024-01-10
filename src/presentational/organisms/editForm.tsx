import React, { useState } from "react";
import TextField from "../atoms/textField";
import { Button, Stack } from "@mui/material";

const EditForm: React.FC = () => {
  const [productData, setProductData] = useState([
    { label: "商品名", value: "" },
    { label: "金額", value: "" },
    { label: "数量", value: "" },
  ]);

  const handleFieldChange = (index: number, value: string) => {
    setProductData((prevData) => {
      const newData = [...prevData];
      newData[index].value = value;
      return newData;
    });
  };

  return (
    <Stack spacing={2}>
      {productData.map((product, index) => (
        <TextField
          key={index}
          label={product.label}
          variant="outlined"
          onChange={(value) => handleFieldChange(index, value)}
        />
      ))}

      {/* 送信ボタン */}
      <Button variant="contained" color="primary">
        登録
      </Button>
    </Stack>
  );
};

export default EditForm;
