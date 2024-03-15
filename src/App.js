import React from "react";
import Button from "@mui/material/Button";
import Fav from "./assets/icons/favorite.svg";

const App = () => {
  return (
    <div>
      Testing heroku deploy <Button>Test Button</Button>
      <img src={Fav}></img>
    </div>
  );
};

export default App;
