import React from 'react'
import { Globe, Lightbulb, Image, FileText, MessagesSquare, Brain, Sparkles, Code, BookOpen } from 'lucide-react'

export default function WelcomeScreen() {
  const quickActions = [
    { icon: Globe, label: 'Search the web', description: 'Get current information' },
    { icon: Lightbulb, label: 'Get ideas', description: 'Brainstorm and ideate' },
    { icon: Image, label: 'Create image', description: 'Generate visual content' },
    { icon: FileText, label: 'Summarize text', description: 'Condense long content' },
    { icon: MessagesSquare, label: 'Get advice', description: 'Personal guidance' },
    { icon: Brain, label: 'Analyze data', description: 'Process information' },
    { icon: Code, label: 'Write code', description: 'Programming help' },
    { icon: BookOpen, label: 'Learn something', description: 'Educational content' },
  ]

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Welcome Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-4xl font-bold">
            <Sparkles className="text-blue-500" size={40} />
            <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              What can I help with?
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            I'm here to help you with questions, creative projects, analysis, and more.
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="group p-4 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200 text-left"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gray-700 group-hover:bg-gray-600 rounded-lg transition-colors">
                  <action.icon size={20} className="text-gray-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    {action.label}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {action.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Example Prompts */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-300">Try asking:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Explain quantum computing",
              "Write a Python function",
              "Plan a weekend trip",
              "Create a workout routine"
            ].map((prompt, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-full text-sm transition-all duration-200"
              >
                "{prompt}"
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}