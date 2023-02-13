import { TodoList, NewsLine, AddTodo } from 'components'
import TodosProvider from 'provider/TodosProvider'
import './App.scss'

function App() {
  return (
    <TodosProvider>
      <div className='bg-container'>
        <div className='app-wrapper'>
          <h1>To Do</h1>
          <AddTodo />
          <TodoList />
          <NewsLine />
        </div>
      </div>
    </TodosProvider>
  )
}

export default App
