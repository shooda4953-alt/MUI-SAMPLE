import { HeaderButtonList } from "./headerButton";

export const HeaderButton: React.FC = () => {
  const headerButton = [
    { id: 1, label: "menu" },
    { id: 2, label: "icon" },
    { id: 3, label: "Title" },
  ];
  return (
    <div style={{ display: "flex", height: "5px" }}>
      <HeaderButtonList headerButton={headerButton} />
    </div>
  );
};
