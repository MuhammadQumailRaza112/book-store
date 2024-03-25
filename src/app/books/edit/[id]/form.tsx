"use client";
import { BookType, editBooks } from "@/redux/reducers/BookReducer";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface IEditFormProps {
  bookId: number;
}

const EditForm = ({ bookId }: IEditFormProps) => {
  console.log("book id", bookId);
  const router = useRouter();
  const [fields, setFields] = useState<BookType>({
    id: Math.random(),
    title: "",
    author: "",
    year: "",
    desc: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const resetFields = useCallback(() => {
    setFields({
      id: Math.random(),
      title: "",
      author: "",
      year: "",
      desc: "",
    });
  }, []);
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(editBooks(fields));
      resetFields();
      router.replace("/books");
    },
    [dispatch, fields, resetFields, router]
  );

  const getBook = useCallback(async () => {
    if (bookId) {
      const res = await fetch(`http://localhost:3000/api/books/${bookId}`);
      const data = await res.json();
      console.log("data", data);
      setFields({
        id: bookId,
        title: data?.book?.title,
        author: data?.book?.author,
        year: data?.book?.year,
        desc: data?.book?.desc,
      });
    }
  }, [bookId]);

  useEffect(() => {
    getBook();
  }, [getBook, bookId]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            value={fields.title}
            onChange={(e) => setFields({ ...fields, title: e.target.value })}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Title"
            required
          />
        </div>
        <div>
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author
          </label>
          <input
            value={fields.author}
            onChange={(e) => setFields({ ...fields, author: e.target.value })}
            type="text"
            id="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Author"
            required
          />
        </div>
        <div>
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year Of Publication
          </label>
          <input
            value={fields.year}
            onChange={(e) => setFields({ ...fields, year: e.target.value })}
            type="text"
            id="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Year"
            required
          />
        </div>
        <div>
          <label
            htmlFor="desc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            value={fields.desc}
            onChange={(e) => setFields({ ...fields, desc: e.target.value })}
            type="text"
            id="desc"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Description"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="py-2.5 px-5 me-2 items-center mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Done
      </button>
    </form>
  );
};

export default EditForm;
