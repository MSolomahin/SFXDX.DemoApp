import { styled } from '@linaria/react'
import React, { FunctionComponent } from 'react'
import { P1 } from '../../assets/styles/UIKit.styled'
import { media } from '../../assets/styles/utils'
import Loader from '../loader'
import { PrimaryButtonProps } from './primaryButton.types'

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = (props) => {
  const { label, onClick, pending } = props
  return (
        <RootButton onClick={onClick} disabled={pending}>
            <P1 color={'var(--color-white)'}>{label}</P1>
            {pending && <Loader size={20} />}
        </RootButton>
  )
}

const RootButton = styled.button<{ disabled?: boolean }>`
    background-color: var(--color-green);
    box-shadow: 0px 8px 16px rgba(8, 216, 153, 0.2);
    border-radius: 8px; 
    padding: 12px 32px;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;;

    &:disabled {
        opacity: 0.5;
    }

    & ${P1} {
        margin-top: 2px;
    }
    ${media.small} {
        padding: 11px 11px;
        & ${P1} {
            font-size: var(--font-text-xs);
            
        }
    }
`

export default PrimaryButton
