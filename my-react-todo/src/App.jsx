import { useState } from "react";
import TodoInput from "./assets/components/TodoInput";
import TodoList from "./assets/components/TodoList";

function App() {
  // let todos = [
  //   "Go to GYM",
  //   "Eat more fruits and veges",
  //   "Pickup the kids from school",
  // ];

  const [todos , setTodos] = useState([])
  
  const [todoValue , setTodoValue] = useState('')

  function handleAddTodos(newTodo){
    const newTodosList = [...todos,newTodo] 
    setTodos(newTodosList)
  }

  function handleDeleteTodo(index){
    const newTodosList = todos.filter((todo ,todoIndex)=>{
      return todoIndex !== index
    })
    setTodos(newTodosList)
  }


  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }


  return (
    <>
    <main className="container">
      <TodoInput 
      todoValue={todoValue}
      setTodoValue={setTodoValue}
      handleAddTodos={handleAddTodos}
      />

      <TodoList 
      todos={todos} 
      handleDeleteTodo={handleDeleteTodo} 
      handleEditTodo={handleEditTodo}
      />
    </main>
    </>
    
  );
}

export default App;
