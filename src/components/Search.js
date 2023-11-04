import React from "react";
import TextField from "@mui/material/TextField";
import { Select, MenuItem } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const RoundedSearchInput = ({ placeholder, selectedYear, onYearChange }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        // fullWidth
        placeholder="Google Search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            backgroundColor: "white",
            borderRadius: "55px",
          },
        }}
      />
      <Select
        value={selectedYear}
        onChange={onYearChange}
        variant="outlined"
        style={{ marginLeft: "10px" }}
      >
        <MenuItem value="">All Years</MenuItem>
        <MenuItem value="2023">2023</MenuItem>
        <MenuItem value="2022">2022</MenuItem>
        {/* Add more years as needed */}
      </Select>
    </div>
  );
};

export default RoundedSearchInput;
