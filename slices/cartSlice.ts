import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type ItemsState = {
    items: any,
    deals: any,
    dealItems: any
}

const initialState: ItemsState = {
    items: [],
    deals: false,
    dealItems: []
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
        setDeals: (state, action: PayloadAction<any>) => {
            state.deals = action.payload
        },
        setDealItems: (state, action: PayloadAction<any>) => {
            state.dealItems = [...state.items, action.payload]
        }
    },
})

export const { addToCart, removeFromCart, setDeals, setDealItems } = cartSlice.actions

export const selectItems = (state: RootState) => state.cart.items
export const selectTotal = (state: RootState) => state.cart.items.reduce((total: any, item: any) => total + item.price, 0)
export const selectDeals = (state: RootState) => state.cart.deals
export const selectDealItems = (state: RootState) => state.cart.dealItems

export default cartSlice.reducer