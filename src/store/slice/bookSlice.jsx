import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "bookSlice",
    initialState: {
        books: []
    },
    reducers: {
        addBook: (state, action)=>{
            state.books.push(action.payload);
        },
        setBooks: (state,action)=>{
            state.books = action.payload;
        },
        clearBooks: (state,action)=>{
            state.books.length = 0;
        }
    }
});

export default bookSlice.reducer;
export const {addBook, setBooks, clearBooks} = bookSlice.actions;
