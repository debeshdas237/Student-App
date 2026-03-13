import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
export default function MainLayout () {
    useEffect(()=>{
        localStorage.clear();
    },[])
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
        
    )
}