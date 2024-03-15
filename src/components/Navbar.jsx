import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";

const gray = "#E8E8E8";

const StyledAppBar = styled(AppBar)({
  top: "0",
  position: "sticky", // or 'fixed' if you want it fixed even when there's no scroll
  backgroundColor: "#ffffff", // change as per your design
  color: "#000000", // change as per your design
  zIndex: 1000, // Using the z-index value provided by the theme
  boxShadow: "none", // Remove the default box shadow
});

const StyledToolbar = styled(Toolbar)({
  borderBottom: `1px solid ${gray}`,
});

const Navbar = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Typography variant="h6">{"string"}</Typography>
        {/* Add other navbar elements here */}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
