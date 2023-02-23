import { Outlet } from "react-router-dom"
import { Sidebar } from ".."
const AdminLayout = () => {
  console.log("login qildik")
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default AdminLayout