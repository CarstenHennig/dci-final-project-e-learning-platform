import "./App.css";
import React from "react";
import RouterComponents from "./components/Router.jsx";
import WriteArticle from "./components/Article";
import RouterComponents from './components/Router.jsx'

import InfoProvider from "./components/InfoProvider.jsx";

function App() {
  return (
    <div>
      <InfoProvider>
        <RouterComponents />
      </InfoProvider>
    </div>
  );

}

export default App;
