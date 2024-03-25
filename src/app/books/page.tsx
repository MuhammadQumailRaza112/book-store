import Table from "@/components/Table";
import Link from "next/link";

export default function Books() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/books/add">
        <button
          type="button"
          className="text-white bg-blue-900  mb-3 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add a Book
        </button>
      </Link>
      <Table />
    </main>
  );
}
