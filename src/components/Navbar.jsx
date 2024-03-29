import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import SvgIcon from "@mui/material/SvgIcon";
import FactsSoft from "../assets/icons/facts-soft.svg";
import Favorite from "../assets/icons/favorite.svg";

import Cart from "../assets/icons/cart.svg";
import { useData } from "../context/DataContext";
import AddToCart from "./AddToCart";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const gray = "#E8E8E8";
const gray2 = "#A7A7A7";

const StyledAppBar = styled(AppBar)({
  top: "0",
  position: "sticky",
  backgroundColor: "#ffffff",
  color: "#000000",
  boxShadow: "none",
});

const StyledToolbar = styled(Toolbar)({
  borderBottom: `1px solid ${gray}`,
});

const iconStyle = {
  width: "25px",
  height: "25px",
  color: gray2,
};

const cartBubbleStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: "#DD4C40",
  color: "white",
  borderRadius: "50%",
  width: "14px",
  height: "14px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "8px",
  fontWeight: "bold",
};

const CartWithBubble = ({ cartItemCount }) => {
  return (
    <Box style={{ position: "relative", display: "inline-block" }}>
      <SvgIcon
        component={Cart}
        inheritViewBox
        alt="Zoom Icon"
        style={iconStyle}
      />
      {cartItemCount > 0 && <Box style={cartBubbleStyle}>{cartItemCount}</Box>}
    </Box>
  );
};

const Navbar = ({ scrolled }) => {
  const { data, isVisible } = useData();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const buttonText = isSmallScreen ? "Add" : "Add to cart";

  return (
    <StyledAppBar>
      <StyledToolbar
        sx={{
          justifyContent: isSmallScreen ? "flex-end" : "space-between",
          boxShadow: scrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        {(isSmallScreen && isVisible) || !isSmallScreen ? (
          <Typography variant="h7" sx={{ color: "#DD4C40" }}>
            {data.article.title}
          </Typography>
        ) : null}

        <Stack direction="row" spacing={1} alignItems="center">
          {!isVisible && <AddToCart buttonText={buttonText} />}
          <SvgIcon
            component={Favorite}
            inheritViewBox
            alt="Zoom Icon"
            style={iconStyle}
          />
          <SvgIcon
            component={FactsSoft}
            inheritViewBox
            alt="Zoom Icon"
            style={iconStyle}
          />

          <Divider orientation="vertical" flexItem />
          <CartWithBubble cartItemCount={data.cart.items} />
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
