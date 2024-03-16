import React, { useRef, useEffect } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import Package from "../assets/icons/package.svg";
import Zoom from "../assets/icons/zoom-in.svg";
import Discount from "../assets/icons/discount.svg";

import StarFilled from "../assets/icons/star-filled.svg";
import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import AddToCart from "./AddToCart";
import { useData } from "../context/DataContext";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  width: "70%",
  height: "auto",
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
          style={{ width: "25px", height: "25px", color: "gold" }}
        />
      );
    } else {
      // Otherwise, leave it empty
      stars.push(
        <SvgIcon
          key={i}
          component={StarFilled}
          inheritViewBox
          style={{ width: "25px", height: "25px", color: "gray" }}
        />
      );
    }
  }

  return <Box sx={{ marginTop: "15px" }}>{stars}</Box>;
};

const ItemPreview = () => {
  const { isVisible, setIsVisible, data } = useData();

  const targetRef = useRef(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on the isIntersecting property of the entry
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin around the viewport
        threshold: 0.5, // Trigger when at least 50% of the target is visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup function
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []); // Run effect only once

  return (
    <Stack direction="row" spacing={2} sx={{ padding: "10px" }}>
      <Stack direction={isSmallScreen ? "column" : "row"} spacing={1}>
        {/* Preview Img */}
        <Stack spacing={2} direction={isSmallScreen ? "row" : "column"}>
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
        <Stack style={{ display: "flex", flexDirection: "column" }}>
          <Typography>{data.article.title}</Typography>
          <Box>
            <span style={{ color: "gray" }}>by</span>{" "}
            <Link
              to={data.article.supplier_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {data.article.supplier_name}
            </Link>
          </Box>

          <Stack>
            <StarRating rating={data.article.stars} />
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography sx={{ marginTop: "25px" }}>
              {`${data.article.price} ${data.article.currency}`}
              <span
                style={{ color: "gray" }}
              >{` + ${data.article.transport_costs} ${data.article.currency} shipping`}</span>
              <br />
              <span style={{ color: "gray" }}>
                {"all prices incl. 10% taxes"}
              </span>
            </Typography>
            <SvgIcon
              component={Discount}
              inheritViewBox
              alt="Zoom Icon"
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            />
          </Stack>

          <Box
            style={{ display: "flex", flexDirection: "column", flex: 1 }}
            ref={targetRef}
          >
            <Box style={{ marginTop: "auto" }}>
              {isVisible && <AddToCart />}
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ItemPreview;
