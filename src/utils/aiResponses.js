// Simulated AI responses for demo purposes
const responses = [
  "I'd be happy to help you with that! Let me break this down for you.",
  "That's an interesting question. Here's what I think about it:",
  "Great question! Let me provide you with a comprehensive answer.",
  "I understand what you're asking. Here's my perspective on this:",
  "Thanks for asking! This is actually a fascinating topic.",
  "Let me help you understand this better with a detailed explanation.",
  "That's a thoughtful question. Here's how I would approach it:",
  "I can definitely assist you with that. Let me explain step by step.",
  "Excellent question! This requires a nuanced answer.",
  "I'm glad you asked about this. It's an important topic to understand."
]

const followUps = [
  "Would you like me to elaborate on any particular aspect?",
  "Is there anything specific you'd like me to clarify?",
  "Do you have any follow-up questions about this?",
  "Would you like me to provide some examples?",
  "Is there another angle you'd like me to explore?",
  "Would additional details be helpful?",
  "Are you looking for more specific information?",
  "Would you like me to explain this differently?",
  "Is there a particular use case you have in mind?",
  "Would you like me to dive deeper into this topic?"
]

export const generateAIResponse = async (userInput) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const baseResponse = responses[Math.floor(Math.random() * responses.length)]
  const followUp = followUps[Math.floor(Math.random() * followUps.length)]
  
  // Generate contextual response based on input
  let contextualResponse = ""
  
  if (userInput.toLowerCase().includes('code') || userInput.toLowerCase().includes('programming')) {
    contextualResponse = "Here's a code example that demonstrates the concept:\n\n```javascript\nfunction example() {\n  console.log('This is a sample function');\n}\n```\n\n"
  } else if (userInput.toLowerCase().includes('explain') || userInput.toLowerCase().includes('what is')) {
    contextualResponse = "Let me break this down into key points:\n\n1. First, it's important to understand the basics\n2. Then we can explore the more complex aspects\n3. Finally, we'll look at practical applications\n\n"
  } else if (userInput.toLowerCase().includes('help') || userInput.toLowerCase().includes('how')) {
    contextualResponse = "Here's a step-by-step approach:\n\n• Start by identifying your specific needs\n• Research the available options\n• Consider the pros and cons\n• Make an informed decision\n\n"
  }
  
  return `${baseResponse}\n\n${contextualResponse}${followUp}`
}