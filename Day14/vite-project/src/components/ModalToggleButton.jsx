import React from "react";
import useToggle from "../hooks/useToggle";

function ModalToggleButton() {
  const [isOpen, toggleModal] = useToggle(false);

  return (
    <div>
      <button onClick={toggleModal}>
        {isOpen ? "Hide Modal" : "Show Modal"}
      </button>
      {isOpen && <div className="modal">Ini Modal!</div>}
    </div>
  );
}

export default ModalToggleButton;
