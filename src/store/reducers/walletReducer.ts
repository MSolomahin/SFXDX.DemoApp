import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import Web3 from 'web3'
import { Errors } from '../../assets/const/errorConsts'
import { isCorrectNetwork } from '../../utils/utils'

export type IStatus = 'initial' | 'pending' | 'fulfilled' | 'rejected'

interface IWalletData {
  wallet: string
  isWalletConnected: boolean
  status: IStatus
  error: string | null
}

export const initialState: IWalletData = {
  wallet: '',
  isWalletConnected: false,
  status: 'initial',
  error: null
}

export const walletConnect = createAsyncThunk(
  'wallet/walletConnection',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const provider = window.ethereum
      if (provider == null) return

      const web3 = new Web3(Web3.givenProvider)
      const providerAccounts = await web3.eth.requestAccounts()

      const networkId = await web3.eth.net.getId()
      const isNetworkCorrect = isCorrectNetwork(networkId)
      if (!isNetworkCorrect) {
        throw new Error(Errors.WRONG_NETWORK)
      }

      window.ethereum?.on('accountsChanged', (accounts: string[]) => {
        dispatch(walletReducerSlice.actions.changeAccount(accounts[0]))
      })

      window.ethereum?.on('chainChanged', (networkId: string) => {
        dispatch(walletReducerSlice.actions.changeNetwork(networkId))
      })

      return providerAccounts[0]
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const walletReducerSlice = createSlice({
  name: 'walletData',
  initialState,
  reducers: {
    resetState (state) {
      state.status = 'initial'
      state.error = null
    },
    changeAccount (state, action) {
      state.wallet = state.wallet ? action.payload : ''
      toast.success('Account changed')
    },
    changeNetwork (state, action) {
      const newNetworkId = action.payload
      const isNetworkCorrect = isCorrectNetwork(newNetworkId)
      if (!isNetworkCorrect) {
        toast.error("Network changed but it's not correct")
        state.wallet = ''
        state.isWalletConnected = false
      } else {
        toast.success('Network changed')
      }
    }
  },
  extraReducers: {
    [walletConnect.pending.type]: (state) => {
      state.status = 'pending'
    },
    [walletConnect.fulfilled.type]: (state, action) => {
      state.status = 'fulfilled'
      state.isWalletConnected = true
      state.wallet = action.payload
    },
    [walletConnect.rejected.type]: (state, action) => {
      state.status = 'rejected'
      state.isWalletConnected = false
      state.error = action.payload
    }
  }
})

export default walletReducerSlice.reducer
