const TodoListItem: React.FC<IListItem> = ({
  item,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li className="item">
      {item.isDone ? (
        <p className="chechked" onClick={() => toggleTodo(item)}>
          {item.task}
        </p>
      ) : (
        <p onClick={() => toggleTodo(item)}>{item.task}</p>
      )}
      <span className="task-icon" onClick={() => deleteTodo(item.id)}>
        ✖️
      </span>
    </li>
  );
};

export default TodoListItem;
