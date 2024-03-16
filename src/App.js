import React from "react";

import { Stack, Button, Box } from "@mui/material";
import fav from "./assets/icons/favorite.svg";
import zoomIcon from "./assets/icons/zoom-in.svg";
import SvgIcon from "@mui/material/SvgIcon";
import data from "./data/data.json";

import CssBaseline from "@mui/material/CssBaseline";
import { DataProvider } from "./context/DataContext";

import Navbar from "./components/Navbar";
import ItemPreview from "./components/ItemPreview";

const App = () => {
  console.log(zoomIcon);
  console.log(data);
  const ImageWithZoomIcon = () => {
    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* <img src={Fav} alt="Your Image" style={{ width: "100%" }} /> */}
        <SvgIcon
          component={fav}
          inheritViewBox
          alt="Zoom Icon"
          style={{ fontSize: "500px" }}
        />
        <div style={{ position: "absolute", bottom: 0, right: 0 }}>
          <SvgIcon
            component={zoomIcon}
            inheritViewBox
            alt="Zoom Icon"
            style={{ width: "30px", height: "30px" }}
          />
          {/* <img src={zoomIcon} /> */}
        </div>
      </div>
    );
  };

  return (
    <DataProvider>
      <React.Fragment>
        <CssBaseline />
        <Navbar />
        <ItemPreview />
        {/* <ImageWithZoomIcon /> */}
        <div>
          Testing heroku deploy <Button>Test Button</Button>
        </div>
      </React.Fragment>
    </DataProvider>
  );
};

export default App;
