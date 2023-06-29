import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      id="search"
      type="search"
      placeholder="Search by name"
      variant="outlined"
      value={value}
      onChange={handleSearchChange}
      sx={{
        width: "100%",
        background: "#1A2536",
        border: "none",
        borderRadius: "4px",
        "& fieldset": { border: "none" },
      }}
      InputLabelProps={{
        shrink: false,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#fff" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
