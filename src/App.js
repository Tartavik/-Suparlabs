import React, { useEffect, useState } from "react";
import RangeInput from "./components/RangeInput";
import ToggleMode from "./components/ToggleMode";
import ResetButton from "./components/ResetButton";
import ShakeCounter from "./components/ShakeCounter";

export default function App() {
  const [shakeCount, setShakeCount] = useState(0);
  const [shakeDelay, setShakeDelay] = useState(300);

  useEffect(() => {
    if (!window.DeviceMotionEvent) {
      alert("Motion sensors are not available. The application requires access to the accelerometer.");
    }
  }, []);

  return (
    <div className="bg-slate-800 dark:bg-white flex flex-col items-center h-screen flex-auto justify-center">
      <ToggleMode />
      <ShakeCounter
        shakeCount={shakeCount}
        setShakeCount={setShakeCount}
        shakeDelay={shakeDelay}
      />
      <ResetButton setShakeCount={setShakeCount}/>
      <RangeInput
        shakeDelay={shakeDelay}
        setShakeDelay={setShakeDelay}
      />
    </div>
  );
}