import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
// import "../node_modules/font-awesome/css/font-awesome.min.css"; // Importing FontAwesome
import RouterComponents from "./components/Router.jsx";
import InfoProvider from "./components/InfoProvider.jsx";
import EmbeddedMedia from "./components/EmbeddedMedia.js";




export default function App() {
  return (
    <div>
      <InfoProvider>
        <RouterComponents />
      </InfoProvider>
    </div>
  );
}

