import React from "react"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import Userindex from "../Pages/userIndex";
import Accueil from "../Pages/Home/Home";
import Header from "../Composants/Header";


function RoutesPath() {
    return(
        <HashRouter>
                  <Header />
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/:userswitch/:id" element={<Userindex />} />
                </Routes>
               
        </HashRouter>
    );
}

export default RoutesPath;