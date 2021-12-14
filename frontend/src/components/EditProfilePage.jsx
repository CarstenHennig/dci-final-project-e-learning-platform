import { useContext } from "react";
import { UserContext } from "./InfoProvider";
import "./EditProfilePage.css";

function EditProfilePage() {
  const [isLog, setIsLog] = useContext(UserContext);

  return (
    <div className="div-test">
      Hello {isLog.user.firstName}! Here you can edit your profile.
    </div>
  );
}

export default EditProfilePage;
