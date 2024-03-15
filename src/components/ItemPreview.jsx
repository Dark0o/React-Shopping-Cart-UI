import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import Package from "../assets/icons/package.svg";
import Zoom from "../assets/icons/zoom-in.svg";

import StarFilled from "../assets/icons/star-filled.svg";
import { Stack, Box, Typography } from "@mui/material";

const smallImgPreviewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid gray",
  padding: "10px",
  height: "100px",
  width: "100px",
};

const largeImgPreviewStyle = {
  position: "relative",
  display: "inline-block",
  border: "1px solid gray",
  padding: "10px",
  height: "400px",
  width: "400px",
  textAlign: "center",
};
const packageIconStyle = {
  width: "200px",
  height: "200px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const zoomIconBoxStyle = {
  position: "absolute",
  bottom: 0,
  right: 0,
};

const StarRating = ({ rating }) => {
  const filledStars = Math.round(rating); // Round the rating to the nearest whole number
  const stars = [];

  // Loop through 5 stars
  for (let i = 1; i <= 5; i++) {
    if (i <= filledStars) {
      // If the star index is less than or equal to the rating, fill it
      stars.push(
        <SvgIcon
          key={i}
          component={StarFilled}
          inheritViewBox
          style={{ width: "50px", height: "50px", color: "gold" }}
        />
      );
    } else {
      // Otherwise, leave it empty
      stars.push(
        <SvgIcon
          key={i}
          component={StarFilled}
          inheritViewBox
          style={{ width: "50px", height: "50px", color: "gray" }}
        />
      );
    }
  }

  return <Box className="star-rating">{stars}</Box>;
};

const ItemPreview = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ padding: "10px" }}>
      {/* Preview Img */}
      <Stack spacing={2}>
        <Box style={smallImgPreviewStyle}>
          <SvgIcon
            component={Package}
            inheritViewBox
            alt="Package"
            style={{ width: "50px", height: "50px" }}
          />
        </Box>
        <Box style={smallImgPreviewStyle}>
          <SvgIcon
            component={Package}
            inheritViewBox
            alt="Package"
            style={{ width: "50px", height: "50px" }}
          />
        </Box>
      </Stack>

      {/* Main Img */}
      <Box style={largeImgPreviewStyle}>
        <SvgIcon
          component={Package}
          inheritViewBox
          alt="Package"
          style={packageIconStyle}
        />
        <Box style={zoomIconBoxStyle}>
          <SvgIcon
            component={Zoom}
            inheritViewBox
            alt="Zoom Icon"
            style={{ width: "30px", height: "30px" }}
          />
        </Box>
      </Box>

      {/* Item Info */}
      <Stack>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Box>
          <Typography>by Conntech GmbH</Typography>
        </Box>
        <Stack>
          <StarRating rating={3.2} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ItemPreview;
