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

  function handleAddTodos(newTodo){
    const newTodosList = [...todos,newTodo] 
    setTodos(newTodosList)
  }

  function handleDeleteTodo(index){
    const newTodosList = todos.filter((todo,todoIndex)=>{
      return todoIndex !== index
    })
    setTodos(newTodosList)
  }


  function handleEditTodo(){

  }

  

  return (
    <>
    <main className="container">
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </main>
    </>
    
  );
}

export default App;
