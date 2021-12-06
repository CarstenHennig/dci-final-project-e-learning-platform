import "./App.css";
import React from "react";
import RouterComponents from "./components/Router.jsx";
import InfoProvider from "./components/InfoProvider.jsx";
import YoutubeEmbed from "./components/VideoPost";

function App() {
  
    return (
      <div>
        <YoutubeEmbed/>
     {/*  <InfoProvider>
        <RouterComponents />
      </InfoProvider> */}
    </div>
  );
}

export default App;
