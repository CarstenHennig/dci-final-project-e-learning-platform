import React from "react";
import axios from "axios";
import {
  FloatingLabel,
  Form,
  Dropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import "./Article.css";

export default function WriteArticle() {
  const HandleChange = (e) => {
    e.preventDefault();
  };

  const formData = new FormData();

  axios.post("http://localhost:9000/postBlog", formData);

  return (
    <div>
      <form onChange={HandleChange}>
        <>
          {/* Inserting blog headline */}
          <FloatingLabel
            controlId="floatingTextarea"
            label="Headline"
            className="write-article-headline"
          >
            <Form.Control as="textarea" placeholder="Write your headline" />
          </FloatingLabel>

          {/* Inserting blog text */}
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Content"
            className="write-article-content"
          >
            <Form.Control
              as="textarea"
              placeholder="Write your content"
              style={{ height: "500px" }}
            />
          </FloatingLabel>
        </>

        <br />

        {/* Selecting blog category */}
        <Dropdown as={ButtonGroup}>
          <Button variant="warning">Select category</Button>
          <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Offers</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Searches</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Misc</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <br />

        {/* Button to publish */}
        <button type="submit" onChange={HandleChange}>
          Publish
        </button>
      </form>
    </div>
  );
}
