import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    pages: ['feed','profile','createpost','home','signup','login']
  },
  reducers: {
   
  }
})

//export const {  } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})


export default store