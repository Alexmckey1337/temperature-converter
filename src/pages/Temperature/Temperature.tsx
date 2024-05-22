import { Box, Typography } from "@mui/material";
import { SelectComponent } from "../../components/Select/Select";
import { InputComponent } from "../../components/Input/Input";

export const Temperature = () => {
  const menuItems = [
    { value: "celcius", label: "Celcius" },
    { value: "fahrenheit", label: "Fahrenheit" },
    { value: "kelvin", label: "Kelvin" },
  ];

  return (
    <Box display="flex" width="100%">
      <Box>
        <Typography>From:</Typography>
        <SelectComponent
          menuItems={menuItems}
          label="Select temperature"
          labelId="temp-select-from"
        />
        <InputComponent label="Degrees" id="from-input" />
      </Box>
      <Box>
        <Typography>To:</Typography>
        <SelectComponent
          menuItems={menuItems}
          label="Select temperature"
          labelId="temp-select-to"
        />
        <InputComponent label="Degrees" id="to-input" />
      </Box>
    </Box>
  );
};
