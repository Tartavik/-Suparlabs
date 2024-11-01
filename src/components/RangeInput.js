const RangeInput = ({shakeDelay, setShakeDelay}) => {
    return (
        <>
            <span className="span-base">Adjust the refresh rate (ms): {shakeDelay}</span>
            <div className="relative mb-6 w-2/3">
                <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                <input id="labels-range-input" onChange={(e) => setShakeDelay(e.target.value)} type="range" value={shakeDelay} min="0" max="1000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                <span className="range-base start-0 -bottom-6">0 ms</span>
                <span className="range-base start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">300 ms</span>
                <span className="range-base start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">600 ms</span>
                <span className="range-base end-0 -bottom-6">900 ms</span>
            </div>
        </>
    )
}

export default RangeInput