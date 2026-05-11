import { BrowserRouter } from "react-router-dom"
import { SidebarNav } from "@/polymet/components/sidebar-nav"

export default function SidebarNavRender() {
  return (
    <BrowserRouter>
      <div className="bg-[#0a0e27] min-h-screen">
        <SidebarNav />
        <div className="pl-[160px] p-12 space-y-8">
          {["overview", "dispatch", "experiments", "who"].map((id) => (
            <div key={id} id={id} className="h-64 border border-white/10 rounded p-6">
              <p className="text-white/40 font-mono text-sm">#{id}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserRouter>
  )
}
