import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import Home from "./pages/Home.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Reports from "./pages/Reports.jsx";
import Downloads from "./pages/Downloads.jsx";
import Purchases from "./pages/Purchases.jsx";
import Apikeys from "./pages/Apikeys.jsx";
import Profile from "./pages/Profile.jsx";
import ApiManual from "./pages/ApiManual.jsx";
import ChangePassword from "./pages/ChangePassword";
import Settings from "./pages/Settings";
import Entities from "./pages/Entities";
import Sender from "./pages/Sender.jsx";
import Templates from "./components/Profile/Templates.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashboardLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/sms-reports" element={<Reports />} />
      <Route path="/sms-stats" element={<Home />} />
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/apikeys" element={<Apikeys />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/api-manual" element={<ApiManual />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/entities" element={<Entities />} />
      <Route path="/sender" element={<Sender />} />
      <Route path="/templates" element={<Templates />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <RouterProvider router={router} />
  </StyledEngineProvider>,
);
