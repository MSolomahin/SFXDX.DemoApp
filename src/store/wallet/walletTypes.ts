export type IStatus = 'initial' | 'pending' | 'fulfilled' | 'rejected'

export interface IWalletData {
  address: string
  chainId: number | null
  isWalletConnected: boolean
  status: IStatus
  error: string | null
}
