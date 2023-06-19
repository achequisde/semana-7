import Image from "next/image";
import { card, cardImage } from "./DogCard.module.css";

import { capitalize } from "@/utils";

export default function DogCard({ breed, image }) {
  const breedNameCapitalized = capitalize(breed);

  return (
    <article className={card}>
      <h2>{breedNameCapitalized}</h2>
      <Image
        className={cardImage}
        alt={`${breedNameCapitalized} dog.`}
        src={image}
        width={400}
        height={400}
      ></Image>
    </article>
  );
}
