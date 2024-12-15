
"use client";
import { useRouter } from "next/navigation";
import Link from 'next/link'



export default function Profile(){
  const router = useRouter();
  console.log(useRouter);
 // <li onClick={() => router.push("/profile/1")}>Profile 1</li>;
  
  return (
    
      <div>
         <h1>Mylist of profiles Profile Page of App</h1>
         <div>
         <ul>
          <li><Link href="/profile/1">Profile 1</Link></li>
          <li><Link href="/profile/2">Profile 2</Link></li>
          <li><Link href="/profile/3">Profile 3</Link></li>
        </ul>
        </div>
        </div>
    );

  }


