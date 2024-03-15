import React from "react";
import Button from "@mui/material/Button";
import fav from "./assets/icons/favorite.svg";
import zoomIcon from "./assets/icons/zoom-in.svg";
import SvgIcon from "@mui/material/SvgIcon";
import data from "./data/data.json";

import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/Navbar";

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
    <React.Fragment>
      <CssBaseline />
      <Navbar title={data.article.title} />
      <ImageWithZoomIcon />
      <div>
        Testing heroku deploy <Button>Test Button</Button>
      </div>
    </React.Fragment>
  );
};

export default App;
