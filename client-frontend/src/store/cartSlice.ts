import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number
  name: string
  price: string
  imgUrl: string
}

type CartProduct = Product & {
  count: number
}

export interface CartState {
  value: number
  isCartShow: boolean
  cartList: CartProduct[]
}

const initialState: CartState = {
  value: 0,
  isCartShow: false,
  cartList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart: (state) => {
      state.isCartShow = true
    },
    hideCart: (state) => {
      state.isCartShow = false
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    add: (state, action: PayloadAction<Product>) => {
      const cloneList = [...state.cartList]
      const existProduct = cloneList.find(i => i.id === action.payload.id)
      if (existProduct) {
        existProduct.count += 1
      } else {
        cloneList.push({...action.payload, count: 1})
      }
      state.cartList = cloneList
    },
    reduce: (state, action: PayloadAction<Product>) => {
      const cloneList = [...state.cartList]
      const existProduct = cloneList.find(i => i.id === action.payload.id)
      if (existProduct && existProduct.count > 1) {
        existProduct.count -=1
        state.cartList = cloneList
      } else if (existProduct && existProduct.count === 1) {
        state.cartList = cloneList.filter(i => i.id != action.payload.id)
      }
    }
  },
})

export const { showCart, hideCart, add, reduce } = cartSlice.actions

export default cartSlice.reducer
