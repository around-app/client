import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Navigation } from "./pages/Navigation";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="login" element={<Login />} />
                <Route path="navigation" element={<Navigation />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
