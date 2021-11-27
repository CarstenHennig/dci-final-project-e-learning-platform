import "./App.css";
import React from "react";
import RouterComponents from "./components/Router.jsx";
import InfoProvider from "./components/InfoProvider.jsx";
import PostImage from "./libs/PostImage.jsx";
function App() {
  
    return (
      <div>
        <PostImage/>
     {/*  <InfoProvider>
        <RouterComponents />
      </InfoProvider> */}
    </div>
  );
}

export default App;
