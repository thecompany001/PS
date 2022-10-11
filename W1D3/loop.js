let str = "";

for (let i = 1; i < 8; i++) {
  str += "#";
  console.log(str);
}

let nums = [2, 4, 18, 90, 45];

let movies = ["50 ball", "inter", "El"];
let firstMovie = movies[1];

movies.push("Shawshank", "BESTA");

movies.unshift("Star Wars");

console.log(movies);
movies.pop();
movies.shift();

movies.splice(1, 0, "Toy Story", "Lord of Rangs");

let removeMovies = movies.splice(0, 3);

console.log(movies);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
