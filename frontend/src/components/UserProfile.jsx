import "./UserProfile.css";
import { useContext } from "react";
import {UserContext} from './InfoProvider';

// const [editProfile, setEditProfile] = useContext()

function UserProfile() {

   const [isLog, setIsLog] = useContext(UserContext)
  

  const ManageProfileHandler = (e) =>{
    return console.log( "hello im from edit profile btn")
  }

  return(
<div>
  <div className="div-wrap-nav">
    <div>
      <button className="btn-back"> Back to main </button>
     </div>
     <div>
      <button className="btn-message-alert">Message Alert</button>
    </div>

  </div>
  <div> <h1 className="titel">Your Account</h1> </div>
  <div>
    <p className="wellcome">
      Welcome to your private corner.<br/>
      You can manage your details here.
    </p>
  </div>

  
  

  <div className="div-wrap-main">
  <div className="insid-div">
  <div className="user-list">
    <h3>private Details</h3>
    <div className="profile-img"><p> \\Profile picture here\\  </p></div>
    <ul className="ul-list">
      {/* <li>{isLog.user.firstName}</li> */}
      <li>fmily name</li>
      <li>date of birth</li>
      <li>email</li>
      <li>phone number</li>
      <li>address</li>
      <li>city</li>
      <li>cuntry</li>
    </ul>
      <div className="div-wrap-pd"> 
      <button onClick={ManageProfileHandler} className="btn-pd">Edit profile</button>
      </div>
    
  </div>
  </div>

    <div className="insid-div"> <h3>Your Blogs</h3> </div>
    <div className="insid-div"> <h3>somthing here....</h3></div>

  </div>
  

  

</div>
  );
}

export default UserProfile;
