import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import { Card } from 'react-bootstrap';
import { getFavourites } from '@/components/MovieDetail';
import { IMovieOne } from '@/types/IMovie';
import Error from '@/components/Error';

const Index = () => {
    const favourites: IMovieOne[] = getFavourites()

    return (
        <MainLayout title='Favourites'>
            <div className='d-flex'>
                {favourites?.map(movie =>   
                    <Card 
                        style={{ width: '18rem'}} 
                        className='m-2'
                        key={movie.imdbID}
                    >
                        <Card.Img variant="top" src={movie.Poster} alt='Poster' />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                        </Card.Body>
                    </Card>
                )}
            </div>
            {!favourites?.length && <Error color='light' caption='You have not added anything' />}
        </MainLayout>
    );
};

export default Index;