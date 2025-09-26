import React from 'react'
import { Plus, MessageSquare, Trash2, X, Menu } from 'lucide-react'

export default function Sidebar({ 
  isOpen, 
  onClose, 
  conversations, 
  currentConversationId, 
  onNewChat, 
  onSelectConversation, 
  onDeleteConversation 
}) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-gray-800 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">ChatGPT</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-gray-700 rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button
            onClick={onNewChat}
            className="w-full flex items-center space-x-3 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          >
            <Plus size={20} />
            <span>New Chat</span>
          </button>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`
                  group flex items-center justify-between p-3 rounded-lg cursor-pointer
                  transition-colors hover:bg-gray-700
                  ${currentConversationId === conversation.id ? 'bg-gray-700' : ''}
                `}
                onClick={() => onSelectConversation(conversation.id)}
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <MessageSquare size={16} className="text-gray-400 flex-shrink-0" />
                  <span className="text-sm truncate">
                    {conversation.title}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onDeleteConversation(conversation.id)
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-600 rounded transition-opacity"
                >
                  <Trash2 size={14} className="text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 text-center">
            ChatGPT Clone v1.0
          </div>
        </div>
      </div>
    </>
  )
}