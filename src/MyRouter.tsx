import React from "react";
import {Routes, Route} from 'react-router-dom'
import { AddStudent } from "./pages/AddStudent";
import { Dashboard } from "./pages/Dashboard";
import { Layout } from "./pages/Layout";

export const MyRoter:React.FC = () => {
    return <>
        <Routes>
            <Route path='' element={<Layout />}>
                <Route path='/' element={<Dashboard />} />
                <Route path='/add' element= {<AddStudent />} />
            </Route>
        </Routes>
    </>
}