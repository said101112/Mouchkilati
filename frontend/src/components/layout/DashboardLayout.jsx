"use client"

import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function DashboardLayout({ children }) {
  const { currentUser, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r">
        <div className="p-4 border-b">
          <Link to="/dashboard" className="flex items-center">
            <div className="text-green-500 mr-2">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L25 5L20 10L15 5L20 0Z" fill="#E74C3C" />
                <path d="M30 10L35 15L30 20L25 15L30 10Z" fill="#E74C3C" />
                <path d="M10 10L15 15L10 20L5 15L10 10Z" fill="#E74C3C" />
                <path d="M20 20L25 25L20 30L15 25L20 20Z" fill="#E74C3C" />
                <circle cx="20" cy="15" r="3" fill="#27AE60" />
                <circle cx="15" cy="20" r="3" fill="#27AE60" />
                <circle cx="25" cy="20" r="3" fill="#27AE60" />
                <circle cx="20" cy="25" r="3" fill="#27AE60" />
              </svg>
            </div>
            <span className="text-green-500 text-xl font-bold">Mouchkilati</span>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            to="/dashboard"
            className={`flex items-center p-2 rounded-md ${
              location.pathname === "/dashboard"
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-green-50 hover:text-green-500"
            }`}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <span>Dashboard Overview</span>
          </Link>

          <Link
            to="/dashboard/signaler"
            className={`flex items-center p-2 rounded-md ${
              location.pathname === "/dashboard/signaler"
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-green-50 hover:text-green-500"
            }`}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Signaler</span>
          </Link>

          <Link
            to="/dashboard/notification"
            className={`flex items-center p-2 rounded-md ${
              location.pathname === "/dashboard/notification"
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-green-50 hover:text-green-500"
            }`}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span>Notification</span>
          </Link>

          <Link
            to="/dashboard/balance"
            className={`flex items-center p-2 rounded-md ${
              location.pathname === "/dashboard/balance"
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-green-50 hover:text-green-500"
            }`}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span>Balance</span>
          </Link>

          <Link
            to="/dashboard/profile"
            className={`flex items-center p-2 rounded-md ${
              location.pathname === "/dashboard/profile"
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-green-50 hover:text-green-500"
            }`}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Profile</span>
          </Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50">
        <header className="bg-white p-4 border-b flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <button className="text-gray-500">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {currentUser?.name?.charAt(0) || "M"}
              </div>
              <span className="ml-2 font-medium">{currentUser?.name?.split(" ")[0] || "Musharraf"}</span>
            </div>
            <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-red-500">
              Logout
            </button>
          </div>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
