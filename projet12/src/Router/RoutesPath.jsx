import React from "react"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import Userindex from "../Pages/userIndex";
import Accueil from "../Pages/Home/Home";
import Header from "../Composants/Header";
import SideBar from "../Composants/SideBar";

function RoutesPath() {
    return(
        <HashRouter>
                  <Header />
                  <SideBar />
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/:userswitch/:id" element={<Userindex />} />
                    <Route path="/:userswitch/" element={<Accueil />} />

                </Routes>
               
        </HashRouter>
    );
}

export default RoutesPath;