
import Header from "./components/Header/Header";
import Image from "next/image"


export default function Home() {
  const name = "Bob";

  return (
    <main className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
      <Header name={name} age={67} sex={"male"}/>
      <Header name={"suzanne"} age={56} sex={"female"}/>
      Main Page of App
      <Image src="/image1.jpg" alt="Image 1" width={500} height={200}/>

    </main>
  );
}

