import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Button className="px-10">Hello</Button>
      {/* It has several variant like 
      <Button variant="destructive" className="px-10">Hello</Button>
      */}
    </main>
  );
}
