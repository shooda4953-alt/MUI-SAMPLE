import { TextFieldList } from "./textField";

export const TextFieldForm: React.FC = () => {
  const textFieldItems = [{ id: 1, label: "textField 1", value: "" }];
  return (
    <div style={{ display: "flex", height: "5px" }}>
      <TextFieldList textFieldItems={textFieldItems} />
    </div>
  );
};
