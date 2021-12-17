/** Frontend component to create a blog post
 * using React, Axios, own style sheet, Bootstrap and FontAwesome
 */

import React, { useState, useContext } from "react";
import axios from "axios";
import "./Article.css";
import { FloatingLabel, Form } from "react-bootstrap";
import DropdownBlogCategory from "./ArticleDropdownButton.jsx";
import UploadImageToArticle from "./UploadImageToArticle.jsx";
import Popup from "./HelpPopUp.jsx";
import { UserContext } from "./InfoProvider";

/** Function to write a blog post */

export default function WriteArticle() {
   const [isLog, setIsLog] = useContext(UserContext);
  const [title, setTitle] = useState(null);
  const [summary, setSummary] = useState(null);
  const [content, setContent] = useState(null);
   const [author,setAuthor] = useState(isLog.user.firstName  +" "+  isLog.user.lastName);
  const [email, setEmail] = useState(isLog.user.email);
  const [value, setValue] = useState();
  const [isOpen, setIsOpen] = useState(false);
 

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  /** Function HandleChange sending form data via axios to backend */
  
  const HandleChange = (e) => {
    console.log(title, content, value);
    e.preventDefault();
    axios
      .put("http://localhost:9000/posts/writePost", {
        title,
        summary,
        content,
        author: author,/* (set to logged in user firstName + lastName) */    
        email: email, /* (set to current logged in user email)  */ 
      })
      .then(
        (response) => {
          alert("Blog post saved");
        },
        (error) => {
          alert(error);
        }
      );
  };
console.log("HAHAHA,",author)
  return (
    <div>
      <div className="headline">
        <h4>
          <i class="fa fa-pencil-square" aria-hidden="true"></i> Publish your
          blog posts
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
            className="write-article-headline"
          >
            <Form.Control
              as="textarea"
              placeholder="Write your headline"
              maxlength="160"
              name="headline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              // style={{ height: "100px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>

          {/* Inserting summary */}

          <p className="labels">Summary</p>
          <FloatingLabel
            controlId="floatingTextarea"
            className="write-article-summary"
          >
            <Form.Control
              as="textarea"
              placeholder="Write your summary"
              maxlength="320"
              name="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ height: "500px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>
        </>

        {/** Text areas should be responsive for mobile use */}

        {/* Inserting component to upload a picture */}
        <UploadImageToArticle />

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
