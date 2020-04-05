import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="w3-row-padding w3-content" style={{maxWidth: "1024px"}}>
        <div className="w3-row-padding">
          <h2>五目並べ </h2>
        </div>
        <div className="w3-twothird">
          <Board
          />
        </div>
        <div className="w3-third">
          <Control
          />
          <hr/>
          <Stats
          />
        </div>
      </div>
      
      <WinnerModal
      />
    </div>
  );
}

export default App;
