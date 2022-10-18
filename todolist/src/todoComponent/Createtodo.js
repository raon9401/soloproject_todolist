import useInput from "../util/useInput";
import Input from "../component/Input";
import Select from "../component/Select";
import Loading from "../component/Loading";
import { fetchCreate } from "../util/api";

const CreateTodo = ({ todos }) => {
  const [title, titleBind] = useInput("");
  const [body, bodyBind] = useInput("");

  const authrUnique =
    todos &&
    todos.filter((character, idx, arr) => {
      return arr.findIndex((item) => item.author === character.author) === idx;
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, body };
    fetchCreate("http://localhost:3001/todos/", data);
  };

  return (
    <div className="create">
      {todos ? (
        <>
          <h2>Add a New Blog</h2>
          <form onSubmit={handleSubmit}>
            <Input label={"Title"} value={titleBind} />
            <Input label={"Todo"} value={bodyBind} />

            <button>등록</button>
          </form>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CreateTodo;
