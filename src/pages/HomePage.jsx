import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <Layout>
      <main className="main-section bg-gray-100 py-16">
        <div className="hero-content text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to StudiWell</h1>
          <p className="text-xl text-gray-700 mb-8">
            A Study Companion With Mental Health Tracking Functionality,<br />
            Powered by Azure software with AI integration.
          </p>
          <div className="space-y-4">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-48">
              <Link href="/login">Try out now</Link>
            </Button>
            <div>
              <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 w-48">
                <Link href="/welcome">View Demo Here</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
