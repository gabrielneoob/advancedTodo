import { createContext, useContext, useState } from 'react'
import { TodoTypes } from '../types/todo.types';
import { EditTodoType, TodoContextType } from '../types/TodoContext.type';

const Context = createContext<TodoContextType>({
  setUpdated: () => {},
  setSearchTodos: () => {},
  searchTodos: [],
  updated: false,
  editTodo: {
    currentId: '',
    edited: false,
  },
  setEditTodo: () => {},
  selectInput: '',
  setSelectInput: () => {},
});


export const ContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [ searchTodos, setSearchTodos ] = useState<TodoTypes[]>([]);
  const [ selectInput, setSelectInput ] = useState<string>('all');
  const [ editTodo, setEditTodo ] = useState<EditTodoType>({currentId: '', edited: false});
  const [ updated, setUpdated ] = useState(false);
  // const { getTodos } = useApi();

  // useEffect(() => {
  //   loadTodos()
  // }, [])

  // const loadTodos = async () => {
  //   const data = await getTodos();
  //   setTodos(data)
  //   setUpdated(false)
  // }
  
  // if(updated) {
  //   loadTodos()
  // }
  return (
    <Context.Provider value={{
      setUpdated,
      searchTodos,
      setSearchTodos,
      updated,
      editTodo,
      setEditTodo,
      selectInput,
      setSelectInput,
    }}>
      { children }
    </Context.Provider>
  )
}

export const useTodos = () => useContext(Context) 