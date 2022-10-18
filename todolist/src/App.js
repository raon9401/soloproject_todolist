import "./App.css";
import React, { Suspense } from "react";
import useFetch from "./util/useFetch";
import CreateTodo from "./todoComponent/Createtodo";
import Todolist from "./todoComponent/Todolist";

const Loading = React.lazy(() => import("./component/Loading"));
// const CreateTodo = React.lazy(() => import("./todoComponent/CreateTodo"));
// const Todolist = React.lazy(() => import("./todoComponent/Todolist"));

function App() {
  const [todos, error] = useFetch("http://localhost:3001/todos/");

  return (
    <div className="app">
      {error && <div>{error}</div>}

      <Suspense fallback={<Loading />}>
        <CreateTodo />
        <Todolist todos={todos} />
      </Suspense>
    </div>
  );
}

export default App;
