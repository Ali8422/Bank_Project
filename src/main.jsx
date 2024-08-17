import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountOpeningForm from "./pages/components/AccountOpeningForm.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/newAccount' element={<AccountOpeningForm/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
