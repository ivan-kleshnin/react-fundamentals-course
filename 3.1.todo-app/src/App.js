import React, {useState} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

let initialTodos = [
  {text: "First", done: true},
  {text: "Second", done: true},
  {text: "Third", done: false},
]

export default function App() {
  let [todos, setTodos] = useState(initialTodos)

  function createTodo({text}) {
    let todo = {text, done: false}
    setTodos(
      [...todos, todo]
    )
  }

  function removeTodo(text) {
    setTodos(
      todos.filter(todo => todo.text != text)
    )
  }

  function toggleTodo(text) {
    setTodos(
      todos.map(todo => ({
        ...todo,
        done: todo.text == text ? !todo.done : todo.done
      }))
    )
  }

  return <div className="p-3">
    <h1 className="h3">Todo App</h1>
    <TodoForm createTodo={createTodo}/>
    <div className="mt-4">
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  </div>
}
