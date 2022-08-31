import React from "react"
import PT from "prop-types"

export default function SearchForm({search, setSearch}) {
  return <div>
    <input autoComplete="off"
           className="form-control"
           name="text"
           onChange={e => setSearch(e.target.value)}
           placeholder="Search..."
           value={search}
    />
  </div>
}

SearchForm.propTypes = {
  search: PT.string.isRequired,
  setSearch: PT.func.isRequired,
}
