import React, { useRef, useEffect } from 'react'
import { Send, Paperclip, Mic } from 'lucide-react'

export default function InputArea({ input, setInput, onSendMessage, disabled }) {
  const textareaRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSendMessage()
    }
  }

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
    }
  }

  useEffect(() => {
    adjustTextareaHeight()
  }, [input])

  return (
    <div className="border-t border-gray-700 bg-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-end space-x-3 bg-gray-700 rounded-2xl p-3">
          {/* Attachment Button */}
          <button
            className="flex-shrink-0 p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-colors"
            title="Attach file"
          >
            <Paperclip size={20} />
          </button>

          {/* Text Input */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message ChatGPT..."
              className="w-full bg-transparent text-white placeholder-gray-400 resize-none outline-none min-h-[24px] max-h-[120px] py-1"
              rows={1}
              disabled={disabled}
            />
          </div>

          {/* Voice Input Button */}
          <button
            className="flex-shrink-0 p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-colors"
            title="Voice input"
          >
            <Mic size={20} />
          </button>

          {/* Send Button */}
          <button
            onClick={onSendMessage}
            disabled={!input.trim() || disabled}
            className={`
              flex-shrink-0 p-2 rounded-lg transition-all duration-200
              ${input.trim() && !disabled
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            <Send size={20} />
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-gray-500 text-center mt-3">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  )
}