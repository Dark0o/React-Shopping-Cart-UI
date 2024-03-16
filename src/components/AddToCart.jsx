import React, { useState } from "react";
import { styled } from "@mui/system";

import { TextField, Button, Box, Typography, SvgIcon } from "@mui/material";

import Add from "../assets/icons/add.svg";
import { useData } from "../context/DataContext";

// removes the up and down arrows from mui input type number, colors the outline
const Input = styled(TextField)({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "gray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "gray",
    },
  },
});

const AddToCart = () => {
  const { data, addItemsToCart } = useData();
  const [isDisabled, setIsDisabled] = useState(false);

  const [quantity, setQuantity] = useState(data.article.minimum_order_quantity);

  const handleQuantityChange = (event) => {
    // parse the string to number in order to add to data correctly
    const value =
      event.target.value === "" ? "" : parseFloat(event.target.value);

    //if value is empty string disable the button
    if (value === "") {
      setIsDisabled(true);
    } else setIsDisabled(false);

    setQuantity(value);
  };

  const handleAddToCart = () => {
    addItemsToCart(quantity);
  };

  return (
    <Box display="flex" alignItems="center">
      <Input
        type="number"
        variant="outlined"
        value={quantity}
        onChange={handleQuantityChange}
        InputProps={{
          style: {
            height: "40px",
          },
        }}
        sx={{ width: "80px", marginRight: "10px" }}
      />
      <Typography
        style={{ marginRight: "5px", display: "flex", alignItems: "center" }}
      >
        {data.article.unit}
      </Typography>
      <Button
        disabled={isDisabled}
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
