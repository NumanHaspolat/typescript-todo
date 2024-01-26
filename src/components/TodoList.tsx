import TodoListItem from "./TodoListItem";

interface ITodoList {
  //? Istersen bunu da types.d.ts dosyasna alabilirsin , .d.ts icerisindeki seyler gloabal olur.
  todos: TodoType[];
  toggleTodo: ToggleF;
  deleteTodo: DeleteF;
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo , deleteTodo }) => {
  return (
    <ul className="ul">
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
