import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { AppProvider } from "./context/context";

const Index = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
