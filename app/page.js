import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    //hewo
  }, []);

  return (
    <main className="flex h-screen items-center justify-center">
      <input
        placeholder="Please enter a URL"
        className="text-center rounded-lg text-black"
      ></input>
    </main>
  );
}
