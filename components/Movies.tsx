import { IMovieAll } from '@/types/IMovie';
import React, { FC } from 'react';
import MovieItem from './MovieItem';

interface MoviesProps {
    movies?: IMovieAll[]
}

const Movies: FC<MoviesProps> = ({movies}) => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {movies?.map(movie => 
                <MovieItem movie={movie} key={movie.imdbID} />    
            )}
        </div>
    );
};

export default Movies;