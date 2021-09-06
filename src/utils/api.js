// export const MOVIE_URL = "http://www.omdbapi.com/?apikey=3640c0aa&s=matrix";

// const headers = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
// };

const API_KEY = process.env.API_MOVIES_KEY;

export const getMovies = (str, type = "all") => {
  return fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
      type !== "all" ? `&type=${type}` : ""
    }`
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  });
  // .then((data) => {
  //   console.log(data);
  // })
  //   .catch((err) => console.log(err))
};
