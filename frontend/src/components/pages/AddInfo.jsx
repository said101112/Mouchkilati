"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import DashboardLayout from "../layout/DashboardLayout"
import Button from "../ui/Button"
import Input from "../ui/Input"

export default function AddInfo() {
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
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-bold mb-6">Ajouter vos informations</h1>

        <div className="grid grid-cols-2 gap-6">
          <Input label="Nom" id="nom" placeholder="El Hail" defaultValue={currentUser?.name?.split(" ")[0] || ""} />

          <Input
            label="Prénom"
            id="prenom"
            placeholder="Jaouad"
            defaultValue={currentUser?.name?.split(" ")[1] || ""}
          />
        </div>

        <div className="mt-4">
          <Input
            label="Adresse email :"
            id="email"
            type="email"
            placeholder="elhaliljaouad123@gmail.com"
            defaultValue={currentUser?.email || ""}
            readOnly
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <Input label="Numéro de téléphone :" id="telephone" type="tel" placeholder="0690551181" />

          <Input label="Type de sexe :" id="sexe" placeholder="Mâle" />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4">
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
              Région
            </label>
            <div className="relative">
              <select
                id="region"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 appearance-none"
              >
                <option value="tanger-tetouan">Tanger-Tétouan</option>
                <option value="grand-casablanca">Grand Casablanca</option>
                <option value="rabat-sale">Rabat-Salé</option>
              </select>
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div>
            <label htmlFor="prefecture" className="block text-sm font-medium text-gray-700 mb-1">
              Province/ Préfecture (Déjà choisi Tanger-Tétouan)
            </label>
            <div className="relative">
              <select
                id="prefecture"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 appearance-none"
              >
                <option value="chefchaouen">Chefchaouen Province</option>
                <option value="larache">Larache Province</option>
                <option value="tanger-assilah">Tanger-Assilah Préfecture</option>
              </select>
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div>
            <label htmlFor="commune" className="block text-sm font-medium text-gray-700 mb-1">
              Commune
            </label>
            <div className="relative">
              <select
                id="commune"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 appearance-none"
              >
                <option value="boukhalef">Boukhalef</option>
                <option value="beni-makada">Beni-Makada</option>
                <option value="gzenaya">Gzenaya</option>
              </select>
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium mb-2">Veuillez Scanner votre carte d'identité:</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">Recto :</p>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4 h-32 flex items-center justify-center">
                <p className="text-gray-400">Cliquez pour télécharger</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Verso :</p>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4 h-32 flex items-center justify-center">
                <p className="text-gray-400">Cliquez pour télécharger</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button className="w-full">Submit</Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
