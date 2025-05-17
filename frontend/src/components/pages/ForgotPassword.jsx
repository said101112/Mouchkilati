"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../ui/Button"
import Input from "../ui/Input"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setError("")
      setMessage("")
      setLoading(true)

      // In a real app, you would call an API to send a reset email
      // For demo purposes, we'll just simulate success
      setTimeout(() => {
        navigate("/verify-email")
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
      <Link to="/login" className="absolute top-4 left-4 text-white p-2 rounded-full bg-white/20 hover:bg-white/30">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-2">Mot de passe oublié ?</h1>
        <p className="text-gray-600 text-sm mb-6">
          S'il n'y a pas de quoi s'inquiéter, nous vous enverrons un message pour vous aider à réinitialiser votre mot
          de passe.
        </p>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Adresse Email"
            id="email"
            type="email"
            placeholder="Entrez votre adresse Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
