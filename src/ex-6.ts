import { IMovie } from "./lib/IMovie"

// Use forEach() to collect only those videos with a rating of 5.0
function exercise() {
  const newReleases: IMovie[] = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: 4.0,
      bookmark: [],
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: 5.0,
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: 4.0,
      bookmark: [],
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: 5.0,
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ]
  const videos: IMovie[] = []

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate every video with a rating of 5.0
  // ------------ INSERT CODE HERE! -----------------------------------
  newReleases.forEach(movie => {
    if (movie.rating == 5) videos.push(movie)
  })

  return videos
}

console.log(exercise())
