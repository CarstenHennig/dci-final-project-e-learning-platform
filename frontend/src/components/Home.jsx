import {useContext} from "react";
import {UserContext} from "./InfoProvider";
import "./Home.css";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import BlogModal from "./BlogModal.jsx";


function Home() {
    const [activePost, setActivePost] = useState(null);
    const [isLog, setIsLog] = useContext(UserContext);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch("http://localhost:9000/posts/allPosts").then((response) => response.json()).then((data) => {
            setPosts(data);

        });
    }, []);


    return (
        <div>
            <div className="welcome-div">
                <div>Welcome {
                    isLog.user.firstName || "Guest"
                }</div>
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
                    {
                    posts.map((oneSinglePost) => (
                        <div className="wrap-div-box-1">
                            <div className="headerWrapper">
                                 <h3 className="categories-font">By {
                                oneSinglePost.author
                            }</h3>
                            <h3 className="categories-font">in {
                                oneSinglePost.category
                            }</h3>
                            </div>
                            <div className="div-box-slider-1">
                                <img style={
                                        {
                                            border: "1px solid #ddd",
                                            borderRadius: "4px",
                                            padding: "5px",
                                            width: "150px"
                                        }
                                    }
                                    src={
                                        oneSinglePost.imageURL
                                    }/>
                                <div className="articleIntro">
                                    <h6 style={
                                        {color: "green"}
                                    }>
                                        {
                                        oneSinglePost.title
                                    }</h6>
                                    {
                                    oneSinglePost ? <div dangerouslySetInnerHTML={
                                        {__html: oneSinglePost.summary}
                                    }/> : null
                                }
                                    <button onClick={
                                        () => {
                                            setActivePost(oneSinglePost)
                                        }
                                    }>Read more...</button>
                                </div>


                            </div>

                        </div>
                    ))
                }

                    <BlogModal post={activePost}
                        closeHandler={
                            () => setActivePost(null)
                        }/>

                </div>

                <div className="inside-wrap-div-3">
                    <div>
                        <Link to="/UserProfile">
                            <p className="p-tag-profile">Your profile</p>
                        </Link>
                        <Link to="/UserProfile">
                            <img className="profile"
                                src={
                                    isLog.user.avatar
                                }/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
