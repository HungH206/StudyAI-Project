import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "./ui/button"

const Layout = ({ children }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-custom-green">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/Untitled 1.png"
              alt="StudiWell Logo"
              width={80}
              height={80}
              className="w-24 h-20"
            />
            <h1 className="text-2xl font-bold text-gray-800 ml-4">StudiWell</h1>
          </div>
          <div className="flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
                <li><Link href="/students" className="text-gray-700 hover:text-gray-900">Student</Link></li>
                <li><Link href="/features" className="text-gray-700 hover:text-gray-900">Feature</Link></li>
              </ul>
            </nav>
            <div className="account-menu relative">
              <Button className="px-4 py-2" asChild={false} onClick={() => setIsAccountOpen(!isAccountOpen)}>
                My Account
              </Button>
              <div className={`account-slideout fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isAccountOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4">Account</h2>
                  <Link href="/login" className="block w-full text-center bg-blue-500 text-white px-4 py-2 rounded mb-2">
                    Sign In
                  </Link>
                  <Link href="/signup" className="block w-full text-center bg-green-500 text-white px-4 py-2 rounded mb-2">
                    Sign Up
                  </Link>
                  <button onClick={() => setIsAccountOpen(false)} className="mt-4 text-gray-600 hover:text-gray-800">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 StudiWell. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout

