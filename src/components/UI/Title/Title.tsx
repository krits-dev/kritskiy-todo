import { today, tomorrow } from 'data'
import './Title.scss'

interface IProps {
  text: string
  lineThrough?: boolean
  dropdown?: boolean
  open?: boolean
}

function Title({ text, lineThrough, dropdown, open }: IProps) {
  let done = lineThrough ? 'done' : ''
  let opened = open ? ':' : ''
  let taskTitleLength = text.length >= 20 ? `${text.slice(0, 17)}...` : text
  let dropdownTitle =
    text === today
      ? `Today Tasks${opened}`
      : text === tomorrow
      ? `Tomorrow Tasks${opened}`
      : `${text.substring(0, 5)} Tasks${opened}`

  return (
    <div className='title'>
      <h2 className={done}>{dropdown ? dropdownTitle : taskTitleLength}</h2>
    </div>
  )
}

Title.defaultProps = {
  text: 'Title text',
  lineThrough: false,
  dropdown: false,
  open: false,
}

export default Title
