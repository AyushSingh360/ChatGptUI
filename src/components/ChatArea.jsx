import React from 'react'
import { Menu } from 'lucide-react'
import MessageList from './MessageList'
import InputArea from './InputArea'
import WelcomeScreen from './WelcomeScreen'

export default function ChatArea({ 
  messages, 
  input, 
  setInput, 
  onSendMessage, 
  isTyping, 
  onToggleSidebar,
  messagesEndRef 
}) {
  const hasMessages = messages.length > 0

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold">ChatGPT</h1>
        <div className="w-10 lg:w-0" /> {/* Spacer for mobile */}
      </div>

      {/* Chat Content */}
      <div className="flex-1 flex flex-col">
        {hasMessages ? (
          <MessageList 
            messages={messages} 
            isTyping={isTyping}
            messagesEndRef={messagesEndRef}
          />
        ) : (
          <WelcomeScreen />
        )}
        
        <InputArea
          input={input}
          setInput={setInput}
          onSendMessage={onSendMessage}
          disabled={isTyping}
        />
      </div>
    </div>
  )
}