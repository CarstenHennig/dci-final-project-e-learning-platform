import "./App.css";
import React from "react";
import RouterComponents from './components/Router.jsx'
import InfoProvider from "./components/InfoProvider.jsx";
 
function App() {
  
    return (
      
      <InfoProvider>
        <RouterComponents/>
      </InfoProvider> 
    );
  
}

export default App;
