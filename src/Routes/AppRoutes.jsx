import React from "react";
import {Route, Routes, Navigate} from "react-router-dom"

import Main from "../page/Main";
import About from "../page/About";
import Award from "../page/Award";
import Project from "../page/Project";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/award" element={<Award/>}/>
            <Route path="/project" element={<Project/>}/>
        </Routes>
    )
}

export default AppRoutes;