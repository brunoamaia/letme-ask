import { ButtonHTMLAttributes } from 'react'

import {ButtonStyles} from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonStyles
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}