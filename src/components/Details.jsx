import React from "react";
import { useData } from "../context/DataContext";
import { Link } from "react-router-dom";

import { Stack, Box, Typography, Divider } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Attachment from "../assets/icons/attachment.svg";

const Details = () => {
  const { data } = useData();

  const features = Object.entries(data.article.features);

  console.log(features);
  return (
    <Box
      sx={{
        marginTop: "15px",
        padding: "15px",
        backgroundColor: "white",
        width: "500px",
        height: "500px",
      }}
    >
      <Typography sx={{ color: "red" }}>DETAILS</Typography>
      <Divider />

      {/* Features */}
      <Box>
        <Typography sx={{ color: "grey" }}>Features</Typography>
        <Box>
          <ul>
            {features.map(([key, value]) => (
              <li key={key}>
                <Typography>
                  <span style={{ color: "gray" }}>{key}:</span> {value}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>

      {/* Attachments */}
      <Box>
        <Typography sx={{ color: "grey" }}>Attachments</Typography>
        <Box>
          <List>
            {data.article.attachments.map((attachment, index) => (
              <ListItem key={index}>
                <SvgIcon
                  component={Attachment}
                  inheritViewBox
                  alt="Attachment Icon"
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />

                <Link
                  to={attachment.file_link}
                  // style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemText>{attachment.file_label}</ListItemText>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
