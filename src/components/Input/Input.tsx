import { TextField, TextFieldVariants } from "@mui/material";
import { useState } from "react";

interface IInputProps {
  value?: string;
  label: string;
  variant?: TextFieldVariants;
  id: string;
}

export const InputComponent = ({
  value,
  label,
  id,
  variant = "outlined",
}: IInputProps) => {
  const [inputValue, setInputValue] = useState(value ? value : "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <TextField
      label={label}
      value={inputValue}
      id={id}
      onChange={handleChange}
      variant={variant}
    />
  );
};
