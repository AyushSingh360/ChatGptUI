import React, { useState, useRef, useEffect } from 'react'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import { generateAIResponse } from '../utils/aiResponses'

export default function ChatUI() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [conversations, setConversations] = useState([
    { id: 1, title: 'New Chat', messages: [] }
  ])
  const [currentConversationId, setCurrentConversationId] = useState(1)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { 
      id: Date.now(), 
      text: input, 
      sender: 'user', 
      timestamp: new Date() 
    }
    
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsTyping(true)

    // Update conversation
    setConversations(prev => 
      prev.map(conv => 
        conv.id === currentConversationId 
          ? { ...conv, messages: newMessages, title: input.slice(0, 30) + '...' }
          : conv
      )
    )

    // Simulate AI response
    setTimeout(async () => {
      const aiResponse = await generateAIResponse(input)
      const aiMessage = { 
        id: Date.now() + 1, 
        text: aiResponse, 
        sender: 'ai', 
        timestamp: new Date() 
      }
      
      const updatedMessages = [...newMessages, aiMessage]
      setMessages(updatedMessages)
      setIsTyping(false)

      // Update conversation with AI response
      setConversations(prev => 
        prev.map(conv => 
          conv.id === currentConversationId 
            ? { ...conv, messages: updatedMessages }
            : conv
        )
      )
    }, 1000 + Math.random() * 2000)
  }

  const startNewChat = () => {
    const newConversation = {
      id: Date.now(),
      title: 'New Chat',
      messages: []
    }
    setConversations(prev => [newConversation, ...prev])
    setCurrentConversationId(newConversation.id)
    setMessages([])
  }

  const selectConversation = (conversationId) => {
    const conversation = conversations.find(conv => conv.id === conversationId)
    if (conversation) {
      setCurrentConversationId(conversationId)
      setMessages(conversation.messages)
    }
    setSidebarOpen(false)
  }

  const deleteConversation = (conversationId) => {
    setConversations(prev => prev.filter(conv => conv.id !== conversationId))
    if (conversationId === currentConversationId) {
      const remaining = conversations.filter(conv => conv.id !== conversationId)
      if (remaining.length > 0) {
        selectConversation(remaining[0].id)
      } else {
        startNewChat()
      }
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        conversations={conversations}
        currentConversationId={currentConversationId}
        onNewChat={startNewChat}
        onSelectConversation={selectConversation}
        onDeleteConversation={deleteConversation}
      />
      
      <ChatArea
        messages={messages}
        input={input}
        setInput={setInput}
        onSendMessage={sendMessage}
        isTyping={isTyping}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        messagesEndRef={messagesEndRef}
      />
    </div>
  )
}