import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type ItemsState = {
    items: any
}

const initialState: ItemsState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action: PayloadAction<any>) => {},
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectItems = (state: RootState) => state.cart.items

export default cartSlice.reducer