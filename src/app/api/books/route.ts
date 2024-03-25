import { addBook, getBooks } from "@/lib/data";
import { BookType } from "@/redux/reducers/BookReducer";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const books = getBooks();
    return NextResponse.json({ books }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error", err },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: Request, res: Response) => {
  const { author, desc, title, year }: BookType = await req.json();
  try {
    const book = { id: Math.random(), title, desc, year, author };
    addBook(book);
    return NextResponse.json(
      { book, msg: "Book posted Successfulyy" },
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
