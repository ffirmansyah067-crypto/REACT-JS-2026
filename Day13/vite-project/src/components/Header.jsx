import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useNotification } from "../context/NotificationContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { notifications, addNotification, clearNotifications } = useNotification();

  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h2>{language === "id" ? "Aplikasi Gue" : "My App"}</h2>
      <p>
        {language === "id" ? "Notifikasi" : "Notifications"}: {notifications}
      </p>
      <div style={{ marginTop: "10px" }}>
        <button onClick={toggleLanguage}>
          {language === "id" ? "Ganti ke English" : "Switch to Bahasa"}
        </button>
        <button onClick={addNotification} style={{ marginLeft: "10px" }}>
          {language === "id" ? "Tambah Notifikasi" : "Add Notification"}
        </button>
        <button onClick={clearNotifications} style={{ marginLeft: "10px" }}>
          {language === "id" ? "Hapus Notifikasi" : "Clear Notifications"}
        </button>
      </div>
    </header>
  );
};

export default Header;
