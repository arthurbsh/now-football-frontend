import { useState, useEffect, useCallback } from "react";
import "./App.css";
import logo from "./qatar-logo-white.svg";

function App() {
  const kickOffTimestamp = 1669197600;

  const updateDate = useCallback(
  () => {
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);
    const timestampToKickOff = kickOffTimestamp - currentTimestamp;

    const days = Math.floor(timestampToKickOff / 86400).toString();
    const hours = Math.floor((timestampToKickOff / 3600) % 24).toString().padStart(2, '0');
    const minutes = Math.floor((timestampToKickOff / 60) % 60).toString().padStart(2, '0');
    const seconds = (timestampToKickOff % 60).toString().padStart(2, '0');

    setDateToKickOff(`${days}:${hours}:${minutes}:${seconds}`);
    setTimeout(updateDate, 1000);
  }, []);

  const [dateToKickOff, setDateToKickOff] = useState(' ');

  useEffect(() => {
    updateDate();
  }, [updateDate]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img className="pulsating" src={logo} alt="Qatar logo" />
        </div>
        <span>{dateToKickOff}</span>
      </header>
    </div>
  );
}

export default App;
