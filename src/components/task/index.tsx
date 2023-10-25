import { useState} from 'react'
import Input from '../input'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import * as Styles from './styles'
import { useApi } from '../../hooks/useApi'

const Task = () => {
  const [ task, setTask ] = useState<string>("");
  const { createTask } = useApi()
  return (
    <>
      <Styles.Container>
        <Input
        labelPlaceholder='Adicione sua tarefa'
        placeholder='O que você vai fazer?'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type='text'
        />
        <div onClick={() => {
          if(task) {
            createTask(task);
            setTask('')
          }
        }}>
          <AiOutlinePlusSquare size={42}/>
        </div>
      </Styles.Container>
    </>
  )
}

export default Task