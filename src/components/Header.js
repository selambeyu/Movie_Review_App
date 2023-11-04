import React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Select from "@mui/material/Select";
import RoundedSearchInput from "./Search";

const CenteredAppBar = styled(AppBar)`
  display: flex;
  justify-content: center;
  align-items: center;
  bg-color: @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const CenteredElements = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 16px;

    & > * {
      margin: 8px 0; /* Add vertical space between elements */
    }
  }
`;

const Header = () => {
  return (
    <div>
      <CenteredAppBar position="static">
        <Toolbar>
          <CenteredElements>
            <Typography variant="h6">Title</Typography>
            <RoundedSearchInput />
            <Select native>
              <option>Filter 1</option>
              <option>Filter 2</option>
              {/* Add more filter options as needed */}
            </Select>
          </CenteredElements>
        </Toolbar>
      </CenteredAppBar>
      {/* Your movie review content goes here */}
    </div>
  );
};

export default Header;
