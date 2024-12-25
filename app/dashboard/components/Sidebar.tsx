import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, MessageSquarePlus, Users, BarChart3, Settings, HelpCircle, LogOut } from 'lucide-react'
import Link from "next/link"

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Enviar Feedback", icon: MessageSquarePlus, href: "/dashboard/feedback" },
  { name: "Meu Time", icon: Users, href: "/dashboard/team" },
  { name: "Estatísticas/Relatórios", icon: BarChart3, href: "/dashboard/stats" },
  { name: "Configurações", icon: Settings, href: "/dashboard/settings" },
  { name: "Suporte", icon: HelpCircle, href: "/dashboard/support" },
]

export function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col h-full w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold">Logo</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} passHref>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    "hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start text-left font-normal">
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Button>
      </div>
    </div>
  )
}

