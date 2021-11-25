/** Sub component for Article.jsx only for selecting a blog category */
/** Improving this component should contain a functionality to add an individual category to the list of categories */

import { Dropdown } from "react-bootstrap";
import { useState } from "react";

export default function DropdownBlogCategory() {
  const [value, setValue] = useState([1, 3]);

  const handleChange = (val) => setValue(val);

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        value={value}
        onChange={handleChange}
      >
        Select category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item value={1}>Web Dev</Dropdown.Item>
        <Dropdown.Item value={2}>Online Marketing</Dropdown.Item>
        <Dropdown.Item value={3}>Cloud Computing</Dropdown.Item>
        <Dropdown.Item value={4}>Other topics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    // Remaining to compare: old code for Toggle Buttons
    // <ToggleButtonGroup
    //   type="checkbox"
    //   value={value}
    //   onChange={handleChange}
    //   style={{
    //     display: "flex",
    //     flexwrap: "wrap",
    //     width: "75%",
    //     margin: "6px",
    //   }}
    // >
    //   <ToggleButton id="tbg-btn-1" value={1}>
    //     Offer
    //   </ToggleButton>
    //   <ToggleButton id="tbg-btn-2" value={2}>
    //     Search
    //   </ToggleButton>
    //   <ToggleButton id="tbg-btn-3" value={3}>
    //     Misc
    //   </ToggleButton>
    //   <ToggleButton id="tbg-btn-3" value={4}>
    //     Uncategorized
    //   </ToggleButton>
    // </ToggleButtonGroup>
  );
}
