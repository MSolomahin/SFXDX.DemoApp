export const correctNetwork = [5]

export enum NetworkEvents {
  NO_METAMASK = 'Please install Metamask',
  ACCOUNT_CHANGED = 'Account changed',
  NETWORK_CHANGED = 'Network changed',
  INCORRECT_NETWORK = "Network changed but it's not correct"
}
