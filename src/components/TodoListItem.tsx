interface IListItem {
  item: TodoType;
}

const TodoListItem: React.FC<IListItem> = ({ item }) => {
  return (
    <li>
      <p className="chechked">Todo</p>
      <p className="chechked">Todo</p>
      <span className="task-icon">✖️</span>
    </li>
  );
};

export default TodoListItem;
