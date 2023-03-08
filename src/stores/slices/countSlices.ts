import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppState } from "@stores/store"

interface ICount {
  count: number
}

const initialState: ICount = {
  count: 10
}

const countSlices = createSlice({
  name: "count",
  initialState,
  reducers: {
    addCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
      console.log(action)
    }
  }
})

export const getCount = (state: AppState) => state.count

export const { addCount } = countSlices.actions

export default countSlices.reducer
