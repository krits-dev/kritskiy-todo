import { memo, ChangeEvent } from 'react'
import Switch from '@mui/material/Switch'
import './Switch.scss'

interface ISwitchComponent {
  isChecked: boolean
  onClickAction: (e: ChangeEvent<HTMLInputElement>) => void
}

function SwitchComponent({ isChecked, onClickAction }: ISwitchComponent) {
  return (
    <div className='dropdown-item-switch-wrapper'>
      <Switch className='switch' checked={isChecked} onChange={onClickAction} />
    </div>
  )
}

SwitchComponent.defaultProps = {
  isChecked: false,
  onClickAction: () => null,
}

export default memo(SwitchComponent)
