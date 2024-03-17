import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Add shadow if user has scrolled down, remove it if scrolled back to top
      if (scrollTop > 0 && !scrolled) {
        setScrolled(true);
      } else if (scrollTop === 0 && scrolled) {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <React.Fragment>
          <CssBaseline />
          <Navbar scrolled={scrolled} />
          <ItemPreview />
          <ItemDetails />
        </React.Fragment>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;
