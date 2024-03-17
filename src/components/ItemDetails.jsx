import React from "react";
import { useData } from "../context/DataContext";

import { Stack, Box, Typography } from "@mui/material";

import Details from "./Details";
import PricingAndShipping from "./PricingAndShipping";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ItemDetails = () => {
  const { data } = useData();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#EFEFEF", padding: "15px" }}>
      <Typography sx={{ color: "#DD4C40", marginTop: "15px" }}>
        DESCRIPTION
      </Typography>
      <Box sx={{ width: "80%", marginTop: "10px", marginBottom: "25px" }}>
        <Typography>{data.article.description_long}</Typography>
      </Box>

      <Stack
        direction={isSmallScreen ? "column" : "row"}
        spacing={2}
        sx={{
          marginTop: "15px",
        }}
      >
        <Details isSmallScreen={isSmallScreen} />
        <PricingAndShipping isSmallScreen={isSmallScreen} />
      </Stack>
    </Box>
  );
};

export default ItemDetails;
