import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // proses submit form...
    navigate("/thank-you"); // redirect ke halaman terima kasih
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
