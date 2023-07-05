import logo from "./logo.svg";
import "./App.css";
import { BrowserView, MobileView } from "react-device-detect";

function App() {
  return (
    <>
      <BrowserView>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile">
          <header className="mobile-header">
            <img src={logo} className="mobile-logo" alt="logo" />
            <p>모바일 화면 입니다.</p>
          </header>
        </div>
      </MobileView>
    </>
  );
}

export default App;
