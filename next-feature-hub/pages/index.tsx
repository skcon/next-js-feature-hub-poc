import Link from "next/link";
import { useEffect } from "react";
import { dataEvent } from "../lib/googleAnalyticsMock";

function Home() {
  useEffect(() => {
    console.log('I ran inside the useEffect')
    if (window && !window.vbo) {
      window.vbo = dataEvent;
      console.log('I ran in NextJS use effect hook, and window.vbo is:', window.vbo);
    }
  }, []);

  return (
    <>
      <header>
        <div>This is a Next js header hosted inside the feature hub</div>
        <Link href="/federated/1234">To Federated App</Link>
      </header>
      <br />
      <p>This is our next site</p>
    </>
  );
}

export default Home;
