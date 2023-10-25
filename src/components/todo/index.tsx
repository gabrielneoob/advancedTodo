import React from 'react'
import { TodoTypes } from '../../types/todo.types'
import * as Styles from './styles'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { useApi } from '../../hooks/useApi'
import { useTodos } from '../../context/todoContext'
import EditTodo from '../editTodo'

const Todo = ({ todo }: {todo: TodoTypes}) => {
  const { deleteTask, checkTask } = useApi();
  const { editTodo, setEditTodo } = useTodos();
  if(editTodo.currentId === todo._id && editTodo.edited) {
    return (
      <EditTodo task={todo.task} _id={todo._id}/>
    )
  }
  return (
    <Styles.Container checked={todo.check}>
      <Styles.Task checked={todo.check}>{todo.task}</Styles.Task>
      <Styles.Options>
        <Styles.Option onClick={() => checkTask(todo._id)}>
          <AiOutlineCheck />
        </Styles.Option>
        <Styles.Option onClick={() => setEditTodo(() => {
          return {
            currentId: todo._id,
            edited: true
          }
        })}>
          <BsFillPencilFill />
        </Styles.Option>
        <Styles.Option onClick={() => deleteTask(todo._id)}>
          <AiOutlineClose />
        </Styles.Option>
      </Styles.Options>
    </Styles.Container>
  )
}

export default Todo