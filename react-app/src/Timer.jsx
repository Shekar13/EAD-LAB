import React, { useState, useRef, useEffect } from 'react'
import './index.css'

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef(null)

  const start = () => setIsRunning(true)
  const pause = () => setIsRunning(false)
  const reset = () => {
    setIsRunning(false)
    setElapsed(0)
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed(prev => prev + 10)
      }, 10)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning])

  const format = (ms) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const hundredths = Math.floor((ms % 1000) / 10)
    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}:${String(hundredths).padStart(2,'0')}`
  }

  return (
    <div className="timer-container">
      <div className="timer-display">{format(elapsed)}</div>
      <div className="timer-buttons">
        <button className="start-btn" onClick={start} disabled={isRunning}>Start</button>
        <button className="pause-btn" onClick={pause} disabled={!isRunning}>Pause</button>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
