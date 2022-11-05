import Head from "next/head";
import Navbar from "../src/components/layouts/navbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <meta title=""/>
      </Head>

      <main className="">
        <Navbar />
        {/* <LikedList/> */}
      </main>

      <footer className=""></footer>
    </div>
  );
}
