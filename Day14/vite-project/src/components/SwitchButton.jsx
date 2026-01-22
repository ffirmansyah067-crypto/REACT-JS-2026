import React from "react";
import useToggle from "../hooks/useToggle";

function SwitchButton() {
  const [isOn, toggleSwitch] = useToggle(false);

  return (
    <div>
      <label>
        <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
        {isOn ? "ON" : "OFF"}
      </label>
    </div>
  );
}

export default SwitchButton;
