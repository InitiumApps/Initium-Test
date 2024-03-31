import ContentMiddle from "@/components/ContentMiddle/ContentMiddle";
import MainContent from "@/components/MainContent/MainContent";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ContentMiddle/>
      <MainContent/>
    </>
  );
}
