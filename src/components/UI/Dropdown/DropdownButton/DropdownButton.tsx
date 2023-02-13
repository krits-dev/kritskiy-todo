import { memo, SyntheticEvent } from 'react'
import { Title } from 'components/UI'
import { Button, Checkbox } from '@mui/material'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import { today } from 'data'
import './DropdownButton.scss'

interface IDropdownButton {
  date: string
  open: boolean
  onClickAction: (e: SyntheticEvent) => void
}

function DropdownButton({ date, open, onClickAction }: IDropdownButton) {
  const isToday = date === today ? true : false
  console.log(date, today, isToday)
  return (
    <>
      {!open && (
        <Button className='button' onClick={onClickAction} disableRipple>
          <div className='left-border' />
          <Title text={date} dropdown open={open} />
          <div className='arrow-down'>
            <ExpandCircleDownIcon />
          </div>
        </Button>
      )}
      {open && (
        <div className='checkbox-wrapper'>
          <Checkbox
            className='checkbox'
            onChange={onClickAction}
            defaultChecked
          />
          <Title text={date} dropdown open={open} />
        </div>
      )}
    </>
  )
}

DropdownButton.defaultProps = {
  date: 'Task date',
  open: false,
  onClickAction: () => null,
}

export default memo(DropdownButton)
