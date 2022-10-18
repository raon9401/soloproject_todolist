import { fetchDelete } from "../util/api";

const Todolist = ({ todos }) => {
  const handleDeleteClick = (id) => {
    fetchDelete("http://localhost:3001/todos/", id);
  };

  return (
    <div className="todolist">
      {todos &&
        todos.map((todo) => (
          <div className="todo-preview" key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
            <button onClick={() => handleDeleteClick(todo.id)}>delete</button>
          </div>
        ))}
    </div>
  );
};

export default Todolist;
