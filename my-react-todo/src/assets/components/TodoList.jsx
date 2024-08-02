import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  // let todos = [
  //   "Go to GYM",
  //   "Eat more fruits and veges",
  //   "Pickup the kids from school",
  // ];

  return (
    <ul>
      {todos.map((todos, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todos}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
