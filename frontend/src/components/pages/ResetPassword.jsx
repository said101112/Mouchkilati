"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../ui/Button"
import Input from "../ui/Input"

export default function ResetPassword() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      return setError("Passwords do not match")
    }

    if (password.length < 8) {
      return setError("Password must be at least 8 characters")
    }

    try {
      setError("")
      setLoading(true)

      // In a real app, you would call an API to reset the password
      // For demo purposes, we'll just simulate success
      setTimeout(() => {
        navigate("/login")
      }, 1000)
    } catch (err) {
      setError("Failed to reset password")
      console.error(err)
    } finally {
      setLoading(false)
    }
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

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-2">Create new password</h1>
        <p className="text-gray-600 text-sm mb-6">Your new password must be different from previous used passwords.</p>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Must be at least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            label="Confirm Password"
            id="confirm-password"
            type="password"
            placeholder="Both passwords must match"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer le code de vérification"}
          </Button>
        </form>
      </div>
    </main>
  )
}
