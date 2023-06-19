// 1. Fetch breed list
// 2. Randomize 10 breeds
// 3. Fetch random image of each

const DOGS_API = "https://dog.ceo/api";
const BREED_LIST = `${DOGS_API}/breeds/list/all`;

import { getRandomElementsFromArray } from "@/utils";

export default async function handler(req, res) {
  const { message: breedList } = await fetch(BREED_LIST).then((data) =>
    data.json()
  );

  const breedNames = Object.keys(breedList);

  const breedsArray = getRandomElementsFromArray({
    amountOfElements: 10,
    array: breedNames,
  });

  const breedsImages = await Promise.all(
    breedsArray.map((breed) =>
      fetch(`${DOGS_API}/breed/${breed}/images/random`).then((data) =>
        data.json()
      )
    )
  );

  res.status(200).json(
    breedsImages.map((breed, index) => {
      return {
        id: crypto.randomUUID(),
        breed: breedsArray[index],
        image: breed.message,
      };
    })
  );
}
