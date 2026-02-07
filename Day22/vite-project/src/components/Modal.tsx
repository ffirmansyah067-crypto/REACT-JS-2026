import type { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose} // klik area luar untuk menutup
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
        onClick={(e) => e.stopPropagation()} // cegah close saat klik isi modal
      >
        {children}
        <button
          onClick={onClose}
          style={{ marginTop: "10px", display: "block", marginLeft: "auto" }}
        >
          Tutup
        </button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
