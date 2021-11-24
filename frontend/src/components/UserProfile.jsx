import "./UserProfile.css";

function UserProfile() {
  return(
<div>
  <div className="div-wrap-nav">
    <div>
      <button> Back to main </button>
     </div>
     <div>
      <button>Message Alert</button>
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
    <div></div>
    <div></div>
    <div></div>


  </div>
  

  

</div>
  );
}

export default UserProfile;
