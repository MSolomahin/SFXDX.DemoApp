import { correctNetwork } from '../assets/const/walletConsts'

export const getShort = (text: string): string => {
  const rebuildText = text.slice(0, 10) + '...' + text.slice(-4)
  return rebuildText
}

export const isCorrectNetwork = (currentNetwork: number | string): boolean => {
  return correctNetwork.includes(Number(currentNetwork))
}
