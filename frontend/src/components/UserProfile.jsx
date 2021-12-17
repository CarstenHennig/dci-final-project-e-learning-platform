import "./UserProfile.css";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./InfoProvider";
import { Link } from "react-router-dom";
import Profile from "../images/profile-img.png";
import BlogModal from "./BlogModal.jsx";

export default function UserProfile() {
  const [isLog, setIsLog] = useContext(UserContext);

  const [activePost, setActivePost] = useState(null);

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
              <img className="profiile" src={Profile} alt="" />
            </div>
            <div>
              <button className="btn-add-profile-picture">
                Edit your profile picture
              </button>
            </div>
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
