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

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <InputForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
