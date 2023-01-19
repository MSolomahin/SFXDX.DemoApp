import { styled } from '@linaria/react'
import React, { FC, memo } from 'react'
import LogoIcon from '../../assets/icons/logo'
import { media } from '../../assets/styles/utils'
import HeaderButton from '../../containers/headerButton'

const Header: FC = () => {
  return (
    <Root>
      <IconContainer>
        <LogoIcon />
      </IconContainer>
      <HeaderButton />
    </Root>
  )
}

const Root = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  border-bottom: 1px solid #CDD2DD;
  padding: 0 70px;
  position: relative;

  ${media.middle} {
    justify-content: space-between;
    padding: 0 40px;
  }
  ${media.small} {
    padding: 0 20px;
    height: 70px;
  }
`

const IconContainer = styled.div`
  position: absolute;
  display: flex;
  top: calc(50% - 12.5px);
  left: calc(50% - 75px);
  ${media.middle} {
    position: initial;
  }
  ${media.small} {
    width: 100px;
  }
`

export default memo(Header)
