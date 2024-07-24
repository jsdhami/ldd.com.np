import FileCard from "@/components/fileCard/fileCard";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <div className="flex justify-center items-center p-4 border-2 mx-8 mt-8 rounded-full">
            </div>
    <div className="flex min-h-screen flex-wrap gap-2 items-center justify-center md:justify-between p-12">   
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
    </div>
   </>
  );
}
