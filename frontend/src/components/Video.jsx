/** Frontend component to post a video
 * using React, Axios, own style sheet and Bootstrap
 */

/** Text areas should be responsive for mobile use */

import React, { useState } from "react";
import axios from "axios";
import "./Video.css";
import { FloatingLabel, Form } from "react-bootstrap";
import DropdownBlogCategory from "./ArticleDropdownButton.jsx";

/** Function to post a video */

export default function PostVideo() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [videourl, setVideourl] = useState(null);
  const [value, setValue] = useState();

  /** Function HandleChange sending form data via axios to backend */

  const HandleChange = (e) => {
    console.log(title, content, videourl, value);
    e.preventDefault();

    axios
      // To paste video posting endpoint from Ferdinand
      .put("http://localhost:9000/uploads", {
        title,
        content,
        videourl,

        // Hard coded email to target the blogging user
        // Removed after improved to local stored UserID
        email: "carsten.hennig@gmail.com",
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
        <h4>Post your video</h4>
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

          <p className="labels">Content</p>
          <FloatingLabel
            controlId="floatingTextarea2"
            className="write-video-description"
          >
            <Form.Control
              as="textarea"
              placeholder="Write your video description"
              name="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
              value={videourl}
              onChange={(e) => setVideourl(e.target.value)}
              style={{ height: "150px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>
        </>

        {/* Selecting blog category */}

        <div className="dropdownButtons">
          <p>Select a category</p>
          <DropdownBlogCategory value={value} setValue={setValue} />
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
