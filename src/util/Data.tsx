import { TOKEN } from "./constants";
export const getData = async (url: string) => {
  const response = await fetch(`https://api.themoviedb.org/3${url}}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const Data = await response.json();
  return Data;
};
