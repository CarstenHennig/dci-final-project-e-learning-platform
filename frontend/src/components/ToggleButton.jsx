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

// render(<ToggleButton />);

// export default function ToggleButton() {
//   const [checked, setChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("1");

//   const radios = [
//     { name: "Active", value: "1" },
//     { name: "Radio", value: "2" },
//     { name: "Radio", value: "3" },
//   ];

//   return (
//     <>
//       <ButtonGroup className="mb-2">
//         <ToggleButton
//           id="toggle-check"
//           type="checkbox"
//           variant="secondary"
//           checked={checked}
//           value="1"
//           onChange={(e) => setChecked(e.currentTarget.checked)}
//         >
//           Checked
//         </ToggleButton>
//       </ButtonGroup>
//       <br />
//       <ButtonGroup className="mb-2">
//         {radios.map((radio, idx) => (
//           <ToggleButton
//             key={idx}
//             id={`radio-${idx}`}
//             type="radio"
//             variant="secondary"
//             name="radio"
//             value={radio.value}
//             checked={radioValue === radio.value}
//             onChange={(e) => setRadioValue(e.currentTarget.value)}
//           >
//             {radio.name}
//           </ToggleButton>
//         ))}
//       </ButtonGroup>
//       <br />
//       <ToggleButton
//         className="mb-2"
//         id="toggle-check"
//         type="checkbox"
//         variant="outline-primary"
//         checked={checked}
//         value="1"
//         onChange={(e) => setChecked(e.currentTarget.checked)}
//       >
//         Checked
//       </ToggleButton>
//       <br />
//       <ButtonGroup>
//         {radios.map((radio, idx) => (
//           <ToggleButton
//             key={idx}
//             id={`radio-${idx}`}
//             type="radio"
//             variant={idx % 2 ? "outline-success" : "outline-danger"}
//             name="radio"
//             value={radio.value}
//             checked={radioValue === radio.value}
//             onChange={(e) => setRadioValue(e.currentTarget.value)}
//           >
//             {radio.name}
//           </ToggleButton>
//         ))}
//       </ButtonGroup>
//     </>
//   );
// }
