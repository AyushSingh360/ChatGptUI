import { useState } from "react";
import { Send, Menu, Plus, Globe, Lightbulb, Image, FileText, MessagesSquare, Brain } from "lucide-react";

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage, { text: "Thinking...", sender: "ai" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => prev.slice(0, -1).concat({ text: "Hello! How can I help?", sender: "ai" }));
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className={`w-64 bg-gray-800 p-4 space-y-4 ${sidebarOpen ? "block" : "hidden"} sm:block`}> 
        <h2 className="text-lg font-bold">ChatGPT</h2>
        <button onClick={() => setSidebarOpen(false)} className="sm:hidden text-white">Close</button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-2xl font-bold mb-4">What can I help with?</h1>
        <div className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg flex items-center shadow-md">
          <Plus className="text-gray-400" />
          <input
            type="text"
            className="flex-1 bg-transparent text-white p-2 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="ml-2 p-2 bg-blue-600 text-white rounded-lg">
            <Send size={20} />
          </button>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2">
            <Globe size={16} /> <span>Search</span>
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2">
            <Lightbulb size={16} /> <span>Reason</span>
          </button>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2">
            <Image size={16} /> <span>Create image</span>
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2">
            <FileText size={16} /> <span>Summarize text</span>
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2">
            <MessagesSquare size={16} /> <span>Get advice</span>
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2">
            <Brain size={16} /> <span>Brainstorm</span>
          </button>
        </div>
      </div>
    </div>
  );
}
