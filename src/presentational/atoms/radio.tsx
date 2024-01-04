import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface RadioListProps {
  radioItems: { id: number; label: string; value: string; checked: boolean }[];
}

export const RadioList: React.FC<RadioListProps> = ({ radioItems }) => {
  const handleChange = (id: number) => {
    console.log(`Radio with ID ${id} changed`);
  };

  return (
    <RadioGroup>
      <div style={{ display: "flex", gap: "8px" }}>
        {radioItems.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Radio
                checked={item.checked}
                onChange={() => handleChange(item.id)}
                style={{ color: "#c0c6c9" }}
              />
            }
            label={item.label}
            value={item.value}
          />
        ))}
      </div>
    </RadioGroup>
  );
};
