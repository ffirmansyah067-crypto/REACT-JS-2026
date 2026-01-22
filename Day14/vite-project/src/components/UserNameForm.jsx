import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function UseNameForm() {
    const [name, setName] = useLocalStorage("username", "");

    return (
        <div>
            <h2>Haloo, {name || "Guest"}!</h2>
            <input 
              type="text"
              placeholder="Masukkan Nama..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
        </div>
    );
}

export default UseNameForm;