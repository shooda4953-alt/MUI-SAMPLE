// export const RadioForm: React.FC = () => {};
import { RadioList } from "./radio";

export const RadioForm: React.FC = () => {
  const radioItems = [
    { id: 1, label: "button 1", value: "option1", checked: false },
    { id: 2, label: "button 2", value: "option2", checked: true },
    { id: 3, label: "button 3", value: "option3", checked: false },
  ];
  return (
    <div>
      <RadioList radioItems={radioItems} />
    </div>
  );
};
