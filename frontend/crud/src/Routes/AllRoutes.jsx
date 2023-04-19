import React from 'react'
import SignupCard from '../pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

const AllRoutes = () => {
    return (
        <div>
            <Routes>

                <Route path="/" element={<SignupCard />} />
                <Route path="/login" element={<Login />} />
             
            </Routes>
        </div>
    )
}

export default AllRoutes