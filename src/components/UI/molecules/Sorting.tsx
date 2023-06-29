import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { SortKey } from "../../../types";

interface SortingProps {
  setSortKey: (key: SortKey) => void;
  value: string;
}

const options = [
  { value: "name", label: "Name" },
  { value: "rank", label: "Rank" },
  { value: "age", label: "Age" },
];

export const Sorting: React.FC<SortingProps> = ({ value, setSortKey }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSortKey(event.target.value as SortKey);
  };

  return (
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={handleChange}
        renderValue={(selectedValue) => (
          <>
            <Typography
              component="span"
              color="textSecondary"
              sx={{ paddingRight: 1 }}
            >
              Sort by:
            </Typography>
            <Typography
              component="span"
              color="textPrimary"
              fontWeight={600}
              sx={{ paddingRight: 1 }}
            >
              {options.find((option) => option.value === selectedValue)?.label}
            </Typography>
          </>
        )}
        inputProps={{
          MenuProps: {
            MenuListProps: {
              sx: {
                backgroundColor: "#394B61",
              },
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
