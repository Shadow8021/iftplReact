import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
export default function AdminLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
