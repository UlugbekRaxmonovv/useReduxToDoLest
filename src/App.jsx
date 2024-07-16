import { TodoProvider } from './components/Reducer/Context'
import AddTodoList from './components/AddTodoList/AddTodoList'
import TodoList from './components/TodoList/TodoList'
function App() {

  return (
    <>
     <TodoProvider>
        <AddTodoList />
       <TodoList />
     </TodoProvider>
      
    </>
  )
}

export default App
