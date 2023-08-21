import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../productData";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        items: productData,
        totalQuntity: 0,
        totalPrice: 0,
    },
    reducers: {
        add: function (state, action) {
            let itemIndex = state.cartList.findIndex((item) => {
                return item.id === action.payload.id;
            });
            if (itemIndex >= 0) {
                console.log(state.cartList[itemIndex].quantity);
                state.cartList[itemIndex].quantity += 1;
            } else {
                state.cartList.push(action.payload);
            }
        },
        cartTotal: function (state, action) {
            let { totalQuntity, totalPrice } = state.cartList.reduce(
                (initValue, currItem) => {
                    const { price, quantity } = currItem;
                    console.log(price, quantity);
                    const currItemTotal = price * quantity;
                    console.log(currItemTotal);
                    initValue.totalPrice += currItemTotal;
                    initValue.totalQuntity += quantity;
                    return initValue;
                },
                {
                    totalPrice: 0,
                    totalQuntity: 0,
                }
            );
            state.totalQuntity = totalQuntity;
            state.totalPrice = parseInt(totalPrice);
        },
    },
});

export const { add, cartTotal } = cartSlice.actions;

export default cartSlice.reducer;
