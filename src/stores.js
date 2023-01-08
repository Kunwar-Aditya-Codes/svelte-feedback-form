import { writable } from "svelte/store";

export const feedbackStore = writable([
  {
    id: 1,
    rating: 5,
    text: "This is a test feedback",
  },
  {
    id: 2,
    rating: 4,
    text: "This is a test feedback",
  },
  {
    id: 3,
    rating: 3,
    text: "This is a test feedback",
  },
]);
