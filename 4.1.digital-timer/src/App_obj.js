import React, {useState, useEffect} from "react"

export default function App() {
  let [state, setState] = useState({
    running: false,
    msLeft: 3000,
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
      msLeft: 3000,
    })
  }

  return <div className="p-3">
    <h1 className="h3">Digital Timer</h1>
    <div className="mt-4" style={{maxWidth: "20rem"}}>
      Seconds Left: <span className="badge badge-dark text-monospace">{(state.msLeft / 1000).toFixed(1)}</span>
      <span className="ml-4">Running: <span className="badge badge-dark">{state.running ? "true" : "false"}</span></span>
      <hr/>
      <button onClick={toggleRunning} disabled={!state.msLeft} className="btn btn-outline-primary">
        {state.running ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
      </button>
      <button onClick={reset} className="btn btn-outline-dark ml-2">
        <i className="fa fa-stop"></i>
      </button>
    </div>
  </div>
}
