import { NavLink } from "react-router-dom"
export default function ErrorPage(){
    return (
        <>
            <h2>404: no page found!</h2>
            <p>new page is coming soon.</p>
            <NavLink to="/">Back to home</NavLink>
        </>
    )
}