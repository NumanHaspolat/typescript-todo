interface TodoType {
  task: string;
  isDone: boolean;
  id: string | number;
}
interface IListItem {
  item: TodoType;
  toggleTodo: ToggleF;
  deleteTodo: DeleteF;
}
type AddF = (text: string) => void;

type ToggleF = (item: TodoType) => void;

type DeleteF = (id: string | number) => void;
