import { useState } from "react";
import type { JSX } from "react/jsx-runtime";

interface ToggleProps {
  children: (state: { on: boolean; toggle: () => void }) => JSX.Element;
}

function Toggle({ children }: ToggleProps) {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);

  return children({ on, toggle });
}

export default Toggle;
