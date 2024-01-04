import { ButtonList } from "../atoms/button";

export const ButtonForm: React.FC = () => {
  const buttonItems = [
    { id: 1, label: "clear" },
    { id: 2, label: "search" },
  ];
  return (
    <div style={{ display: "flex", height: "5px" }}>
      <ButtonList buttonItems={buttonItems} />
    </div>
  );
};
