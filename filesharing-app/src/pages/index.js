import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Upload from "./Upload";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Upload />
      </div>
    </>
  );
}
