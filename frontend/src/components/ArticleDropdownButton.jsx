/** Sub component for Article.jsx only for selecting a blog category */
/** Improving this component should contain a functionality to add an individual category to the list of categories */

import { Dropdown } from "react-bootstrap";
import { useState } from "react";

export default function DropdownBlogCategory(props) {
  const handleChange = (e) => props.setCategory(e.target.value);
  
  return (
    <Dropdown onSelect={props.setCategory}>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Select category
      </Dropdown.Toggle>
      <Dropdown.Menu category={props.category}>
        <Dropdown.Item eventKey={"web dev"}>Web Dev</Dropdown.Item>
        <Dropdown.Item eventKey={"online marketing"}>Online Marketing</Dropdown.Item>
        <Dropdown.Item eventKey={"cloud computing"}>Cloud Computing</Dropdown.Item>
        <Dropdown.Item eventKey={"travel"}>Travel</Dropdown.Item>
         <Dropdown.Item eventKey={"languages"}>Languages</Dropdown.Item>
        <Dropdown.Item eventKey={"relationships"}>Relationships</Dropdown.Item> 
        <Dropdown.Item eventKey={"music"}>Music</Dropdown.Item>
        <Dropdown.Item eventKey={"university"}>University</Dropdown.Item>
        <Dropdown.Item eventKey={"pets"}>Pets</Dropdown.Item> 
        <Dropdown.Item eventKey={"wellness"}>Wellness</Dropdown.Item>
        <Dropdown.Item eventKey={"other_topics"}>Other topics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
