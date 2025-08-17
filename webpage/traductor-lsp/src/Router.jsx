import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";

function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/*Rutas aca */}
            {/*Rutas aca */}
            {/*Rutas aca */}
        </Routes>
    );
}

export default AppRoutes;