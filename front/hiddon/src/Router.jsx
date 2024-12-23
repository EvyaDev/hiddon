import React from 'react'
import { Routes, Route } from "react-router"
import Login from './Login'
import Home from './Home'

export default function Router() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}
