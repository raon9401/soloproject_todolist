import Loading from "./component/Loading";
import { Link } from "react-router-dom";

const Todolist = ({ todos, isPending }) => {
  return (
    <div className="home">
      {isPending && <Loading />}
      {todos &&
        todos.map((todo) => (
          <div className="todo-preview" key={todo.id}>
            <Link to={`/todos/${todo.id}`}>
              <h2>{todo.title}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Todolist;
