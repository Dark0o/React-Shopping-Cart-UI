import React from "react";
import { useData } from "../context/DataContext";

import { Stack, Box, Typography } from "@mui/material";

const ItemDetails = () => {
  const { data } = useData();
  return (
    <Box sx={{ backgroundColor: "#EFEFEF", padding: "15px" }}>
      <Typography sx={{ color: "red" }}>Description</Typography>
      <Typography sx={{ marginTop: "10px" }}>
        {data.article.description_long}
      </Typography>
    </Box>
  );
};

export default ItemDetails;
