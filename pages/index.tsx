import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Ammar Elkosi | Web Developer</title>
        <meta name="description" content="Bleep boop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=1000"></meta>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
