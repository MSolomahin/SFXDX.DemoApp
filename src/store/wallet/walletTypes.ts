export type IStatus = 'initial' | 'pending' | 'fulfilled' | 'rejected'

export interface IWalletData {
  address: string
  isWalletConnected: boolean
  status: IStatus
  error: string | null
}
