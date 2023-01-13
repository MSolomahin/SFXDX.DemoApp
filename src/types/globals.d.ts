export declare global {
  interface Window {
    ethereum?: {
      on: (action: string, callback: (value: any) => unknown) => void
    }
  }
}
