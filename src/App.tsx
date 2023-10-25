import { GlobalStyles, Header, TodoContainer } from "./GlobalStyles"
import Search from "./components/search"
import Task from "./components/task"
import Todos from "./components/todos"
import { useTodos } from "./context/todoContext"

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <div>
        <TodoContainer>
          <Header>
            <h1>
              Advanced Todo
            </h1>
          </Header>
          <Task />
          <Search />
          <Todos />
        </TodoContainer>

      </div>
    </>
  )
}

export default App