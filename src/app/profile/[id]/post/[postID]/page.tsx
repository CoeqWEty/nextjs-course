"use client";
import { useParams } from "next/navigation";

export default function PostID() {
  const params =useParams();
  console.log(params.postID);
  console.log(params.id);

  return (
    <div className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
      postID of Posts of Profile Page of App
    </div>
  );
}

