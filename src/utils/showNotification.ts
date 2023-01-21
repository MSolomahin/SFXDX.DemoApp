import { toast } from 'react-hot-toast'

export const showNotification = (
  type: 'success' | 'error',
  message: string
) => {
  toast[type](message)
}
