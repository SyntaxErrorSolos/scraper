"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    //hewo
    const link = document.getElementById("link");
    const enterButton = document.getElementById("button");
    const h1 = document.getElementById("h1");
    enterButton.addEventListener("click", async () => {
      const val = link.value;
      const pattern =
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
      if (val === "") {
        h1.innerText = "No URL provided!!";
      }
      if (pattern.test(val) === true) {
        const url = "http://localhost:3001/scrape";
        await fetch(url, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          headers: {
            urls: val,
          },
        })
          .then((response) => response.text())
          .then((html) => alert(html));
        //yes i shamelessly copied this from mozilla's example. cry about it.
      } else return (h1.innerText = "Invalid URL!");
    });
  }, []);

  return (
    <main className="flex h-screen items-center justify-center space-x-3">
      <h1 id="h1" className="text-white font-bold text-center">
        Enter a url :D
      </h1>
      <input
        id="link"
        placeholder="Please enter a URL"
        className="text-center rounded-lg text-black"
      ></input>
      <button id="button" className="bg-white rounded-lg text-black">
        Enter!
      </button>
    </main>
  );
}
