import React from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import { Card, CardContent } from "../components/ui/card";
import { Github } from 'lucide-react';
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto bg-white shadow-md">
          <CardContent className="p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">About me</h1>
            <Image
              src="/profilepic.png"
              alt="Profile Picture"
              width={192}
              height={192}
              className="w-48 h-48 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hung Gia Hoang</h2>
            <p className="text-gray-600 mb-1">University of Houston, 27'</p>
            <p className="text-gray-600 mb-4">Major: Computer Science</p>
            <Button
              variant="default"
              className="bg-blue-500 hover:bg-blue-600 text-white"
              asChild
            >
              <a
                href="https://github.com/HungH206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="w-6 h-6 mr-2" />
                HungH206
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

