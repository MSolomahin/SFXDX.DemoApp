import { RootState } from '../store'

export const walletData = (state: RootState) => state.walletReducer
export const selectWalletConnect = (state: RootState) => state.walletReducer.isWalletConnected
export const selectWalletStatus = (state: RootState) => state.walletReducer.status
export const selectWalletAddress = (state: RootState) => state.walletReducer.address
export const selectWalletError = (state: RootState) => state.walletReducer.error
export const selectWalletChainId = (state: RootState) => state.walletReducer.chainId
