import React from "react";

function UserDashboard() {
    const isLoggedIn = true;
    const newMessage = 5;

    return (
        <div>
            <h2>Ini Ternary Operator dan && Operator</h2>
            <p>
                {/** Ternary Operator */}
                {isLoggedIn ? "Sugeng Rawuh!" : "Mangga Login Dulu."}
            </p>

            {/** && Operator */}
            <p>
                {newMessage > 0 && `Kowe nduwe ${newMessage} pesen anyar.`}
            </p>
        </div>
    );
}

export default UserDashboard;