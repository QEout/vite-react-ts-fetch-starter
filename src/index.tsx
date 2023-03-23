import React from "react";
import { createRoot } from "react-dom/client";
import App from "./bootstrap/App";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import "./bootstrap/style.css";
createRoot(document.getElementById("root") as HTMLElement).render(
  React.createElement(App)
);
