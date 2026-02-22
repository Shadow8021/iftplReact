import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Components/Navbar"

export default function AdminLayout() {
    const location = useLocation()
    const isLoginPage = location.pathname === '/admin/login'

    return (
        <div className="min-h-screen">
            {!isLoginPage && <Navbar />}
            <Outlet />
        </div>
    )
}
