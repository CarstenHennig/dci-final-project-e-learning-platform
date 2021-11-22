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
      <div className="headline">
        <h4>Publish your blog posts</h4>
      </div>

      <form onChange={HandleChange}>
        <>
          {/* Inserting blog headline */}
          <FloatingLabel
            controlId="floatingTextarea"
            label="Headline"
            className="write-article-headline"
          >
            <Form.Control
              as="textarea"
              placeholder="Write your headline"
              style={{ height: "100px", margin: "5px", padding: "5px" }}
            />
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
              style={{ height: "500px", margin: "5px", padding: "5px" }}
            />
          </FloatingLabel>
        </>

        <br />

        {/* Selecting blog category */}
        <Dropdown as={ButtonGroup}>
          <Button variant="warning" style={{ margin: "5px", padding: "5px" }}>
            Select category
          </Button>
          <Dropdown.Toggle
            split
            variant="warning"
            id="dropdown-split-basic"
            style={{ margin: "5px", padding: "5px" }}
          />
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className="blog-category-offers">
              Offers
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="blog-category-search">
              Search
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="blog-category-misc">
              Misc
            </Dropdown.Item>
            <Dropdown.Item href="#/action-4" className="blog-category-no">
              Uncategorized
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <br />

        {/* Button to publish */}
        <button
          type="submit"
          onChange={HandleChange}
          style={{ margin: "5px", padding: "5px" }}
        >
          Publish
        </button>
      </form>
    </div>
  );
}
