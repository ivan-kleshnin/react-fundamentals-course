import React, {useState} from "react"
import PT from "prop-types"

export default function AddForm({createNote}) {
  let [text, setText] = useState("Breakfast")
  let [timestamp, setTimestamp] = useState(new Date())
  let [calories, setCalories] = useState(500)

  return <div className="mt-3">
    <h6>New Note</h6>
    <div className="form-inline">
      <select autoComplete="off"
              className="form-control"
              name="text"
              onChange={e => setText(e.target.value)}
              placeholder=""
              value={text}>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
      </select>
      <input type="date" value={formatDate(timestamp)}
             onChange={e => {setTimestamp(new Date(e.target.value))}}
             className="form-control ml-2"/>
      <div className="input-group">
        <input type="number" min={100} max={2000} step={100} value={calories}
             onChange={e => setCalories(parseInt(e.target.value))}
             className="form-control ml-2"/>
        <div className="input-group-append">
          <div className="input-group-text">kcal</div>
        </div>
      </div>
      <button className="btn btn-primary ml-2"
              onClick={_ => createNote({text, calories, timestamp})}
              type="button">
        Add
      </button>
    </div>
  </div>
}

AddForm.propTypes = {
  createNote: PT.func.isRequired,
}

function formatDate(date) {
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
}
