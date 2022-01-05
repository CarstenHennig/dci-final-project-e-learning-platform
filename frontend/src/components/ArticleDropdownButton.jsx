/** Sub component for Article.jsx only for selecting a blog category */
/** Improving this component should contain a functionality to add an individual category to the list of categories */

import { Dropdown } from "react-bootstrap";


export default function DropdownBlogCategory(props) {
  const handleChange = (e) => props.setCategory(e.target.value);
  
  return (
    <Dropdown onSelect={props.setCategory}>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Select category
      </Dropdown.Toggle>
      <Dropdown.Menu category={props.category}>
        <Dropdown.Item eventKey={"Web Dev"}>Web Dev</Dropdown.Item>
        <Dropdown.Item eventKey={"Online marketing"}>Online Marketing</Dropdown.Item>
        <Dropdown.Item eventKey={"Cloud computing"}>Cloud Computing</Dropdown.Item>
        <Dropdown.Item eventKey={"Travel"}>Travel</Dropdown.Item>
         <Dropdown.Item eventKey={"Languages"}>Languages</Dropdown.Item>
        <Dropdown.Item eventKey={"Relationships"}>Relationships</Dropdown.Item> 
        <Dropdown.Item eventKey={"Music"}>Music</Dropdown.Item>
        <Dropdown.Item eventKey={"University"}>University</Dropdown.Item>
        <Dropdown.Item eventKey={"Pets"}>Pets</Dropdown.Item> 
        <Dropdown.Item eventKey={"Wellness"}>Wellness</Dropdown.Item>
        <Dropdown.Item eventKey={"Other topics"}>Other topics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
