import styled from 'styled-components'
import Todo from '../todo'
import { useTodos } from '../../context/todoContext'
const Ul = styled.ul`
  margin-top: 10px;
`

const Todos = () => {
  const { searchTodos } = useTodos()
  return (
    <Ul>
      {searchTodos.map((todo) => <Todo todo={todo} key={todo._id}/>)}
    </Ul>
  )
}

export default Todos