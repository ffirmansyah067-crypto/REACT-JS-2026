import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // update state supaya render fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // bisa log error ke service monitoring (Sentry, dll.)
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red" }}>
          <h2>Terjadi kesalahan di area ini 💥</h2>
          <p>Aplikasi tetap berjalan, tapi bagian ini gagal dimuat.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
