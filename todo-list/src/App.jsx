import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])

  const addTodoList = () =>{

    if(input.trim()==="") return;
    const item = {
      id:todoList.length + 1,
      text:input,
      completed: false
    }

    setTodoList(prev => [...prev, item])
    setInput("")
  }
  const toggleComplete = (id) =>{
    setTodoList(
      todoList.map(t => {
        if(t.id === id){
          return{
            ...t,
            completed: !t.completed
          }
        }
        else{
          return t;
        }
      })
    )
  }

  const deleteTodo = (id) =>{
    setTodoList(
      todoList.filter(
        (t) => (t.id !== id)
      )
    )
  }

  return (
    <>
      <h1>Todo List</h1>
      <input type='text' placeholder='Enter Todo' value={input} 
      onChange={(e) => setInput(e.target.value)}/>
      <button onClick={()=> addTodoList()}>Add</button>
      <ul>
        {todoList.map(t=>
          <li key={t.id}>
            <input type='checkbox'checked={t.completed} onChange={()=> toggleComplete(t.id)}/>
            <span className={t.completed ? "strikeThrough" : ""}>{t.text}</span>
            <button onClick={()=>deleteTodo(t.id)}>Delete</button>
         </li>
        )}
      </ul>
    </>
  )
}

export default App
