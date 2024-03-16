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

const gray = "#E8E8E8";
const gray2 = "#A7A7A7";

const StyledAppBar = styled(AppBar)({
  top: "0",
  position: "sticky",
  backgroundColor: "#ffffff",
  color: "#000000",
  //zIndex: 1000,
  boxShadow: "none", // Remove the default box shadow
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
  backgroundColor: "red",
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

const Navbar = () => {
  const { data, isVisible } = useData();

  return (
    <StyledAppBar>
      <StyledToolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h7" sx={{ color: "red" }}>
          {data.article.title}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          {!isVisible && <AddToCart />}
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
