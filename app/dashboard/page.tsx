import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { DashboardContent } from './components/DashboardContent'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar /> 
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}

