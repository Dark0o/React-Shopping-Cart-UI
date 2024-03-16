import React from "react";
import { useData } from "../context/DataContext";
import { Link } from "react-router-dom";

import {
  Stack,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

import Attachment from "../assets/icons/attachment.svg";

const Details = () => {
  const { data } = useData();

  const features = Object.entries(data.article.features);

  console.log(features);
  return (
    <Box
      sx={{
        padding: "15px",
        backgroundColor: "white",
        width: "500px",
        height: "auto",
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
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText>{attachment.file_label}</ListItemText>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Keywords */}
      <Box>
        <Typography sx={{ color: "grey" }}>Keywords</Typography>
        <Stack direction="row" spacing={2} sx={{ padding: "10px" }}>
          {data.article.keywords.map((keyword, index) => (
            <Chip key={index} label={keyword} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Details;
