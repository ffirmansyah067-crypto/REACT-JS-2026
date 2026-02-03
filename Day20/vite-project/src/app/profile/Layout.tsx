// app/layout.tsx (Next.js)
import "./globals.css"
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="p-4 flex justify-end">
          <ThemeSwitcher />
        </div>
        {children}
      </body>
    </html>
  )
}
