import { IMovieAll } from '@/types/IMovie';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Card, CardImg } from 'react-bootstrap';

interface MovieProps {
    movie: IMovieAll
}

const MovieItem: FC<MovieProps> = ({movie}) => {
    const router = useRouter()

    return (
        <Card 
            style={{ width: '18rem', cursor: 'pointer' }} 
            className='m-2'
            onClick={() => router.push('/movie/' + movie.imdbID)}
        >
            <Card.Img variant="top" src={movie.Poster} alt='Poster' />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                    {movie.Year}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieItem;