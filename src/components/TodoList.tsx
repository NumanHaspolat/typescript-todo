import TodoListItem from "./TodoListItem";

interface ITodoList {
  //? Istersen bunu da types.d.ts dosyasna alabilirsin , .d.ts icerisindeki seyler gloabal olur.
  todos: TodoType[];
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;


//? ILK ARA BITTI