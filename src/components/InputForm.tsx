import { useState } from "react";

interface IInputForm {
  addTodo: AddF;
}

const InputForm: React.FC<IInputForm> = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAdd = () => {
    setLoading(true);
    addTodo(task);
    setTask("");
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <div className="input-cnt">
      <input
        type="text"
        placeholder="Enter todo..."
        className="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-btn" onClick={handleAdd} disabled={!task}>
        {loading ? "Adding...." : "ADD Todo"}
      </button>
    </div>
  );
};

export default InputForm;
