import FormGroup from "@material-ui/core/FormGroup";
import { Checkbox, FormControlLabel } from "@mui/material";

interface CheckboxListProps {
  checkboxItems: { id: number; label: string; checked: boolean }[];
}

export const CheckboxList: React.FC<CheckboxListProps> = ({
  checkboxItems,
}) => {
  const handleChange = (id: number) => {
    console.log(`Checkbox with ID ${id} changed`);
  };

  return (
    <FormGroup>
      <div style={{ display: "flex", gap: "8px" }}>
        {checkboxItems.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                checked={item.checked}
                onChange={() => handleChange(item.id)}
                style={{ color: "#c0c6c9" }}
              />
            }
            label={item.label}
          />
        ))}
      </div>
    </FormGroup>
  );
};
