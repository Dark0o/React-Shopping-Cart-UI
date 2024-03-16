import React, { useState } from "react";
import { styled } from "@mui/system";

import { TextField, Button, Box, Typography } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import Add from "../assets/icons/add.svg";

// removes the up and down arrows from mui input type number
const Input = styled(TextField)({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
});

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
  };

  return (
    <Box display="flex" alignItems="center">
      <Input
        type="number"
        variant="outlined"
        value={quantity}
        onChange={handleQuantityChange}
        InputProps={{
          style: { height: "40px" },
        }}
        sx={{ width: "80px", marginRight: "10px" }}
      />
      <Typography
        style={{ marginRight: "5px", display: "flex", alignItems: "center" }}
      >
        units
      </Typography>
      <Button
        variant="contained"
        onClick={handleAddToCart}
        startIcon={<SvgIcon component={Add} inheritViewBox alt="Add Icon" />}
        sx={{
          height: "40px",
          backgroundColor: "red",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#ff3333",
            boxShadow: "none",
          },
        }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default AddToCart;
