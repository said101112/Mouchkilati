"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import DashboardLayout from "../layout/DashboardLayout"
import Button from "../ui/Button"

export default function Profile() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!currentUser) {
      navigate("/login")
    } else {
      setLoading(false)
    }
  }, [currentUser, navigate])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Profile</h1>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 flex items-start justify-between">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width={80}
                  height={80}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">{currentUser?.name || "El Hail Jaouad"}</h2>
                <p className="text-gray-500">Username: {currentUser?.username || "User_12132"}</p>
                <p className="text-gray-500">
                  Localisation: {currentUser?.location || "Mohammedia, Hay Ennassr IMM 12 No 99"}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Edit
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Personal Information</h2>
              <Button variant="outline" size="sm" className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Edit
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Nom</h3>
                <p className="mt-1">El Hail</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Prénom</h3>
                <p className="mt-1">Jaouad</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email address</h3>
                <p className="mt-1">{currentUser?.email || "Musharraf"}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <p className="mt-1">+212 690551181</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">CIN</h3>
                <p className="mt-1">T4434243</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Sexe</h3>
                <p className="mt-1">Male</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Age</h3>
                <p className="mt-1">21</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Localisation</h3>
                <p className="mt-1">Mohammedia Hay Ennassr IMM 123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
