import { BookType } from "@/redux/reducers/BookReducer";

let books: BookType[] = [];

export const getBooks = () => books;

export const addBook = (book: BookType) => {
  books.push(book);
};

export const deleteBook = (id: number) => {
  books = books.filter((b) => id !== b.id);
};

export const getBookById = (id: number) => {
  return books.find((b) => b.id === id);
};

export const updateBook = (id: number, book: BookType) => {
  let updateBook = books.find((b) => b.id === id);
  if (updateBook) {
    books = books.map((b) => (b.id === id ? book : b));
  } else {
    throw new Error("Book Not Found!");
  }
};
