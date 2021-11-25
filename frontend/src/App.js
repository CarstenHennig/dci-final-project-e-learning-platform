import "./App.css";
import React from "react";
import RouterComponents from './components/Router.jsx'
import PostArticle from "./components/PostArticle.jsx"
import InfoProvider from "./components/InfoProvider.jsx";
 
function App() {
  
    return (
      <PostArticle/>
     /*  <InfoProvider>
        <RouterComponents/>
      </InfoProvider> */
    );
  
}

export default App;
