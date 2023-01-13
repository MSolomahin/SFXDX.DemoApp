import { styled } from '@linaria/react'
import React, { FunctionComponent } from 'react'
import { P3 } from '../../assets/styles/UIKit.styled'
import { ButtonWithIconsProps } from './buttonWithIcons.types'

const ButtonWithIcons: FunctionComponent<ButtonWithIconsProps> = (props) => {
  const { label, onClick, iconLeft, iconRight } = props
  return (
    <RootButton onClick={onClick}>
      {iconLeft}
      <P3 color={'var(--color-green)'}>{label}</P3>
      {iconRight}
    </RootButton>
  )
}

const RootButton = styled.button`
    background: #FFFFFF;  
    border-radius: 20px;
    padding: 10px 12px;
    display: flex;
    gap: 8px;
    align-items: center;

    & > ${P3} {
      margin-top: 3px;
    }
`

export default ButtonWithIcons
