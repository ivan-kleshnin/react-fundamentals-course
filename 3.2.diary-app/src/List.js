import React, {useState} from "react"
import PT from "prop-types"
import SearchForm from "./SearchForm"

export default function List({notes, removeNote}) {
  let [search, setSearch] = useState("")

  let filteredNotes = notes.filter(note => {
    return note.text.match(new RegExp("^" + search, "i"))
  })

  return <div style={{maxWidth: "20rem"}}>
    <SearchForm search={search} setSearch={setSearch}/>
    <div>
      {filteredNotes.map(note =>
        <NoteItem key={note.timestamp} note={note} removeNote={removeNote}/>
      )}
    </div>
  </div>
}

List.propTypes = {
  notes: PT.array.isRequired,
  removeNote: PT.func.isRequired,
}

function NoteItem({note, removeNote}) {
  let d = new Date(note.timestamp)
  return <div className="d-flex justify-content-between mt-3">
    <div>
      <small className="text-muted">{d.toLocaleDateString("ru")} {d.toLocaleTimeString("ru")}</small><br/>
      {note.text} – {note.calories} kcal
    </div>
    <div>
      <button type="button" onClick={_ => removeNote(note.timestamp)}
              className="btn btn-secondary ml-2"
              style={{lineHeight: 1, padding: "0.125rem .25rem"}}>
        &times;
      </button>
    </div>
  </div>
}

NoteItem.propTypes = {
  note: PT.object.isRequired,
  removeNote: PT.func.isRequired,
}


