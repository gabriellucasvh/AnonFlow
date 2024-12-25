import { Bell, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SheetDemo } from './Sheet'

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <SheetDemo />
      </div>
    </header>
  )
}

