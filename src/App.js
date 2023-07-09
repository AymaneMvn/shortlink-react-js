import React, { useState } from "react";
import "./App.css";


function App() {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((res) => res.json())
      .then((data) => {
        setShortenedLink(data.result.full_short_link);
      })
      .catch((error) => {
        setShortenedLink(error);
      });
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h1>
            <span>mvn</span> Projects
          </h1>
        </nav>
      </header>
      <p style={{fontSize : '1.9em'}}>
        ?Shorten URL free with <span>mvn.st</span>  like goo.gl to reduce a long URLs. Shorten <br />
        links, share them and monitor traffic statistics. Personalize your <br />
        cryptocurrency related links
      </p>

      {!shortenedLink && (
        <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            required={true}
          />
          <label htmlFor="link" className="label">
            Enter your link
          </label>
          <div className="underline"></div>
        </div>
        <div>
          <button className="button">
            <span>Shorten!</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
              </svg>
            </span>
          </button>
        </div>
      </form>
      )}

      {shortenedLink && (
        <form>
        <div className="input-container">
          <input
            type="text"
            id="link"
            value={shortenedLink}
            readOnly={true}
            autoFocus={true}
          />
          <label htmlFor="link" className="label">
            Copy your link
          </label>
          <div className="underline"></div>
        </div>
        <div>
          <button className="button" type="button" onCopy={()=> setShortenedLink({copied : true})}>
            <span>Copy To Clipboard!</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
              </svg>
            </span>
          </button>
        </div>
      </form>
      )}
      
    </div>
     
    )
          };
export default App;
