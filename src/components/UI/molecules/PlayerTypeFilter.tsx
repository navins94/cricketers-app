import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

interface PlayerTypeFilterProps {
  playerType: string;
  handlePlayerTypeChange: (type: string) => void;
}
const playerTypes = [
  { value: "all", label: "All" },
  { value: "batsman", label: "Batsman" },
  { value: "bowler", label: "Bowler" },
  { value: "allRounder", label: "All rounder" },
  {
    value: "wicketKeeper",
    label: "Wicket Keeper",
  },
];

const PlayerTypeFilter: React.FC<PlayerTypeFilterProps> = ({
  playerType,
  handlePlayerTypeChange,
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    handlePlayerTypeChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        value={playerType}
        onChange={handleChange}
        renderValue={(selectedValue) => (
          <>
            <Typography
              component="span"
              color="textSecondary"
              sx={{ paddingRight: 1 }}
            >
              Player Type:
            </Typography>
            <Typography
              component="span"
              color="textPrimary"
              fontWeight={600}
              sx={{ paddingRight: 1 }}
            >
              {
                playerTypes.find((option) => option.value === selectedValue)
                  ?.label
              }
            </Typography>
          </>
        )}
        variant="outlined"
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
        {playerTypes.map((type) => (
          <MenuItem key={type.value} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PlayerTypeFilter;
