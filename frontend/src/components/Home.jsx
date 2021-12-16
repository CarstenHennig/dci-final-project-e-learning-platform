import { useContext } from "react";
import { UserContext } from "./InfoProvider";
import Profile from "../images/profile-img.png";
import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BlogModal from "./BlogModal.jsx";

function Home() {
  const [activePost, setActivePost] = useState(null);
  const [isLog, setIsLog] = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/posts/getPost")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <div className="welcome-div">
        <div>Welcome {isLog.user.firstName || "Guest"}</div>
      </div>
      <div className="wrap-div-home">
        <div className="inside-wrap-div-1">
          <div>
            <div>
              <h3 className="font-size-home">Main Categories</h3>
            </div>
            <div className="wrap-list-of-main-categories">
              <ul className="list-of-main-categories">
                <li>
                  <a href="#">Travel</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">TV</a>
                </li>
                <li>
                  <a href="#">Books</a>
                </li>
                <li>
                  <a href="#">Geographical</a>
                </li>
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">Yoga</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
                <li>
                  <a href="#">University</a>
                </li>
                <li>
                  <a href="#">Relationships</a>
                </li>
                <li>
                  <a href="#">University</a>
                </li>
                <li>
                  <a href="#">Pets</a>
                </li>
                <li>
                  <a href="#">Nature</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3 className="font-size-home-2">Top Articles</h3>
            </div>
            <div className="wrap-list-of-main-categories-2">
              <ul className="list-of-main-categories">
                <li>
                  <a href="#">Travel</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">TV</a>
                </li>
                <li>
                  <a href="#">Books</a>
                </li>
                <li>
                  <a href="#">Geographical</a>
                </li>
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">Yoga</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
                <li>
                  <a href="#">University</a>
                </li>
                <li>
                  <a href="#">Relationships</a>
                </li>
                <li>
                  <a href="#">University</a>
                </li>
                <li>
                  <a href="#">Pets</a>
                </li>
                <li>
                  <a href="#">Nature</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="inside-wrap-div-2">
          {posts.map((oneSinglePost) => (
            <div className="wrap-div-box-1">
              <h1 className="categories-font">{oneSinglePost.title}</h1>
              <div className="div-box-slider-1">
                {oneSinglePost.content}
                <button onClick={() => setActivePost(oneSinglePost)}>Read more...</button>
              </div>
            </div>
          ))}
         
          <BlogModal
            post={activePost}
            closeHandler={() => setActivePost(null)}
          />
         
        </div>

        <div className="inside-wrap-div-3">
          <div>
            <Link to="/UserProfile">
              <p className="p-tag-profile">Your profile</p>
            </Link>
            <Link to="/UserProfile">
              <img className="profile" src={Profile} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
