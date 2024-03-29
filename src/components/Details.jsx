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
  Chip,
} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

import Attachment from "../assets/icons/attachment.svg";

const Details = ({ isSmallScreen }) => {
  const { data } = useData();

  const features = Object.entries(data.article.features);

  return (
    <Box
      sx={{
        padding: "15px",
        backgroundColor: "white",
        width: isSmallScreen ? "100%" : "500px",
        height: "auto",
      }}
    >
      <Typography sx={{ color: "#DD4C40" }}>DETAILS</Typography>
      <Divider />

      {/* Features */}
      <Box>
        <Typography sx={{ color: "grey", marginTop: "5px" }}>
          Features
        </Typography>
        <Box>
          <ul style={{ marginBlockStart: 0 }}>
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
                  <Typography>{attachment.file_label}</Typography>
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
