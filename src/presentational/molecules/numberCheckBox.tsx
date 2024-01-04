import { CheckboxList } from "../atoms/label";

export const CheckBoxForm: React.FC = () => {
  const checkboxItems = [
    { id: 1, label: "box 1", checked: false },
    { id: 2, label: "box 2", checked: true },
    { id: 3, label: "box 3", checked: false },
  ];

  return (
    <div>
      <CheckboxList checkboxItems={checkboxItems} />
    </div>
  );
};
