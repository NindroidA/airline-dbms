import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "app/app";
import Home from "./pages/home";
import Layout from "components/layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
);
