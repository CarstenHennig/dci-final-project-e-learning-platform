import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
// import "../node_modules/font-awesome/css/font-awesome.min.css"; // Importing FontAwesome
import RouterComponents from "./components/Router.jsx";
import InfoProvider from "./components/InfoProvider.jsx";
import VideoGallery from "./components/VideoGallery.jsx";
import MediaPlayer from "./components/MediaPlayer.js";

function App() {
  return (
    <div>
       <MediaPlayer/> 
      <VideoGallery/> 
      {/* <InfoProvider>
        <RouterComponents />
      </InfoProvider>  */}
    </div>
  );
}

export default App;
