import "./UserProfile.css";
import axios from "axios";

function UserProfile() {

  // == GET REQUEST WITH AXIOS
async function MakeRequest() {
    const config = {
        method: 'get',
        url: 'http://localhost:9000/users/61a0a72010d9efe46b27591e'
    }
    let res = await axios(config)
    const status = localStorage.setItem('status',res.statusText)
    const orient = res.statusText 
    console.log("Message: ",res.data, "and STATUS:" , orient);
}

  return(
<div>
  <h1>Your Account</h1>
  <p>
      Welcome to your private corner . You can manage your details here.
  </p>
</div>
  );
}

export default UserProfile;
