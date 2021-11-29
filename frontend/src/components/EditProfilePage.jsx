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

// async function MakeRequest() {
//   const config = {
//       method: 'get',
//       url: 'http://localhost:9000/users/61a0a72010d9efe46b27591e'
//   }
//   let res = await axios(config)
//   const status = localStorage.setItem('status',res.statusText)
//   const orient = res.statusText 
//   console.log("Message: ",res.data, "and STATUS:" , orient);
// }