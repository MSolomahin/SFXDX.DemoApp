import { styled } from '@linaria/react'
import React, { FC, memo } from 'react'
import CloseIcon from '../../assets/icons/closeIcon'
import { P1, P2 } from '../../assets/styles/UIKit.styled'
import { media } from '../../assets/styles/utils'
import PrimaryButton from '../primaryButton'
import { ModalProps } from './modal.types'

const Modal: FC<ModalProps> = (props) => {
  const { title, description, onClose } = props
  return (
        <Container>
            <RootModal>
                <Header>
                    <P1>{title}</P1>
                    <IconContainer onClick={onClose}>
                        <CloseIcon />
                    </IconContainer>
                </Header>
                <P2>{description}</P2>
                <PrimaryButton label={'Okay'} onClick={onClose} />
            </RootModal>
        </Container>
  )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const RootModal = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(132, 132, 132, 0.2);
    border-radius: 16px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 400px;
    margin: 0 10px;
    ${media.small} {
        padding: 30px;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const IconContainer = styled.button`
    cursor: pointer;
`

export default memo(Modal)
