import React, { useState } from 'react';
import { Lexer } from './compiler/lexer';

function App() {
  const [input, setInput] = useState('');

  const handleAnalyze = () => {
    try {
      const lexer = new Lexer(input);
      let token = lexer.getNextToken();
      console.log('Lexical Analysis Results:');
      console.log('------------------------');
      console.clear()
      
      while (token.type !== 'EOF') {
        console.log(`Type: ${token.type}, Value: "${token.value}", Line: ${token.line}, Column: ${token.column}`);
        token = lexer.getNextToken();
      }
    } catch (error) {
      console.error('Lexical Error:', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Lexical Analyzer</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Input Code
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 p-4 border rounded-md font-mono text-sm"
            placeholder="Enter your code here..."
          />
          
          <button
            onClick={handleAnalyze}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Analyze Tokens
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Check the browser console (F12) to see the lexical analysis results
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;