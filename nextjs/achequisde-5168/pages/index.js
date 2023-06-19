import Head from "next/head";

import { useEffect, useState } from "react";

import DogCard from "@/components/DogCard";

export default function Home() {
  let [dogsList, setDogsList] = useState([]);

  useEffect(() => {
    (async () => {
      let dogsData = await fetch("/api/dogs").then((data) => data.json());

      setDogsList(dogsData);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Perritos</title>
        <meta name="description" content="Imagenes de perritos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="cards-container">
        {dogsList.map((dogData) => (
          <DogCard key={dogData.id} {...dogData} />
        ))}
      </main>
    </>
  );
}
