import React from 'react'
import Layout from '../components/layout'
import { Card, CardContent } from "../components/ui/card"

export default function Students() {
  const testimonials = [
    {
      text: "StudiWell has been a game-changer for my academic performance. The AI study helper is like having a personal tutor available 24/7!",
      author: "Sarah J., Computer Science Major"
    },
    {
      text: "The mental health guidance feature has helped me maintain a healthy balance between my studies and personal life. I feel more in control and less stressed.",
      author: "Mike T., Psychology Student"
    },
    {
      text: "Connecting with peer mentors through StudiWell has been incredibly helpful. I've learned so much from their experiences and advice.",
      author: "Emily R., Business Major"
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Testimonials</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}
