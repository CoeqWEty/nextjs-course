"use client";
import { useParams } from "next/navigation";

export default function PostID() {
  const params =useParams();
  console.log(params.id);

  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      posts of profile Page of App
    </div>
  );
}


