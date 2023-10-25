import { TodoTypes } from "./todo.types"

export type TodoContextType = {
  setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  searchTodos: TodoTypes[];
  setSearchTodos: React.Dispatch<React.SetStateAction<TodoTypes[]>>;
  updated: boolean;
  editTodo: EditTodoType;
  setEditTodo: React.Dispatch<React.SetStateAction<EditTodoType>>;
  selectInput: string;
  setSelectInput: React.Dispatch<React.SetStateAction<string>>;
}

export type EditTodoType = {
  currentId: string;
    edited: boolean;
}