import React from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { X } from 'lucide-react';

export default function Chatbot() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>AI Chatbot Companion</CardTitle>
        <Button variant="ghost" size="icon">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-100" />
            <div className="rounded-lg bg-gray-100 p-3">
              <p>How can I help you today?</p>
            </div>
          </div>
          <div className="flex items-start justify-end gap-3">
            <div className="rounded-lg bg-blue-500 p-3 text-white">
              <p>I need help with my studies</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-blue-500" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-100" />
            <div className="text-sm text-gray-500">Generating Recommendation...</div>
          </div>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Type your question here!" />
          <Button>Send</Button>
        </div>
      </CardContent>
    </Card>
  )
}
