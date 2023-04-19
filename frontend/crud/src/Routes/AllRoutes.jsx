import React from 'react'
import SignupCard from '../pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import { Add } from '../pages/Add'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/signup" element={<SignupCard />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </div>
    )
}

export default AllRoutes