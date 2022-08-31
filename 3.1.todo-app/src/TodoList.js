import React, {useState} from "react"
import PT from "prop-types"

let FILTER_ALL = 0
let FILTER_DONE = 1
let FILTER_ACTIVE = 2

export default function TodoList({todos, toggleTodo, removeTodo}) {
  let [filter, setFilter] = useState(FILTER_ALL)

  let filteredTodos = todos.filter(todo => {
    switch (filter) {
      case FILTER_DONE:   return todo.done
      case FILTER_ACTIVE: return !todo.done
      default:            return true
    }
  })

  return <div>
    <ul style={{listStyleType: "none", paddingLeft: 0}}>
      {filteredTodos.map(todo =>
        <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      )}
    </ul>
    <Footer filter={filter} setFilter={setFilter}/>
  </div>
}

TodoList.propTypes = {
  todos: PT.array.isRequired,
  toggleTodo: PT.func.isRequired,
  removeTodo: PT.func.isRequired,
}

function TodoItem({todo, toggleTodo, removeTodo}) {
  return <li style={{textDecoration: todo.done ? "line-through" : "none", cursor: "pointer"}}>
    <div className="form-group">
      <div className="form-check">
        <input type="checkbox" onChange={_ => toggleTodo(todo.text)} checked={todo.done} style={{cursor: "pointer"}} className="form-check-input"/>
        <span className="form-check-label">
          <span onClick={_ => toggleTodo(todo.text)}>{todo.text}</span>
          <button type="button" onClick={_ => removeTodo(todo.text)}
                  className="btn btn-secondary ml-2"
                  style={{lineHeight: 1, padding: "0.125rem .25rem"}}>
            &times;
          </button>
        </span>
      </div>
    </div>
  </li>
}

TodoItem.propTypes = {
  todo: PT.object.isRequired,
  toggleTodo: PT.func.isRequired,
  removeTodo: PT.func.isRequired,
}

function Footer({filter, setFilter}) {
  return <div>
    <p>
      Show:
      {" "}
      {filter == FILTER_ALL
        ? <a href="#all"><b>All</b></a>
        : <a href="#all" onClick={e => { e.preventDefault(); setFilter(FILTER_ALL) }}>All</a>}
      {", "}
      {filter == FILTER_ACTIVE
        ? <a href="#active"><b>Active</b></a>
        : <a href="#active" onClick={e => { e.preventDefault(); setFilter(FILTER_ACTIVE) }}>Active</a>}
      {", "}
      {filter == FILTER_DONE
        ? <a href="#done"><b>Done</b></a>
        : <a href="#done" onClick={e => { e.preventDefault(); setFilter(FILTER_DONE) }}>Done</a>}
    </p>
  </div>
}

Footer.propTypes = {
  filter: PT.number.isRequired,
  setFilter: PT.func.isRequired,
}
