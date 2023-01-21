import React, { FC } from 'react'
import LinkedIcon from '../assets/icons/linkedIcon'
import MetamaskIcon from '../assets/icons/metamaskIcon'
import ButtonWithIcons from '../elements/buttonWithIcons'
import PrimaryButton from '../elements/primaryButton'
import { walletConnect } from '../store/wallet/walletReducer'
import { getShort } from '../utils/utils'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { walletData } from '../store/wallet'

const HeaderButton: FC = () => {
  const { isWalletConnected, address, status } = useAppSelector(walletData)
  const dispatch = useAppDispatch()

  return (
    <>
      {isWalletConnected
        ? <ButtonWithIcons
          label={getShort(address)}
          iconLeft={<MetamaskIcon />}
          iconRight={<LinkedIcon />}
        />
        : <PrimaryButton
          pending={status === 'pending'}
          label="Connect Wallet"
          onClick={() => dispatch(walletConnect())}
          disabled={!window.ethereum?.isMetaMask}
        />
      }
    </>
  )
}

export default HeaderButton
