export interface IMovieAll {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IMovieOne {
    Title: string;
    Year: number;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: IRatings[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
    Error: string;
}

export interface IRatings {
    Source: string;
    Value: string;
}

export interface IResponse {
    Response: string;
    Search: IMovieAll[];
    totalResults: string;
    Error: string;
}