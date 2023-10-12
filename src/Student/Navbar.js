import React from "react"
import {BrowserRouter,  NavLink,  Route, Routes} from 'react-router-dom'
import Home from "./Home"
import Student from "./Student"
import Contact from "./Contact"

function Navbar(){
    return(
        <>
       <BrowserRouter>
        <div className="navbar">
       <NavLink to={"/"} className={"Home"}>Home</NavLink>
       <NavLink to={"/Student"} className={"Student"}>Student</NavLink>
       <NavLink to={"/Contact"} className={"Contact"}>ContactUs</NavLink>
       </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Student" element={<Student/>} />
            <Route path="/Contact" element={<Contact/>} />
        </Routes>
       
       </BrowserRouter>
        
        
        </>
    )
}

export default Navbar