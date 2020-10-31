interface IBookmark {
  id: number
  time: number
}

export interface IMovie {
  id: number
  title: string
  boxart: string
  uri: string
  rating: number
  bookmark: IBookmark[]
}

export interface IMovieList {
  name: string
  videos: IMovie[]
}

export interface IMovieTitle {
  id: number
  title: string
}
