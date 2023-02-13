import { createContext, useState, ReactNode, useMemo } from 'react'
import { todosData, today } from 'data'

interface IContext {
  children: ReactNode
}

export interface ITodo {
  _id?: number
  title: string
  description?: string
  color: string
  done?: boolean
  date?: string
}

export interface TodosContextType {
  todos: ITodo[] | any
  saveTodo: (todo: ITodo) => void
  updateTodo: (id: number) => void
}

export const TodosContext = createContext<TodosContextType | null>(null)

function TodosProvider({ children }: IContext) {
  const [todos, setTodos] = useState<ITodo[]>(todosData)

  console.log(todos)

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      _id: Math.random(),
      title: todo.title,
      description: todo.description,
      color: todo.color,
      done: false,
      date: today,
    }
    setTodos([...todos, newTodo])
  }

  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (id === todo._id) {
        todo.done = !todo.done
      }
      setTodos([...todos])
    })
  }

  const value = useMemo(() => ({ todos, saveTodo, updateTodo }), [todos])

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export default TodosProvider
