import React from "react";
import ReactDOM from "react-dom";
import Cat from "react-cats";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Floofers</h1>
      <p>
        Refresh the page for moar cats
        <span role="img" alt="<3" aria-label="heart">
          ❤️
        </span>
      </p>
      <div className="cat-wrapper">
        <div className="cat">
          <Cat />
        </div>
        <div className="cat">
          <Cat />
        </div>
        <div className="cat">
          <Cat />
        </div>
        <div className="cat">
          <Cat />
        </div>
        <div className="cat">
          <Cat />
        </div>
        <div className="cat">
          <Cat />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
