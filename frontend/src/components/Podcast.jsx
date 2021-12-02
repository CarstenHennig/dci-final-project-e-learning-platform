/** Frontend component to post a podcast
 * using React, Axios, own style sheet, Bootstrap and FontAwesome
 */

/** Text areas should be responsive for mobile use */

import React, { useState } from "react";
import axios from "axios";
import "./Podcast.css";
import { FloatingLabel, Form } from "react-bootstrap";
import DropdownBlogCategory from "./ArticleDropdownButton.jsx";
import Popup from "./HelpPopUp.jsx";

/** Function to post a podcast */

export default function PostPodcast() {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [podcastUrl, setPodcastUrl] = useState(null);
  const [valueCategory, setValueCategory] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  /** Function HandleChange sending form data via axios to backend */

  const HandleChange = (e) => {
    console.log(title, desc, podcastUrl, valueCategory);
    e.preventDefault();

    axios
      // To paste podcast posting endpoint from Ferdinand
      .put("http://localhost:9000/galleries/createClip", {
        title,
        desc,
        podcastUrl,
        valueCategory,

        // Hard coded email and posted by name to target the blogging user
        // Removed after improved to local stored UserID
        email: "zulu_nation@gmail.com",
        postedBy: "Shaka",
      })
      .then(
        (response) => {
          alert("Podcast sent");
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
          <i class="fa fa-podcast" aria-hidden="true"></i> Post your podcast
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
            className="write-podcast-headline"
          >
            <Form.Control
              as="textarea"
              placeholder="Write headline of podcast"
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
            className="write-podcast-description"
          >
            <Form.Control
              as="textarea"
              placeholder="Write your podcast description"
              name="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              style={{ height: "150px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>

          {/* Inserting video url */}

          <p className="labels">Podcast URL</p>
          <FloatingLabel
            controlId="floatingTextarea3"
            className="post-podcast-url"
          >
            <Form.Control
              as="textarea"
              placeholder="Paste your podcast URL"
              name="text"
              value={podcastUrl}
              onChange={(e) => setPodcastUrl(e.target.value)}
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
