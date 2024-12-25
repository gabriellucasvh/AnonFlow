import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { LayoutDashboard, MessageSquarePlus, Users, BarChart3, Settings, HelpCircle, LogOut, Menu } from 'lucide-react'

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Enviar Feedback", icon: MessageSquarePlus, href: "/dashboard/feedback" },
    { name: "Meu Time", icon: Users, href: "/dashboard/team" },
    { name: "Estatísticas/Relatórios", icon: BarChart3, href: "/dashboard/stats" },
    { name: "Configurações", icon: Settings, href: "/dashboard/settings" },
    { name: "Suporte", icon: HelpCircle, href: "/dashboard/support" },
  ]

export function SheetDemo() {
    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon"><Menu/></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Logo</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col w-full gap-4 py-4 items-center justify-center ">
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.href} className="flex items-center p-2 border rounded-lg text-sm w-full ">
                            <item.icon className="mr-3 h-4 w-4" />{item.name}</Link>
                    ))}
                    </div>
                <SheetFooter>
                    <SheetClose asChild>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
