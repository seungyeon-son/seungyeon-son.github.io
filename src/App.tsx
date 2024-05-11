import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/MainPage";
import Archive from "./pages/archive/ArchivePage";
import Navigation from "./components/Navigation";
import "./index.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
