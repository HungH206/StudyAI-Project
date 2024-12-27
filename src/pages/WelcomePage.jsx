import React from 'react'
import Link from 'next/link'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import Layout from '../components/layout'

export default function WelcomePage() {
  const user = { name: 'John Doe' };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Welcome, {user.name}!
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Get started with our user recommendation:</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/ai-assistant" className="text-blue-600 hover:underline">AI Assistant Bot</Link>
                </li>
                <li>
                  <Link href="/mental-health-tracker" className="text-blue-600 hover:underline">Mental Health Tracker</Link>
                </li>
                <li>
                  <Link href="/smart-management" className="text-blue-600 hover:underline">Smart Management Panel</Link>
                </li>
                <li>
                  <Link href="/companion-hub" className="text-blue-600 hover:underline">Companion Hub</Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Your Stats</h2>
              <div className="space-y-2">
                <p><strong>Study streak:</strong> 5 days</p>
                <p><strong>Tasks completed this week:</strong> 12</p>
                <p><strong>Next study session:</strong> Today at 3 PM</p>
                <p><strong>Current mood:</strong> Good</p>
                <p><strong>Stress level:</strong> 3/10</p>
                <p><strong>Mental health tip:</strong> Take a 10-minute break to practice mindfulness.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Sign Out
          </Button>
        </div>
      </div>
    </Layout>
  )
}
