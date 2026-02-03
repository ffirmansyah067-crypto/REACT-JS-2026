// src/components/ThemeSwitcher.tsx
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </Button>
  )
}
