import "./App.css";
import React from "react";
import RouterComponents from "./components/Router.jsx";
import WriteArticle from "./components/Article";
<<<<<<< HEAD
=======
import RouterComponents from './components/Router.jsx'

>>>>>>> ec27db4d611d46c06164bdf153a29519c5af6d11
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
