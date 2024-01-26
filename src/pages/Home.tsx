import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";
import axios from "axios";

const url = "https://65ad16ceadbd5aa31be0138c.mockapi.io/todos";

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    const { data } = await axios.get<TodoType[]>(url);
    console.log(data);
    setTodos(data);
    if (!data) {
      console.log("ERROR , Data is empty !");
    }
  };

  const addTodo: AddF = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };

    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo: ToggleF = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, { ...item, isDone: !item.isDone });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo: DeleteF = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div id="container">
      <div className="main">
        <h1 className="header">Todo List With Tsx</h1>
        <InputForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default Home;
