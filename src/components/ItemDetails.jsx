import React from "react";
import { useData } from "../context/DataContext";

import { Stack, Box, Typography } from "@mui/material";

import Details from "./Details";
import PricingAndShipping from "./PricingAndShipping";

const ItemDetails = () => {
  const { data } = useData();
  return (
    <Box sx={{ backgroundColor: "#EFEFEF", padding: "15px" }}>
      <Typography sx={{ color: "red" }}>DESCRIPTION</Typography>
      <Box sx={{ width: "80%" }}>
        <Typography sx={{ marginTop: "10px" }}>
          {data.article.description_long}
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          marginTop: "15px",
        }}
      >
        <Details />
        <PricingAndShipping />
      </Stack>
    </Box>
  );
};

export default ItemDetails;
