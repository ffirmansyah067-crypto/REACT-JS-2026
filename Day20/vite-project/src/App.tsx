// import { Button } from "@/components/ui/button"
// import { Alert } from "./components/ui/alert"
// import { Card } from "./components/ui/card"
// import { Input } from "./components/ui/input"
import ProfilePage from "./app/profile/Page"
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      {/* <Button>Click me</Button>
      <Input placeholder="Type something..." />
      <Card>
        <h2>Card Title</h2>
        <p>Card content goes here.</p>
      </Card>
      <Alert variant="destructive">Hello World</Alert> */}
      <ProfilePage />
      <ThemeSwitcher />
    </div>
  )
}

export default App