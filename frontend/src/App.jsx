import { Routes, Route } from "react-router-dom"
import "./App.css"

// Pages
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"

import ForgotPassword from "./components/pages/ForgotPassword"
import VerifyEmail from "./components/pages/VerifyEmail"
import ResetPassword from "./components/pages/ResetPassword"
import Dashboard from "./components/pages/Dashboard"
import Profile from "./components/pages/Profile"
import Signaler from "./components/pages/Signaler"
import AddInfo from "./components/pages/AddInfo"

// Context
import { AuthProvider } from "./components/context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/signaler" element={<Signaler />} />
        <Route path="/dashboard/add-info" element={<AddInfo />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
