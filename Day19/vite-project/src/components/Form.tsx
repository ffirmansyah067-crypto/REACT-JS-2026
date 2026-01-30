import React, { useState } from "react";

interface FormState {
  username: string;
  age: number;
  agree: boolean;
}

interface FormProps {
  onSubmit: (data: FormState) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormState>({
    username: "",
    age: 0,
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={formData.age}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        Agree to terms
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
