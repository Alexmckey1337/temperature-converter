import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

interface IMenuItem {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  menuItems: IMenuItem[];
  value?: string;
  labelId: string;
}

export const SelectComponent = ({ label, menuItems, labelId }: SelectProps) => {
  const [value, setInnerValue] = useState("");

  const handleChange = (e: SelectChangeEvent) => {
    setInnerValue(e.target.value);
  };

  return (
    <FormControl fullWidth sx={{ minWidth: "200px" }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {menuItems.map((el) => {
          return <MenuItem value={el.value}>{el.label}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};
