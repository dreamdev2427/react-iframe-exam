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
            src="https://login.techstars.com/auth/realms/techstars/protocol/openid-connect/auth?client_id=apply&redirect_uri=https%3A%2F%2Fapply.techstars.com%2F&state=e74070a5-bcbe-4880-a4c0-6fdbfd4b0409&response_mode=fragment&response_type=code&scope=openid&nonce=f9c78dce-07f1-43f4-9cae-d31283751fa3"
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
