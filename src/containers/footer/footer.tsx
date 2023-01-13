import { styled } from '@linaria/react'
import React, { FunctionComponent } from 'react'
import FacebookIcon from '../../assets/icons/facebookIcon'
import InstagramIcon from '../../assets/icons/instagramIcon'
import LogoIcon from '../../assets/icons/logo'
import TwitterIcon from '../../assets/icons/twitterIcon'
import YoutubeIcon from '../../assets/icons/youtubeIcon'
import { P2, P3 } from '../../assets/styles/UIKit.styled'
import { media } from '../../assets/styles/utils'

const Footer: FunctionComponent = () => {
  return (
        <RootFooter>
            <FooterTop>
                <Links>
                    <LinksItem><P2 color={'var(--color-text-tertiary)'}>Privacy Policy</P2></LinksItem>
                    <LinksItem><P2 color={'var(--color-text-tertiary)'}>Terms & Conditions</P2></LinksItem>
                    <LinksItem><P2 color={'var(--color-text-tertiary)'}>Cookie Policy</P2></LinksItem>
                </Links>
                <IconContainer>
                <LogoIcon />
                </IconContainer>
                <Socials>
                    <FacebookIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                    <InstagramIcon />
                </Socials>
            </FooterTop>
            <FooterRights>
                <P3 color={'var(--color-text-tertiary)'}>©2022 All rights reserved. Powered by Atla</P3>
            </FooterRights>
        </RootFooter>
  )
}

const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    
    ${media.middle} {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`

const IconContainer = styled.div`
    ${media.middle} {
        order: 0;
        margin-bottom: 30px;
    }
`
const RootFooter = styled.footer`
    background: #F0F5F5;
    width: 100%;
    border-top: 1px solid #CDD2DD;
    padding: 50px 70px;
`

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style-type: none;
    width: 186px;
    ${media.middle} {
        order: 1;
        text-align: center;
    }
`

const LinksItem = styled.li`
    color: var(--color-text-secondary);
`

const Socials = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    width: 186px;
    ${media.middle} {
        order: 3;
    }
`

const FooterRights = styled.div`
    margin-top: 30px;
    text-align: center;
`

export default Footer
