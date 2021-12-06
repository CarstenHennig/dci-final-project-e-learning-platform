/** Frontend component to post a video
 * using React, Axios, own style sheet, Bootstrap and FontAwesome
 */

/** Text areas should be responsive for mobile use */

import React, { useState } from "react";
import axios from "axios";
import "./Video.css";
import { FloatingLabel, Form } from "react-bootstrap";
import DropdownBlogCategory from "./ArticleDropdownButton.jsx";
import Popup from "./HelpPopUp.jsx";

/** Function to post a video */

export default function PostVideo() {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [valueCategory, setValueCategory] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  /** Function HandleChange sending form data via axios to backend */

  const HandleChange = (e) => {
    console.log(title, desc, videoUrl, valueCategory);
    e.preventDefault();

    axios
      // To paste video posting endpoint from Ferdinand
      .put("http://localhost:9000/galleries/createClip", {
        title,
        desc,
        videoUrl,
        valueCategory,

        // Hard coded email and posted by name to target the blogging user
        // Removed after improved to local stored UserID
        email: "zulu_nation@gmail.com",
        postedBy: "Shaka",
      })
      .then(
        (response) => {
          alert("Video sent");
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <div>
      <div className="headline">
        <h4>
          <i class="fa fa-video-camera" aria-hidden="true"></i> Post your video
        </h4>
        <button onClick={togglePopUp}>Get help</button>
        {isOpen ? <Popup handleClose={togglePopUp} /> : null}
      </div>

      <form>
        <>
          {/* Inserting blog headline */}

          <p className="labels">Headline</p>
          <FloatingLabel
            controlId="floatingTextarea"
            className="write-video-headline"
          >
            <Form.Control
              as="textarea"
              placeholder="Write headline of video"
              name="headline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              // style={{ height: "100px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>

          {/* Inserting description */}

          <p className="labels">Description</p>
          <FloatingLabel
            controlId="floatingTextarea2"
            className="write-video-description"
          >
            <Form.Control
              as="textarea"
              placeholder="Write your video description"
              name="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              style={{ height: "150px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>

          {/* Inserting video url */}

          <p className="labels">Video URL</p>
          <FloatingLabel
            controlId="floatingTextarea3"
            className="post-video-url"
          >
            <Form.Control
              as="textarea"
              placeholder="Paste your video URL"
              name="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              style={{ height: "150px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>
        </>

        {/* Selecting blog category */}

        <div className="dropdownButtons">
          <p>Select a category</p>
          <DropdownBlogCategory
            value={valueCategory}
            setValue={setValueCategory}
          />
        </div>

        {/* Button to publish */}

        <button
          type="submit"
          onClick={HandleChange}
          style={{ margin: "5px", padding: "5px" }}
        >
          Publish
        </button>
      </form>
    </div>
  );
}
