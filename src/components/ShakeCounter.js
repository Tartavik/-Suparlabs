import { useEffect, useState } from "react";

const ShakeCounter = ({shakeCount, setShakeCount, shakeDelay}) => {
    const [isShaking, setIsShaking] = useState(false);
    useEffect(() => {
        let lastX = 0, lastY = 0, lastZ = 0;
        let last = 0;
    
        const handleMotion = (event) => {
          const { x, y, z } = event.acceleration || {};
    
          if (x !== null && y !== null && z !== null) {
            const deltaX = Math.abs(x - lastX);
            const deltaY = Math.abs(y - lastY);
            const deltaZ = Math.abs(z - lastZ);
    
            const now = Date.now();
            console.log(now);
    
            if ((deltaX > 15 || deltaY > 15 || deltaZ > 15) && now - last > shakeDelay) {
              setShakeCount((prevCount) => prevCount + 1);
              setIsShaking((prev) => !prev);
              setTimeout(() => setIsShaking((prev) => !prev), 300);
              last = now;
            }
    
            lastX = x;
            lastY = y;
            lastZ = z;
    
          }
        }
    
        window.addEventListener("devicemotion", handleMotion);
    
        return () => window.removeEventListener("devicemotion", handleMotion);
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    return (
        <div className={`
            bg-white
            dark:bg-slate-800
            rounded-lg
            px-12 py-8 ring-1
            ring-slate-900/5
            shadow-xl
            ${isShaking ? "animation" : ""}
          `}>
            <h1 className={`
              text-slate-900
              dark:text-white
              font-medium
              tracking-tight
              ${isShaking ? "text-4xl" : "text-3xl"}
            `}>
                Shake count: {shakeCount}
              </h1>
          </div>
    )
}

export default ShakeCounter