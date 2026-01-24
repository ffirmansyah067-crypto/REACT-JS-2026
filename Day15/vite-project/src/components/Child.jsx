import React from "react";

function Child({ text, onClick }) {
    console.log("Child Udah Kerender Cuy");
    return (
        <div>
            <h3>Child Components Berkata: {text}</h3>
            <button onClick={onClick}>Click Child Button</button>
        </div>
    );
}

export default React.memo(Child);
