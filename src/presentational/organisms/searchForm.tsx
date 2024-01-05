import React, { useState } from "react";
import TextField from "../atoms/textField";
import Button from "../atoms/button";
import { Stack } from "@mui/material";

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    //ボタンがクリックされたときの処理;
    onSearch(searchQuery);
  };

  const handleInputChange = (value: string) => {
    // テキストフィールドの内容が変更されたときの処理
    setSearchQuery(value);
  };

  return (
    <div>
      <Stack direction="row">
        <TextField
          label="Search"
          onChange={handleInputChange}
          // value={searchQuery}
        />
        <Button label="Search" onClick={handleSearch} variant="contained" />
      </Stack>
    </div>
  );
};

export default SearchForm;
