import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { DataProvider } from "./context/DataContext";

import Navbar from "./components/Navbar";
import ItemPreview from "./components/ItemPreview";
import ItemDetails from "./components/ItemDetails";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: "16px",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <ItemPreview />
          <ItemDetails />
        </React.Fragment>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;
