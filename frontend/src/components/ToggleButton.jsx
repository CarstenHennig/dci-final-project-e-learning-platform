/** Sub component for Article.jsx only for selecting a blog category */

import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState } from "react";

export default function ToggleButtons() {
  const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1}>
        Offer
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        Search
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3}>
        Misc
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={4}>
        Uncategorized
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

/** Improving this component should contain a functionality to add an individual category to the list of categories */
