// import { useState } from "react";
import EventHandling from "./components/EventHandling";
import SyntheticEvent from "./components/SyntheticEvent";
import ControlledComponent from "./components/ControlledComponent";
import UncontrolledNameForm from "./components/UncontrolledComponent";
import ValidationForm from "./components/ValidationForm";

export default function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Uji Coba</h1>
      <EventHandling />
      <SyntheticEvent />
      <ControlledComponent />
      <UncontrolledNameForm />
      <ValidationForm />
    </div>
  );
}