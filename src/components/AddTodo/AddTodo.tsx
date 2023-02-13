import {
  useState,
  useRef,
  useContext,
  ChangeEvent,
  SyntheticEvent,
  useEffect,
} from 'react'
import { TextField, Button, Radio } from '@mui/material'
import { TodosContext, TodosContextType, ITodo } from 'provider/TodosProvider'
import './AddTodo.scss'

function AddTodo() {
  const { saveTodo } = useContext(TodosContext) as TodosContextType
  const [todo, setTodo] = useState<ITodo>({
    title: '',
    description: '',
    color: 'blue',
  })

  console.log(todo.title.length)

  const titleInput = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    titleInput.current?.focus()
  }, [])

  const handleTodo = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo({
      ...todo,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleSaveTodo = (e: SyntheticEvent): void => {
    e.preventDefault()
    saveTodo(todo as ITodo)
    setTodo({
      title: '',
      description: '',
      color: 'blue',
    })
  }

  return (
    <div className='add-input-container'>
      <div className='input-wrapper'>
        <TextField
          className='add-input'
          label='Enter title'
          value={todo.title}
          id='title'
          onChange={handleTodo}
          inputRef={titleInput}
        />
      </div>
      <div className='input-wrapper'>
        <TextField
          className='add-input'
          label='Enter description'
          value={todo.description}
          id='description'
          onChange={handleTodo}
        />
      </div>
      <div className='radio-wrapper'>
        <div className='radio-title'>Task color:</div>
        <Radio
          className='radio-blue'
          value='blue'
          size='small'
          id='color'
          checked={todo.color === 'blue'}
          onChange={handleTodo}
        />
        <Radio
          className='radio-yellow'
          value='yellow'
          size='small'
          id='color'
          checked={todo.color === 'yellow'}
          onChange={handleTodo}
        />
        <Radio
          className='radio-red'
          value='red'
          size='small'
          id='color'
          checked={todo.color === 'red'}
          onChange={handleTodo}
        />
      </div>
      <div className='add-button-wrapper'>
        <Button
          className='add-button'
          onClick={handleSaveTodo}
          disabled={!todo.title.length || !todo.description?.length}
        >
          Add Task
        </Button>
      </div>
    </div>
  )
}

export default AddTodo
