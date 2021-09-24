import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'store'

interface CollepseState {
  value: boolean
}

const initialState: CollepseState = {
  value: false
}

export const collepseSlice = createSlice({
  name: 'collepse',
  initialState,
  reducers : {
    setCollepse : (state) => {
      state.value = !state.value
      console.log("store.value", state.value)
    }
  }
})

export const { setCollepse } = collepseSlice.actions;

export const selectCollpse = (state: RootState) => state.collepse.value

export const collepseReducer =  collepseSlice.reducer;