import React, {useState} from "react"
import AddForm from "./AddForm"
import SearchForm from "./SearchForm"
import List from "./List"

let initialNotes = [
  {text: "Breakfast", calories: 900, timestamp: new Date(2020, 1, 1, 10, 0, 0)},
  {text: "Lunch", calories: 550, timestamp: new Date(2020, 1, 1, 14, 0, 0)},
  {text: "Dinner", calories: 800, timestamp: new Date(2020, 1, 1, 18, 0, 0)},

  {text: "Breakfast", calories: 1000, timestamp: new Date(2020, 1, 2, 10, 0, 0)},
  {text: "Lunch", calories: 500, timestamp: new Date(2020, 1, 2, 14, 0, 0)},
  {text: "Dinner", calories: 750, timestamp: new Date(2020, 1, 2, 18, 0, 0)},
]

export default function App() {
  let [notes, setNotes] = useState(initialNotes)

  function createNote({text, calories, timestamp}) {
    let note = {text, calories, timestamp}
    setNotes(
      [...notes, note]
    )
  }

  function removeNote(timestamp) {
    setNotes(
      notes.filter(note => note.timestamp != timestamp)
    )
  }

  return <div className="p-3">
    <h1 className="h3">Food Diary</h1>
    <List notes={notes} removeNote={removeNote}/>
    <AddForm createNote={createNote}/>
  </div>
}
