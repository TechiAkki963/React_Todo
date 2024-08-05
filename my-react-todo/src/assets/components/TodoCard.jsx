export default function TodoCard(props) {
  const { children, handleDeleteTodo, index } = props;
  return (
    <li className="list-item">
      {children}
      <div className="btn">
        <button className="editbtn">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="delbtn" onClick={()=>{handleDeleteTodo(index)}}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
