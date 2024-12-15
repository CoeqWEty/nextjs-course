"use client";
import { useParams } from "next/navigation";

export default function Post() {
  const params =useParams();
  console.log(params.id)

  return (
    <div className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
      Post Profile ID: {params.id} Page of App
    </div>
  );
}

