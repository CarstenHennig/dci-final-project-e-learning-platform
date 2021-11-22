import { useContext } from "react";
import {UserContext} from './InfoProvider';
import "../App.css";


function Home() {
  const [isLog, setIsLog] = useContext(UserContext)
  
  return (<div> 
    Wlecome {isLog.user.firstName || 'Guest'}
  </div>)
}

export default Home;
