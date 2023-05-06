import React, { useRef } from "react";
import "./App.css";

function App() {
  const iframeRef = useRef();

  const handleButtonClick = (event) => {
    if (event.target.id === "go-back") {
      iframeRef.current.contentWindow.history.back();
    } else if (event.target.id === "go-forward") {
      iframeRef.current.contentWindow.history.forward();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Iframe Example</h1>
        <div className="iframe-container">
          <iframe
            ref={iframeRef}
            src="https://docs.google.com/document/d/1mV-2mIElMN72fNsZ5tjMp7o512KVfdAtC6gZV__ewwg/edit"
            title="Embedded Website"
            width="100%"
            height="600px"
          />
        </div>
        <div className="button-container">
          <button id="go-back" onClick={handleButtonClick}>
            Go Back
          </button>
          <button id="go-forward" onClick={handleButtonClick}>
            Go Forward
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
