import axios from "axios"
import { TodoTypes } from "../types/todo.types";
import { useTodos } from "../context/todoContext";

const api = axios.create({
  baseURL: "https://api-todolist-b8bf07f7bcd9.herokuapp.com/"
})

export const useApi = () => {
  const { setUpdated } = useTodos();
  const getTodos = async ():Promise<TodoTypes[]> => {
    const data = await api.get('');
    setUpdated(true);
    return data.data;
  }

  const createTask = async(task: string) => {
    const data = await api.post('/create', {
      task
    }, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
    setUpdated(true);
    return data.data;
  }

  const deleteTask = async(id: string) => {
    const data = await api.delete(`/todo/${id}`);
    setUpdated(true);
    return data.data
  }

  const checkTask = async(id: string) => {
    const data = await api.put(`/todo/check/${id}`);
    setUpdated(true);
    return data.data
  }


  return { 
    getTodos,
    createTask,
    deleteTask,
    checkTask
  }
}