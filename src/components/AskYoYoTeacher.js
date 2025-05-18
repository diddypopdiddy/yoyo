import React, { useState } from 'react';

const API_BASE = window.API_BASE || 'http://localhost:3001';

function clsButtonPrimary(extra = '') {
  return `bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded ${extra}`;
}

export default function AskYoYoTeacher() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setInput('');

    try {
      const resp = await fetch(`${API_BASE}/api/tutorChat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage: userMsg }),
      });
      const data = await resp.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error('Teacher chat error:', err);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error contacting YoYo.' }]);
    }
  }

  return (
    <div className="border p-4 bg-white rounded shadow-sm flex flex-col h-96">
      <h3 className="text-lg font-semibold mb-2 text-blue-600">Ask YoYo</h3>
      <div className="flex-1 overflow-auto border p-2 mb-2">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            <strong>{msg.role === 'assistant' ? 'YoYo: ' : 'You: '}</strong>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="border flex-1 mr-2 p-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
          placeholder="Ask YoYo anything..."
        />
        <button
          onClick={sendMessage}
          className={clsButtonPrimary('')}
        >
          Send
        </button>
      </div>
    </div>
  );
}

