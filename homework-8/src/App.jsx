import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);

    if (success) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [success]);

  return (
    <div className="app">
      <span className="title">Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span className="status">
        {success ? "Complete!" : "Loading..."}
      </span>
    </div>
  );
}
