/** Frontend component to create a blog post
 * using React, Axios, own style sheet and Bootstrap
 */

import React, { useState } from "react";
import axios from "axios";
import "./Article.css";
import { FloatingLabel, Form } from "react-bootstrap";
import ToggleButtons from "./ToggleButton.jsx";

/** Function to write a blog post */

export default function WriteArticle() {
  const [headline, setHeadline] = useState(null);
  const [text, setText] = useState(null);

  /** Function HandleChange sending form data via axios to backend */
  const HandleChange = (e) => {
    console.log("Blog post send!");
    e.preventDefault();
    // axios.post("http://localhost:9000/postBlog", { headline, text }).then(
    //   (response) => {
    //     console.log(response.data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };

  // const formData = new FormData();

  // axios.post("http://localhost:9000/postBlog", formData);

  return (
    <div>
      <div className="headline">
        <h4>Publish your blog posts</h4>
      </div>

      <form onChange={HandleChange}>
        <>
          {/* Inserting blog headline */}
          <p className="labels">Headline</p>
          <FloatingLabel
            controlId="floatingTextarea"
            className="write-article-headline"
          >
            <Form.Control
              as="textarea"
              placeholder="Write your headline"
              name="headline"
              // style={{ height: "100px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>
          {/* Inserting blog text */}
          <p className="labels">Content</p>
          <FloatingLabel
            controlId="floatingTextarea2"
            className="write-article-content"
          >
            <Form.Control
              as="textarea"
              placeholder="Write your content"
              name="text"
              style={{ height: "500px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>
        </>

        {/** Texareas should be responsive for mobile use */}

        {/* Selecting blog category */}
        <div className="toggleButtons">
          <p>Select a category</p>
          <ToggleButtons />
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
