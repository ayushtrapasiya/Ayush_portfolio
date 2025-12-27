import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Nevbar/Navbar'
import './App.css'
import Stars from './Components/Stars/Stars'
export default function App() {
  return (
    <>
    <Stars />
    <Navbar/>
    <Outlet/>
    </>
  )
}
