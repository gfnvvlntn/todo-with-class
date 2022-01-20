export type TodoItemTypes = {
  title: string;
  isDone: boolean;
  id: number;
};

export interface TodoLogicProps {
  todoList: TodoItemTypes[];
  createTodoItem: (value: TodoItemTypes) => void;
  deleteAllSelectTodoItem: () => void;
  selectAllTodoItem: (checked: boolean) => void;
  editTodoItem: (newTitle: string, id: number) => void;
  deleteTodoItem: (index: number) => void;
  selectTodoItem: (checked: boolean, id: number) => void;
}
