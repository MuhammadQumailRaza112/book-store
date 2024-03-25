import { deleteBook, getBookById, getBooks, updateBook } from "@/lib/data";
import { BookType } from "@/redux/reducers/BookReducer";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("books/")[1];
    const book = getBookById(Number(id));
    if (book) {
      return NextResponse.json({ book }, { status: 200 });
    }
    return NextResponse.json({ message: "Error" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const book: BookType = await req.json();
    const id = req.url.split("books/")[1];
    updateBook(Number(id), book);
    const books = getBooks();
    return NextResponse.json(
      { books, msg: "Book updated Successfulyy" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("books/")[1];
    deleteBook(Number(id));
    return NextResponse.json({ msg: "Deleted Successfully" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};
