import useInput from "../util/useInput";
import Input from "../component/Input";
import { fetchCreate } from "../util/api";

const CreateTodo = ({ todos }) => {
  const [title, titleBind] = useInput("");
  const [body, bodyBind] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, body, complete: false };
    fetchCreate("http://localhost:3001/todos/", data);
  };

  return (
    <div className="create">
      {
        <>
          <h2>Todolist 작성</h2>
          <form onSubmit={handleSubmit}>
            <Input label={"Title"} value={titleBind} />
            <Input label={"Todo"} value={bodyBind} />

            <button>등록</button>
          </form>
        </>
      }
    </div>
  );
};

export default CreateTodo;
