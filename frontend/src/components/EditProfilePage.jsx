import { useContext } from "react";
import {UserContext} from './InfoProvider';



function EditProfilePage() {
  const [isLog, setIsLog] = useContext(UserContext)
  
  return (<div> 
    Heloo {isLog.user.firstName} here you can Edit your profile.
  </div>)
}

export default EditProfilePage;