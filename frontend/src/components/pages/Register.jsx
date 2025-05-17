

import { useState } from "react"
import { Link } from "react-router-dom"
import { EyeIcon, EyeOffIcon } from "lucide-react"


export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
 console.log("Image importée :", ph);

  return (
    <main className="flex min-h-screen">
      <div className="flex-1 bg-white p-8 flex items-center justify-center">
        <img
          src='https://cdn.pixabay.com/photo/2024/09/02/20/49/goat-9017896_1280.jpg' alt="Illustration de personnes discutant sur une plateforme mobile"
          className="max-w-md"
        />
      </div>
      <div className="flex-1 bg-gray-100 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Créer un compte</h1>
            <p className="text-sm text-gray-600 mt-2">
              Vous avez déjà un compte ?{" "}
              <Link to="/login" className="text-green-600 hover:underline font-medium">
                Connectez-vous
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Comment devons-nous vous appeler ?
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Entrez votre nom de profil"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Quelle est votre adresse e-mail ?
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Entrez votre adresse e-mail"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Créer un mot de passe
                </label>
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-sm text-gray-500">
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Entrez votre mot de passe"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                >
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Utilisez 8 caractères ou plus avec un mélange de lettres, de chiffres et de symboles
              </p>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                En créant un compte, vous acceptez les{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Conditions d'utilisation
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create an account
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">OR Continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
                Facebook
              </button>
              <button
                type="button"
                className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="#4285F4"
                  />
                  <path
                    d="M6.52 7.013v2.96h4.96c-.48 1.173-1.6 2.16-3.307 2.16-2.147 0-3.893-1.747-3.893-3.893s1.747-3.893 3.893-3.893c1.093 0 2.027.4 2.773 1.067l2.347-2.347C11.947 1.787 9.44 1 6.52 1 2.92 1 0 3.92 0 7.52s2.92 6.52 6.52 6.52c3.467 0 5.853-2.107 6.533-5.2.12-.52.187-1.093.187-1.707 0-.4-.027-.76-.08-1.12H6.52z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.52 7.013v2.96h4.96c-.48 1.173-1.6 2.16-3.307 2.16-2.147 0-3.893-1.747-3.893-3.893s1.747-3.893 3.893-3.893c1.093 0 2.027.4 2.773 1.067l2.347-2.347C11.947 1.787 9.44 1 6.52 1 2.92 1 0 3.92 0 7.52s2.92 6.52 6.52 6.52c3.467 0 5.853-2.107 6.533-5.2.12-.52.187-1.093.187-1.707 0-.4-.027-.76-.08-1.12H6.52z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M6.52 7.013v2.96h4.96c-.48 1.173-1.6 2.16-3.307 2.16-2.147 0-3.893-1.747-3.893-3.893s1.747-3.893 3.893-3.893c1.093 0 2.027.4 2.773 1.067l2.347-2.347C11.947 1.787 9.44 1 6.52 1 2.92 1 0 3.92 0 7.52s2.92 6.52 6.52 6.52c3.467 0 5.853-2.107 6.533-5.2.12-.52.187-1.093.187-1.707 0-.4-.027-.76-.08-1.12H6.52z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
