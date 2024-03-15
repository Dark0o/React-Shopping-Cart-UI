import React from "react";
import Button from "@mui/material/Button";
import fav from "./assets/icons/favorite.svg";
import zoomIcon from "./assets/icons/zoom-in.svg";
import SvgIcon from "@mui/material/SvgIcon";

const App = () => {
  console.log(zoomIcon);
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
    <div>
      <ImageWithZoomIcon />
      <div>
        Testing heroku deploy <Button>Test Button</Button>
      </div>
    </div>
  );
};

export default App;
