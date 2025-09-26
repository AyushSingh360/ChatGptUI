import React from 'react'
import { User, Bot, Copy, ThumbsUp, ThumbsDown } from 'lucide-react'

export default function Message({ message }) {
  const isUser = message.sender === 'user'
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.text)
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className={`message-enter flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`
        max-w-3xl w-full flex space-x-4
        ${isUser ? 'flex-row-reverse space-x-reverse' : ''}
      `}>
        {/* Avatar */}
        <div className={`
          flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          ${isUser ? 'bg-blue-600' : 'bg-green-600'}
        `}>
          {isUser ? <User size={16} /> : <Bot size={16} />}
        </div>

        {/* Message Content */}
        <div className={`
          flex-1 space-y-2
          ${isUser ? 'text-right' : 'text-left'}
        `}>
          <div className={`
            inline-block p-4 rounded-2xl max-w-full
            ${isUser 
              ? 'bg-blue-600 text-white rounded-br-md' 
              : 'bg-gray-700 text-white rounded-bl-md'
            }
          `}>
            <p className="whitespace-pre-wrap break-words">{message.text}</p>
          </div>
          
          {/* Message Actions */}
          <div className={`
            flex items-center space-x-2 text-xs text-gray-400
            ${isUser ? 'justify-end' : 'justify-start'}
          `}>
            <span>{formatTime(message.timestamp)}</span>
            {!isUser && (
              <div className="flex items-center space-x-1">
                <button
                  onClick={copyToClipboard}
                  className="p-1 hover:bg-gray-700 rounded transition-colors"
                  title="Copy message"
                >
                  <Copy size={12} />
                </button>
                <button
                  className="p-1 hover:bg-gray-700 rounded transition-colors"
                  title="Good response"
                >
                  <ThumbsUp size={12} />
                </button>
                <button
                  className="p-1 hover:bg-gray-700 rounded transition-colors"
                  title="Bad response"
                >
                  <ThumbsDown size={12} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}