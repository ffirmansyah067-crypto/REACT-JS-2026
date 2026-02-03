// app/profile/page.tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"

export default function ProfilePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-400px shadow-md">
        <CardHeader>
          <CardTitle>Profil Pengguna</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Nama Lengkap" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Nomor Telepon" type="tel" />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Simpan</Button>
          <Alert variant="destructive">Hello World</Alert>
        </CardFooter>
      </Card>
    </div>
  )
}
