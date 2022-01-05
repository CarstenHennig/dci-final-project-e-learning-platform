import "./UserProfile.css";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./InfoProvider";
import { Link } from "react-router-dom";
import BlogModal from "./BlogModal.jsx";
import { Modal, Button } from "react-bootstrap"
import EditProfileImage from "./EditProfileImage.jsx"
import axios from "axios"

export default function UserProfile() {
  
  const [isLog, setIsLog] = useContext(UserContext);
  const [activePost, setActivePost] = useState(null);
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function clearLocalStorage() {
  localStorage.removeItem('profileImage');
}
  
  const handleAvatarUrl = () => {    
  
const userId = isLog.user._id
    axios
    
      .put("http://localhost:9000/editUsers/avatar/" +userId, {
        avatar: localStorage.getItem('profileImage'),

      })
      .then(
        (response) => {
          alert("Profile photo posted successfully");
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <div>
      <div className="div-wrap-nav">
        <div>
          <button className="btn-back">Back to main page</button>
        </div>
        <div>
          <button className="btn-message-alert">Message alert</button>
        </div>
      </div>
      <div>
        <h1 className="title">Your account</h1>
      </div>
      <div>
        <p className="welcome">
          Welcome to your private corner.
          <br />
          You can manage your details here.
        </p>
      </div>

      <div className="div-wrap-main">
        <div className="inside-div">
          <div className="user-list">
            <h3>private Details</h3>
            <div className="profile-img">
              <img className="profile" src={isLog.user.avatar} alt="profile photo" />
            </div>

            <>
              <Button variant="primary" className="btn-add-profile-picture" onClick={handleShow}>
                Edit Profile Photo
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Profile Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body><EditProfileImage />             
               </Modal.Body>
                <Modal.Footer>
                  <Button variant="outline-dark" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="outline-success" onClick={ ()=> {handleAvatarUrl (); clearLocalStorage(); handleClose ()}}>
                    Save Image
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
            <ul className="ul-list">
              <li>{isLog.user.firstName}</li>
              <li>{isLog.user.lastName}</li>
              <li>{isLog.user.email}</li>
              <li>{isLog.user.city}</li>
              <li>{isLog.user.street}</li>
              <li>{isLog.user.zip}</li>
              <li>{isLog.user.country}</li>
            </ul>

            <div className="div-wrap-pd">
              <Link to="/EditProfilePage">
                <button className="btn-pd">Edit profile</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="inside-div">
          <h3>Your Blogs</h3>
          <div className="wrap-ul-your-blogs">
            <ul className="your-blogs">
              {isLog.user.posts.map((post) => (
                <li key={post._id}>
                  <p onClick={(e) => setActivePost(post)}>{post.title}</p>
                </li>
              ))}

              <BlogModal
                post={activePost}
                closeHandler={() => setActivePost(null)}
              />
            </ul>
          </div>
        </div>

        <div className="inside-div">
          <h3>Something here ...</h3>
        </div>
      </div>
    </div>
  );
}
