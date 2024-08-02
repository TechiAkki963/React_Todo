import TodoInput from "./assets/components/TodoInput";
import TodoList from "./assets/components/TodoList";

function App() {
  let todos = [
    "Go to GYM",
    "Eat more fruits and veges",
    "Pickup the kids from school",
  ];
  return (
    <main className="container">
      <TodoInput />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
