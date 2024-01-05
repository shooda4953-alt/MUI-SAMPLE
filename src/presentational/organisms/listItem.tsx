import React from "react";
import BasicTable from "../molecules/table";

const rows = [
  {
    name: "lego blocks",
    price: 10000,
    numberOfPrice: 100,
    carbs: 24,
    protein: 4.0,
  },
];

const ListItem: React.FC = () => {
  return (
    <div>
      <BasicTable data={rows} />
    </div>
  );
};

export default ListItem;
