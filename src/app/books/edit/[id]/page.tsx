"use client";
import React from "react";
import EditForm from "./form";

const EditBook = ({ params }: { params: { id: string } }) => {
  console.log("parms id", params.id);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <EditForm bookId={Number(params.id)} />
    </main>
  );
};

export default EditBook;
