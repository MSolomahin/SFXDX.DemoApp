import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Web3 from 'web3'
import { Errors } from '../../assets/const/errorConsts'
import { showNotification } from '../../utils/showNotification'
import { isCorrectNetwork } from '../../utils/utils'
import { IWalletData } from './walletTypes'

export const initialState: IWalletData = {
  address: '',
  isWalletConnected: false,
  status: 'initial',
  error: null
}

export const walletConnect = createAsyncThunk(
  'wallet/walletConnection',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const provider = window.ethereum
      if (!provider) throw new Error(Errors.METAMASK_IS_NOT_INSTALLED)

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
    resetState(state) {
      state.status = 'initial'
      state.error = null
    },
    changeAccount(state, action) {
      state.address = state.address ? action.payload : ''
      showNotification('success', 'Account changed')
    },
    changeNetwork(state, action) {
      const newNetworkId = action.payload
      const isNetworkCorrect = isCorrectNetwork(newNetworkId)
      if (!isNetworkCorrect) {
        showNotification('error', 'Network changed but it\'s not correct')
        state.address = ''
        state.isWalletConnected = false
      } else {
        showNotification('success', 'Network changed')
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(walletConnect.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(walletConnect.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.isWalletConnected = true
        state.address = action.payload
      })
      .addCase(walletConnect.rejected, (state, action) => {
        state.status = 'rejected'
        state.isWalletConnected = false
        if (typeof action.payload === 'string') {
          state.error = action.payload
        } else {
          state.error = Errors.SOMETHING_WENT_WRONG
        }
        showNotification('error', state.error)
      })
  }
})

export default walletReducerSlice.reducer
