import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  // Default markdown content with more elements
  const defaultMarkdown = `# Welcome to Markdown Previewer!





 
`;

  // State to manage editor content
  const [input, setInput] = useState('');

  // Set default markdown content on load
  useEffect(() => {
    setInput(defaultMarkdown);
  }, [defaultMarkdown]); // Empty dependency array ensures it runs only once on mount

  // Handle change in the editor
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Convert markdown to HTML
  const renderMarkdown = () => {
    return { __html: marked(input, { breaks: true }) };
  };

  // Clear the editor
  const handleClear = () => {
    setInput('');
  };
  

  return (
    <div className="App">
      <div className="container">
        {/* <h1 className="text-center my-4">Markdown Previewer</h1> */}
        <div className="row">
          {/* Editor Section */}
          <div className="col-md-6">
            <h2>Editor</h2>
            <textarea
              id="editor"
              value={input}
              onChange={handleChange}
              rows="20"
              className="form-control shadow-sm"
            ></textarea>
            <button onClick={handleClear} className="btn btn-danger mt-3">
              Clear
            </button>
            <button onClick={() => setInput(defaultMarkdown)} className="btn btn-warning mt-3">
  Reset
</button>

          </div>

          {/* Preview Section */}
          <div className="col-md-6">
            <h2>Preview</h2>
            <div
              id="preview"
              dangerouslySetInnerHTML={renderMarkdown()}
              className="preview-box p-3 shadow-sm"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
