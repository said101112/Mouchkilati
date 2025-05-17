"use client"

import { createContext, useState, useContext, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const user = localStorage.getItem("user")
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
    setLoading(false)
  }, [])

  // Mock login function
  const login = (email, password) => {
    // In a real app, you would validate credentials with an API
    const user = {
      id: "1",
      name: "El Hail Jaouad",
      email: email,
      username: "User_12132",
      location: "Mohammedia, Hay Ennassr IMM 12 No 99",
    }

    localStorage.setItem("user", JSON.stringify(user))
    setCurrentUser(user)
    return Promise.resolve(user)
  }

  // Mock logout function
  const logout = () => {
    localStorage.removeItem("user")
    setCurrentUser(null)
    return Promise.resolve()
  }

  // Mock register function
  const register = (name, email, password) => {
    // In a real app, you would send this data to an API
    const user = {
      id: "1",
      name: name,
      email: email,
      username: "User_" + Math.floor(Math.random() * 100000),
      location: "",
    }

    localStorage.setItem("user", JSON.stringify(user))
    setCurrentUser(user)
    return Promise.resolve(user)
  }

  const value = {
    currentUser,
    login,
    logout,
    register,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
