import { useContext } from "react";
import { UserContext } from "./InfoProvider";
import Profile from "../images/profile-img.png";

import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [isLog, setIsLog] = useContext(UserContext);

  return (
    <div>
      <div className="wellcom-div">
        <div>Welcome {isLog.user.firstName || "Guest"}</div>
      </div>
      <div className="wrap-div-home">
        <div className="inside-wrap-div-1">
          <div className="wrap-Main-Categories">
            <div>
              <h3 className="font-size-home">Main Categories</h3>
            </div>
            <div className="wrap-list-of-main-categories">
              <ul className="list-of-main-categories">
                <li>Nature</li>
                <li>Pets</li>
                <li>Relationships</li>
                <li>University</li>
                <li>Languages</li>
                <li>Cooking</li>
                <li>Yoga</li>
                <li>Music</li>   
                <li>Travel</li>
                <li>TV</li>
                <li>Books</li>
                <li>Geographical</li>
                <li>History</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3 className="font-size-home-2">Top Articles</h3>
            </div>
            <div className="wrap-list-of-main-categories-2">
              <ul className="list-of-main-categories">
                <li>Nature</li>
                <li>Pets</li>
                <li>Relationships</li>
                <li>University</li>
                <li>Languages</li>
                <li>Travel</li>
                <li>Music</li>
                <li>TV</li>
                <li>Books</li>
                <li>Geographical</li>
                <li>History</li>
                <li>
                  <a href="#">Yoga</a>
                </li>
                <li>Music</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="inside-wrap-div-2">
          <div className="wrap-div-box-1">
            <h1 className="categories-font">Featured content slider</h1>
            <div className="div-box-slider-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              nihil dolore enim dolor error beatae corrupti earum non similique
              delectus tempore minus quia, voluptas soluta illo voluptatem
              eveniet maiores totam?
            </div>
          </div>

          <div className="wrap-div-box-1">
            <h1 className="categories-font">Featured category</h1>
            <div className="div-box-slider-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              nihil dolore enim dolor error beatae corrupti earum non similique
              delectus tempore minus quia, voluptas soluta illo voluptatem
              eveniet maiores totam?
            </div>
          </div>

          <div className="wrap-div-box-1">
            <h1 className="categories-font">Featured category</h1>
            <div className="div-box-slider-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              nihil dolore enim dolor error beatae corrupti earum non similique
              delectus tempore minus quia, voluptas soluta illo voluptatem
              eveniet maiores totam?
            </div>
          </div>

          <div className="wrap-div-box-1">
            <h1 className="categories-font">Random content</h1>
            <div className="div-box-slider-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              nihil dolore enim dolor error beatae corrupti earum non similique
              delectus tempore minus quia, voluptas soluta illo voluptatem
              eveniet maiores totam?
            </div>
          </div>
        </div>

        <div className="inside-wrap-div-3">
          <div>
            
            <Link to="/UserProfile">
              <p className="p-tag-profile">Your profile</p>
            </Link>
            <Link to="/UserProfile">
              <img className="profiile" src={Profile} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
