import React, { FC } from 'react'
import LinkedIcon from '../../assets/icons/linkedIcon'
import MetamaskIcon from '../../assets/icons/metamaskIcon'
import ButtonWithIcons from '../../elements/buttonWithIcons'
import PrimaryButton from '../../elements/primaryButton'
import { walletConnect, walletReducerSlice } from '../../store/reducers/walletReducer'
import { getShort } from '../../utils/utils'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import Modal from '../../elements/modal'
import { Errors } from '../../assets/const/errorConsts'

const HeaderButton: FC = () => {
  const { wallet, status, isWalletConnected, error } = useAppSelector((state) => state.walletReducer)

  const dispatch = useAppDispatch()

  const onClose = () => {
    dispatch(walletReducerSlice.actions.resetState())
  }
  return (
    <>
      {isWalletConnected
        ? <ButtonWithIcons
          label={getShort(wallet)}
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
      {status === 'rejected' && error === Errors.WRONG_NETWORK &&
        <Modal
          title='Wrong Network'
          description='Wrong network, please switch to Goerli network.'
          onClose={onClose} />}
    </>
  )
}

export default HeaderButton
