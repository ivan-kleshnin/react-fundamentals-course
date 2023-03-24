import React, {useState, useEffect} from "react"

function useTimer(delay) {
  let [state, setState] = useState({
    running: false,
    msLeft: delay,
  })

  useEffect(_ => {
    let interval
    if (state.running) {
      interval = setInterval(_ => {
        setState(({running, msLeft}) => {
          let msLeft2 = Math.max(msLeft - 100, 0)
          return {
            msLeft: msLeft2,
            running: msLeft2 > 0,
          }
        })
      }, 100)
    }
    return () => {
      clearInterval(interval)
    }
  }, [state.running])

  function toggleRunning() {
    setState(state => ({...state, running: state.msLeft ? !state.running : false}))
  }

  function reset() {
    setState({
      running: false,
      msLeft: delay,
    })
  }

  return {
    running: state.running,
    msLeft: state.msLeft,
    toggleRunning,
    reset,
  }
}

export default function App() {
  let {running, msLeft, toggleRunning, reset} = useTimer(3000)

  return <div className="p-3">
    <h1 className="h3">Pomodoro Timer</h1>
    <div className="mt-4" style={{maxWidth: "20rem"}}>
      Seconds Left: <span className="badge badge-dark text-monospace">{(msLeft / 1000).toFixed(1)}</span>
      <span className="ml-4">Running: <span className="badge badge-dark">{running ? "true" : "false"}</span></span>
      <hr/>
      <button onClick={toggleRunning} disabled={!msLeft} className="btn btn-outline-primary">
        {running ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
      </button>
      <button onClick={reset} className="btn btn-outline-dark ml-2">
        <i className="fa fa-stop"></i>
      </button>
    </div>
  </div>
}
