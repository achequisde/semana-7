import { getRandomNumber } from "./getRandomNumber.js";

export function getRandomElementsFromArray({
  amountOfElements,
  array,
}) {
  const randomSet = new Set();

  while (randomSet.size < amountOfElements) {
    let randomNumber = getRandomNumber({ end: array.length });
    randomSet.add(array[randomNumber]);
  }

  return Array.from(randomSet);
}
