import { NavLink } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-logo">
                <NavLink to="/">OurStudents</NavLink>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="students">Students</NavLink>
                <NavLink to="add-student">Add Student</NavLink>
            </nav>
        </div>
        
    )
}