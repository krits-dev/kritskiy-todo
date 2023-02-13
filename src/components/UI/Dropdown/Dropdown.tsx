import { useState, ReactNode } from 'react'
import { Collapse } from '@mui/material'
import { DropdownButton } from './DropdownButton'
import './DropdownStyles.scss'

interface IDropdown {
  date: string
  children: ReactNode
}

function Dropdown({ date, children }: IDropdown) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className='dropdown-wrapper'>
      <DropdownButton date={date} open={open} onClickAction={handleClick} />
      <Collapse className='collapse' in={open} timeout={80} unmountOnExit>
        <div className='dropdown-collapse'>{children}</div>
      </Collapse>
    </div>
  )
}

export default Dropdown
