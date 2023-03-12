import { ReactElement } from 'react'
// import { HTMLAttributes } from 'react'
import { IntroItemContainer } from './styles'

interface IntroItemProps /* extends HTMLAttributes<HTMLDivElement> */ {
  text: string
  icon: ReactElement
  iconBgColor: string
}

export function IntroItem({ text, icon, iconBgColor }: IntroItemProps) {
  return (
    <IntroItemContainer iconBgColor={iconBgColor}>
      <span>{icon}</span>
      <span>{text}</span>
    </IntroItemContainer>
  )
}
