import React from 'react'
import LoginForm from '@/components/LoginForm'
const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Bem vindo(a) a AnonFlow</h1>
        <LoginForm />
      </div>
    </div>
  )
}

export default page