import "./App.css";
import React, { Suspense } from "react";
import useFetch from "./util/useFetch";

const Loading = React.lazy(() => import("./component/Loading"));
const CreateTodo = React.lazy(() => import("./todoComponent/CreateTodo"));
const Todolist = React.lazy(() => import("./todoComponent/Todolist"));

function App() {
  const [todos, isPending, error] = useFetch("http://localhost:3001/blogs/");

  return (
    <div className="App">
      {error && <div>{error}</div>}

      <Suspense fallback={<Loading />}>
        <CreateTodo />
        <Todolist todos={todos} isPending={isPending} />
      </Suspense>
    </div>
  );
}

export default App;
