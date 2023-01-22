import { FC, useEffect } from 'react'
import { NetworkEvents } from '../assets/const/walletConsts'
import { useAppSelector } from '../hooks/redux'
import { selectWalletAddress, selectWalletChainId, selectWalletError } from '../store/wallet'
import { showNotification } from '../utils/showNotification'
import { isCorrectNetwork } from '../utils/utils'

const NetworkController: FC = () => {
  const address = useAppSelector(selectWalletAddress)
  const chainId = useAppSelector(selectWalletChainId)
  const walletError = useAppSelector(selectWalletError)

  useEffect(() => {
    if (!window.ethereum?.isMetaMask) {
      showNotification('error', NetworkEvents.NO_METAMASK)
    }
  })

  useEffect(() => {
    if (address) {
      showNotification('success', NetworkEvents.ACCOUNT_CHANGED)
    }
  }, [address])

  useEffect(() => {
    if (walletError) {
      showNotification('error', walletError)
    }
  }, [walletError])

  useEffect(() => {
    if (!chainId) return

    const isNetworkCorrect = isCorrectNetwork(chainId)
    if (isNetworkCorrect) {
      showNotification('success', NetworkEvents.NETWORK_CHANGED)
    } else {
      showNotification('error', NetworkEvents.INCORRECT_NETWORK)
    }
  }, [chainId])

  return null
}

export default NetworkController
