import React from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import Chatbot from '../components/chatbot'
import { Card, CardContent } from "../components/ui/card"
import { MessageCircle, Heart, Users } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: "AI Study Helper + Chatbot",
      description: "An intelligent companion that helps you study more effectively. Get personalized recommendations and instant answers to your questions. Personalize habit system that fits your schedule!",
      icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
      component: <Chatbot />
    },
    {
      title: "Personalize Mental Health Guidance",
      description: "Empower students to maintain mental health, study more effectively. Regular health check-ins & provide feedbacks. Personalize habit system that fits your schedule!",
      icon: <Heart className="w-12 h-12 text-blue-500" />,
      image: "/images/MentalHealth.png"
    },
    {
      title: "Support and Connections From Mentors",
      description: "Connect students with peer mentors for academic support. Facilitate group study sessions and discussions.",
      icon: <Users className="w-12 h-12 text-blue-500" />,
      component: (
        <div className="flex justify-center gap-4">
          {[
            { name: "Katherine", img: "/mentor1.jpg" },
            { name: "Leonardo", initials: "L" },
            { name: "Tim S", initials: "TS" },
            { name: "Mrs. Jay", img: "/mentor4.jpg" },
            { name: "Jana W", initials: "JW" }
          ].map((mentor, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                mentor.img ? "" : "bg-gray-300"
              }`}
            >
              {mentor.img ? (
                <Image
                  src={mentor.img}
                  alt={mentor.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                mentor.initials
              )}
            </div>
          ))}
        </div>
      )
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Main Features</h1>
        <div className="space-y-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-white shadow-md">
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    {index + 1}/ {feature.title}
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {feature.description.split('. ').map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center items-center">
                  {feature.component}
                  {feature.image && (
                    <Image
                      src="/images/MentalHealth.png"
                      alt={feature.title}
                      width={200}
                      height={200}
                      className="w-50 h-auto"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

