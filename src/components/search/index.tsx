import  { useState, useEffect } from 'react'
import * as Styles from "./styles"
import Input from '../input'
import { FaDeleteLeft } from 'react-icons/fa6'
import { TodoTypes } from '../../types/todo.types'
import { useApi } from '../../hooks/useApi'
import { useTodos } from '../../context/todoContext'

const Search = () => {
  const [ searchInput, setSearchInput ] = useState<string>("")
  const { setSearchTodos, updated, setUpdated, setSelectInput, selectInput } = useTodos()
  const { searchTodo, filterChecked } = useApi();
  
  useEffect(() => {
    loadTodos() 
  }, [ searchInput ]);

  useEffect(() => {
    loadFilterTodo()
  }, [ selectInput, updated])

  const loadFilterTodo = async () => {
    if(selectInput === 'all') {
      const data = await searchTodo(searchInput);
      return setSearchTodos(data)
    } else {
      const data = await filterChecked(selectInput);
      setSearchTodos(data)
    }
  }
  
  const loadTodos = async () => {
    const data = await searchTodo(searchInput);
    setUpdated(false)
    setSearchTodos(data);
  }
  if(updated) {
    loadTodos()
  }
  
  return (
    <Styles.Container>
      { selectInput === 'all' && 
        <Styles.SearchBox>
          <Input
          labelPlaceholder='Pesquisar:'
          type='text'
          placeholder='Buscar...'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} 
          />
          <div onClick={() => setSearchInput("")}>
            <FaDeleteLeft size={42}/>
          </div>
        </Styles.SearchBox>
      }
      
      <Styles.FilterBox>
        <label>
          <span>Filtrar: </span>
          <select onChange={(e) => setSelectInput(e.target.value)}>
            <option value="all">todos</option>
            <option value="undone">a fazer</option>
            <option value="done">feitos</option>
          </select>
        </label>
      </Styles.FilterBox>
    </Styles.Container>
  )
}

export default Search