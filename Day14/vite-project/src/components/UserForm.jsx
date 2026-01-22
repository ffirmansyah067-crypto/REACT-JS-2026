import React from "react";
import useForm from "../hooks/useForm";

function UserForm() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
  });

  return (
    <div>
      <h2>Form Input</h2>
      <form>
        <div>
          <label>
            Nama:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>

      <h3>Data Real-Time</h3>
      <p>Nama: {values.name}</p>
      <p>Email: {values.email}</p>
    </div>
  );
}

export default UserForm;
