import { useContext } from "react";
import { UserContext } from "./InfoProvider";

import "./Home.css";

function Home() {
  const [isLog, setIsLog] = useContext(UserContext);
  
  return (
    <div>
      <div className="wellcom-div">
        <div>Welcome {isLog.user.firstName || "Guest"}</div>
      </div>
      <div className="wrap-div-home">
        <div className="insid-wrap-div-1">
          <h1>hello div num1</h1>
        </div>

        <div className="insid-wrap-div-2">
          <div className="Featured-content-slider"> <h1>Featured content slider</h1>
        </div>

          <div className="Featured-category-1">
            <h1>Featured category</h1>
            <div>
             
            </div>
          </div>

          <div>
            <h1>Featured category</h1>
            <div className="Featured-category-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nam aliquid sit consequatur ducimus tempore, error beatae perspiciatis, aspernatur ad iste eveniet voluptatem distinctio iusto quis tempora ex illo omnis.</div>
          </div>
          <div>
            <h1>
              Random content
            </h1>
            <div className="Random-content">
              <p>hello</p>
            </div>
          </div>
        </div>

        <div className="insid-wrap-div-3">
          <h1>hello div num3</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
