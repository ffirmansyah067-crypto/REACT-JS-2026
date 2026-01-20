import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Theme: {theme}
    </button>
  );
}

export default Navbar;
