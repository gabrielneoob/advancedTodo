import { useState, useEffect } from 'react'
import Input from '../input'
import * as Styles from '../todo/styles'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { useApi } from '../../hooks/useApi'
import { useTodos } from '../../context/todoContext'

type EditTodoType = {
  task: string;
  _id: string;
}

const EditTodo = ({
  task,
  _id
}: EditTodoType) => {
  const [ newTask, setNewTask ] = useState('');
  const { updateTask } = useApi()
  const { setEditTodo } = useTodos()

  useEffect(() => {
    setNewTask(task)
  }, []);

  return (
    <Styles.Container>
      <Input
       placeholder='editar task...'
       type='text'
       onChange={(e) => setNewTask(e.target.value)}
       value={newTask}
      />
      <Styles.Options>
        <Styles.Option onClick={() => {
          if(newTask) {
            updateTask(_id, newTask)
            setEditTodo(() => {
              return {
                currentId: '',
                edited: false
              }
            })
          };
        }}>
          <BsFillPencilFill/>
        </Styles.Option>
        <Styles.Option onClick={() => setEditTodo((previous) => {
          return {
            ...previous,
            currentId: "",
            edited: false,
          }
        })}>
          <AiOutlineClose/>
        </Styles.Option>
      </Styles.Options>
    </Styles.Container>
  )
}

export default EditTodo