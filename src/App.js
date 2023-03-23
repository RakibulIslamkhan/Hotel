import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./components/Accommodation/Book";
import Error from "./components/Error/Error";
import Contact from "./components/Home/Contact";
import Accommodation from "./Pages/Accommodation/Accommodation";
import Dining from "./Pages/Dining/Dining";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home";
import Meeting from "./Pages/Meeting/Meeting";
import Recreation from "./Pages/Recreation/Recreation";
import Terms from "./Pages/Terms/Terms";

const theme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(","),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home/>} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="dining" element={<Dining />} />
          <Route path="recreation" element={<Recreation />} />
          <Route path="meeting-&-events" element={<Meeting />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<Book />} />
          <Route path="terms-&-conditions" element={<Terms />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
