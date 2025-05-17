"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Button from "../ui/Button"
import ph from '../images/1589a11d-2795-4694-870a-e00f039c23c8.jpeg'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(email, password)
      navigate("/dashboard")
    } catch (err) {
      setError("Adresse email ou mot de passe incorrect")
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen">
      {/* Partie gauche */}
      <div className="w-1/2 bg-gray-100 p-8 flex flex-col">
        <div className="mb-8">
          <Link to="/" className="flex items-center">
            <div className="text-green-600 mr-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <span className="text-green-600 text-xl font-bold">Mouchkilati</span>
          </Link>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Se connecter</h1>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                  Adresse Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`block w-full px-4 py-3 rounded-md border shadow-sm focus:outline-none
                    ${
                      error
                        ? "border-red-400 placeholder-red-400 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 placeholder-gray-400 focus:ring-green-600 focus:border-green-600"
                    }
                  `}
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-800 mb-1">
                  Mot de Passe
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`block w-full px-4 py-3 rounded-md border shadow-sm focus:outline-none
                      ${
                        error
                          ? "border-red-400 placeholder-red-400 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 placeholder-gray-400 focus:ring-green-600 focus:border-green-600"
                      }
                    `}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 012.916-4.546M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm font-semibold text-red-600 hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>

              {/* Bouton submit */}
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md shadow">
                {loading ? "Connexion..." : "Log In"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Partie droite image */}
      <div className="w-1/2 bg-white p-8 flex items-center justify-center">
        <img
          src={ph}
          width={500}
          height={400}
          alt="Illustration de sécurité"
          className="max-w-md"
        />
      </div>
    </main>
  )
}
