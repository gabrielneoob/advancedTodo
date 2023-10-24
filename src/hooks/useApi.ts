import axios from "axios"
import { TodoTypes } from "../types/todo.types";

const api = axios.create({
  baseURL: "https://api-todolist-b8bf07f7bcd9.herokuapp.com/"
})

export const useApi = () => {
  const getTodos = async ():Promise<TodoTypes[]> => {
    const data = await api.get('');
    return data.data;
  }

  const createTask = async(task: string) => {
    const data = await api.post('/create', {
      task
    }, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
    return data;
  }


  return { 
    getTodos,
    createTask
  }
}