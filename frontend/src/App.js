import "./App.css";
import React from "react";
import RouterComponents from './components/Router.jsx'
import WriteArticle from "./components/BlogPost.jsx"
import InfoProvider from "./components/InfoProvider.jsx";
 
function App() {
  
    return (
      <WriteArticle/>
     /*  <InfoProvider>
        <RouterComponents/>
      </InfoProvider> */
    );
  
}

export default App;
