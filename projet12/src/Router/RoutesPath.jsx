import React from "react"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"




function RoutesPath() {
    return(
        <HashRouter>
               
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                </Routes>
               
        </HashRouter>
    );
}

export default RoutesPath;