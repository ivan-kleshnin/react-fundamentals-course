import React, {useState, useEffect} from "react"

export default function App() {
  let [running, setRunning] = useState(false)
  let [msLeft, setMsLeft] = useState(3000)

  useEffect(_ => {
    let interval
    if (running) {
      interval = setInterval(_ => {
        setMsLeft(msLeft => Math.max(msLeft - 100, 0))
      }, 100)
    }
    return () => {
      clearInterval(interval)
    }
  }, [running])

  useEffect(_ => {
    if (!msLeft) {
      setRunning(false)
    }
  }, [msLeft])

  function toggleRunning() {
    setRunning(r => !r)
  }

  function reset() {
    setRunning(false)
    setMsLeft(3000)
  }

  return <div className="p-3">
    <h1 className="h3">Pomodoro Timer</h1>
    <div className="mt-4" style={{maxWidth: "20rem"}}>
      Seconds Left: <span className="badge badge-dark text-monospace">{(msLeft / 1000).toFixed(1)}</span>
      <span className="ml-4">Running: <span className="badge badge-dark">{running ? "true" : "false"}</span></span>
      <hr/>
      <button onClick={toggleRunning} className="btn btn-outline-primary">
        {running ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
      </button>
      <button onClick={reset} className="btn btn-outline-dark ml-2">
        <i className="fa fa-stop"></i>
      </button>
    </div>
  </div>
}
