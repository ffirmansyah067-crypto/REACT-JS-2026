import { useState } from "react";
import Modal from "./components/Modal";
import DomAccessExample from "./DomAccessExample";
import UserProfile from "./components/UserProfile";
import withLoadingAndLogging from "./components/withLoadingAndLogging";
import MouseTracker from "./components/MouseTracker";
import Toggle from "./components/Toggle";

const EnhancedUserProfile = withLoadingAndLogging(UserProfile);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Demo React Portal Modal</h2>
      <button onClick={() => setIsOpen(true)}>Buka Modal</button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3 style={{ color: "black" }}>Halo Kak!</h3>
          <p style={{ color: "green" }}>See You On Top!</p>
        </Modal>
      )}

      <DomAccessExample />

      <h2>Demo Custom HOC</h2>
      <button onClick={() => setLoading(!loading)}>
        {loading ? "Stop Loading" : "Start Loading"}
      </button>
      <EnhancedUserProfile isLoading={loading} name="Firmansyah" age={25} />

      <h2>Demo Render Props</h2>

      {/* Implementasi 1: MouseTracker */}
      <MouseTracker>
        {({ x, y }) => (
          <p>
            Posisi mouse: ({x}, {y})
          </p>
        )}
      </MouseTracker>

      {/* Implementasi 2: Toggle */}
      <Toggle>
        {({ on, toggle }) => (
          <div style={{ marginTop: "20px" }}>
            <button onClick={toggle}>
              {on ? "Matikan Lampu" : "Nyalakan Lampu"}
            </button>
            <p>Status: {on ? "Lampu Menyala 💡" : "Lampu Mati 🌑"}</p>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default App;
