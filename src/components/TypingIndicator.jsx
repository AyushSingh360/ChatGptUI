import React from 'react'
import { Bot } from 'lucide-react'

export default function TypingIndicator() {
  return (
    <div className="flex justify-start message-enter">
      <div className="max-w-3xl w-full flex space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
          <Bot size={16} />
        </div>

        {/* Typing Animation */}
        <div className="flex-1">
          <div className="inline-block p-4 bg-gray-700 rounded-2xl rounded-bl-md">
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}