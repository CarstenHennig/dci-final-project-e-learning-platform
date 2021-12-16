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
        <Dropdown.Item eventKey={1}>Web Dev</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Online Marketing</Dropdown.Item>
        <Dropdown.Item eventKey={3}>Cloud Computing</Dropdown.Item>
        <Dropdown.Item eventKey={4}>Other topics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
