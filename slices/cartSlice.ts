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
        removeFromCart: (state, action: PayloadAction<any>) => {
            
            const index = state.items.findIndex((cartItem: any) => cartItem.id === action.payload)
            let newCart = [...state.items]
            if (index >= 0) {
                newCart.splice(index, 1)
            } else {
                console.warn('Product does not exist')
            }

            state.items = newCart
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectItems = (state: RootState) => state.cart.items
export const selectTotal = (state: RootState) => state.cart.items.reduce((total: any, item: any) => total + item.price, 0)

export default cartSlice.reducer