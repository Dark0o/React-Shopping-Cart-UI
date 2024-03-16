import React from "react";
import { useData } from "../context/DataContext";

import { Stack, Box, Typography, Divider } from "@mui/material";

const PricingAndShipping = () => {
  const { data } = useData();

  const priceBreaks = Object.entries(data.article.price_breaks);
  console.log(priceBreaks);

  return (
    <Box
      sx={{
        padding: "15px",
        backgroundColor: "white",
        width: "500px",
        height: "auto",
      }}
    >
      <Typography sx={{ color: "red" }}>PRICING & SHIPPING</Typography>
      <Divider />

      {/* Shipping details */}
      <Box>
        <ul>
          <li>
            <Typography>
              <span style={{ color: "gray" }}>{"Minimum order"}:</span>{" "}
              {`${data.article.minimum_order_quantity} ${data.article.unit}`}
            </Typography>
          </li>
          <li>
            <Typography>
              <span style={{ color: "gray" }}>{"Shipping"}:</span>{" "}
              {`680,96 ${data.article.currency}`}
            </Typography>
          </li>
          <li>
            <Typography>
              <span style={{ color: "gray" }}>{"Delivery"}:</span>{" "}
              {` ${data.article.delivery_time} days`}
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Shipping details */}

      <Box sx={{ width: "60%" }}>
        <Typography sx={{ color: "gray" }}>Price breaks</Typography>
        {priceBreaks.map(([key, value]) => (
          <Box key={key}>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Typography>{`ex ${key} ${data.article.unit}`}</Typography>
              <Typography>
                {`${value.toString()} ${data.article.currency}/${
                  data.article.unit
                } `}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PricingAndShipping;