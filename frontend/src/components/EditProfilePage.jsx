import { useContext } from "react";
import {UserContext} from './InfoProvider';
import "./EditProfilePage.css" 



function EditProfilePage() {
  const [isLog, setIsLog] = useContext(UserContext)
  
  return (<div className="div-test"> 
    Heloo {isLog.user.firstName} here you can Edit your profile.
  </div>)
}

export default EditProfilePage;