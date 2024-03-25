import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type BookType = {
  id: number;
  title: string;
  author: string;
  year: string;
  desc: string;
};

type BookState = {
  list: BookType[];
  user: string;
};

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const result = await fetch("http://localhost:3000/api/books");
  const data = await result.json();
  return data;
});

export const addBooks = createAsyncThunk("addBooks", async (book: BookType) => {
  const res = await fetch("http://localhost:3000/api/books", {
    method: "POST",
    body: JSON.stringify(book),
  });
  return res.json();
});

export const editBooks = createAsyncThunk(
  "editBooks",
  async (book: BookType) => {
    const res = await fetch(`http://localhost:3000/api/books/${book.id}`, {
      method: "PUT",
      body: JSON.stringify(book),
    });
    const data = await res.json();
    return data;
  }
);

const initialState: BookState = {
  list: [],
  user: "books",
};

export const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addbook: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.list = [...action.payload.books];
    });
    builder.addCase(addBooks.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(editBooks.fulfilled, (state, action) => {
      state.list = action.payload.books;
    });
  },
});

export const { addbook } = BookSlice.actions;
export default BookSlice.reducer;
