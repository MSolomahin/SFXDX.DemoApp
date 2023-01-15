import { styled } from '@linaria/react'
import React, { FunctionComponent } from 'react'
import { P1 } from '../../assets/styles/UIKit.styled'
import { media } from '../../assets/styles/utils'
import Loader from '../loader'
import { PrimaryButtonProps } from './primaryButton.types'

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = (props) => {
  const { label, onClick, pending } = props
  return (
    <RootButton onClick={onClick} pending={pending} disabled={pending}>
      <P1 color={'var(--color-white)'}>{label}</P1>
      {pending && <LoaderContainer>
        <Loader size={20} />
      </LoaderContainer>
      }
    </RootButton>
  )
}

const RootButton = styled.button<{ pending?: boolean }>`
    background-color: var(--color-green);
    box-shadow: 0px 8px 16px rgba(8, 216, 153, 0.2);
    border-radius: 8px; 
    padding: 12px 32px;
    display: flex;
    align-items: center;
    position: relative;
    gap: 15px;
    justify-content: center;

    &:disabled {
        opacity: 0.5;
    }

    & ${P1} {
        opacity: ${(props) => (props.pending ? 0 : 1)};
        margin-top: 2px;
    }
    ${media.small} {
        padding: 11px 11px;
        & ${P1} {
            font-size: var(--font-text-xs);
            
        }
    }
`

const LoaderContainer = styled.div`
    position: absolute;
    left: calc(50% - 10px);
    top: calc(50% - 10px);`

export default PrimaryButton
