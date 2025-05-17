"use client"

import { Link, useNavigate } from "react-router-dom"
import Button from "../ui/Button"

export default function VerifyEmail() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/reset-password")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-500 to-green-500 flex items-center justify-center p-4">
      <Link
        to="/forgot-password"
        className="absolute top-4 left-4 text-white p-2 rounded-full bg-white/20 hover:bg-white/30"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 rounded-full p-2">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">Vérifiez votre Email</h1>
        <p className="text-gray-600 text-sm mb-6">
          Nous avons envoyé des instructions de récupération du mot de passe à votre adresse Email.
        </p>

        <Button onClick={handleClick} className="bg-green-500 hover:bg-green-600 text-white py-2 px-8 rounded-md">
          OK
        </Button>
      </div>
    </main>
  )
}
