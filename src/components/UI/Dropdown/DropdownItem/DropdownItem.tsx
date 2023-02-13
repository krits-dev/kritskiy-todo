import { useState, useContext } from 'react'
import { Button, Collapse } from '@mui/material'
import { Title } from 'components/UI'
import { Switch } from 'components/UI/Dropdown'
import { TodosContext, TodosContextType } from 'provider/TodosProvider'
import './DropdownItem.scss'

interface IDropdownItem {
  id: number | null
  title: string
  description: string
  color: string
  done: boolean
}

function DropdownItem({ id, title, description, color, done }: IDropdownItem) {
  const { updateTodo } = useContext(TodosContext) as TodosContextType
  const [open, setOpen] = useState(false)

  const text =
    description.length >= 25 ? `${description.slice(0, 25)}...` : description

  const display = open ? 'd-none' : 'd-block'

  const handleClick = () => {
    setOpen((open) => !open)
  }

  return (
    <div className='dropdown-item-wrapper'>
      <div className='dropdown-item-content'>
        <Button className='dropdown-item-button' onClick={handleClick}>
          <Title text={title} lineThrough={done} />
          {!open && <div>{text}</div>}
          <div className={`dropdown-item-left-border ${color}`} />
        </Button>
        <Collapse in={open} timeout={100} unmountOnExit>
          <div className='dropdown-item-collapse'>{description}</div>
        </Collapse>
      </div>
      <Switch isChecked={done} onClickAction={() => updateTodo(id as number)} />
    </div>
  )
}

DropdownItem.defaultProps = {
  id: null,
  title: 'Task title',
  description: 'Task description',
  color: 'yellow',
  done: false,
}

export default DropdownItem
