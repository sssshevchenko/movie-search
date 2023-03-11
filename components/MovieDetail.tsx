import { IMovieOne } from '@/types/IMovie';
import React, { FC } from 'react';
import { Button, Card } from 'react-bootstrap';

interface MovieDetailProps {
    movie: IMovieOne;
}

export const getFavourites = () => {
    if(typeof window !== 'undefined') {
        const favouritesLocal = localStorage.getItem('favourites')
    
        if(favouritesLocal !== null) {
            return JSON.parse(favouritesLocal)
        }
        return []  
    }
}

const MovieDetail: FC<MovieDetailProps> = ({movie}) => {

    const onClikHandler = () => {
        const arr: IMovieOne[] = getFavourites()
        const index = arr.indexOf(movie)

        if(index === -1) {
            arr.push(movie)
        }
        localStorage.setItem('favourites', JSON.stringify(arr))
    }

    return (
        <Card style={{ width: '100%' }} border='light' className='p-3'>
            <Card.Title style={{fontSize: 30, margin: '15px 0'}}>{movie.Title}</Card.Title>
            <Card.Body className='d-flex'>
                <Card.Img variant="top" src={movie.Poster} style={{height: 'auto', width: 250}}/>
                <Card.Text style={{marginLeft: 30}}>
                    <div className='d-flex'>
                        <div style={{color: '#605D5C', fontSize: 19}}>Ratings:</div>                        
                        <div className='d-flex flex-column' style={{marginLeft: 10}}>
                            {movie.Ratings.map((rating, index) => 
                                <div key={index}>{rating.Source}: {rating.Value}</div>
                            )}
                        </div>    
                    </div>
                    <div className='d-flex mt-3 align-items-center'>
                        <div style={{color: '#605D5C', fontSize: 18}}>Release Date:</div>
                        <div style={{marginLeft: 10}}>{movie.Released}</div>
                    </div>
                    <div className='d-flex mt-3 align-items-center'>
                        <div style={{color: '#605D5C', fontSize: 18}}>Genre:</div>
                        <div style={{marginLeft: 10}}>{movie.Genre}</div>
                    </div>
                    <div className='d-flex mt-3 align-items-center'>
                        <div style={{color: '#605D5C', fontSize: 18}}>Country:</div>
                        <div style={{marginLeft: 10}}>{movie.Country}</div>
                    </div>
                    <div className='d-flex mt-3 align-items-center'>
                        <div style={{color: '#605D5C', fontSize: 18}}>Production:</div>
                        <div style={{marginLeft: 10}}>{movie.Production}</div>
                    </div>
                    <div className='d-flex mt-3 align-items-center'>
                        <div style={{color: '#605D5C', fontSize: 18}}>Director:</div>
                        <div style={{marginLeft: 10}}>{movie.Director}</div>
                    </div>
                    <div className='d-flex mt-3 align-items-center'>
                        <div style={{color: '#605D5C', fontSize: 18}}>Writer:</div>
                        <div style={{marginLeft: 10}}>{movie.Writer}</div>
                    </div>
                    <div className='d-flex mt-3 align-items-center'>
                        <div style={{color: '#605D5C', fontSize: 18}}>Awards:</div>
                        <div style={{marginLeft: 10}}>{movie.Awards}</div>
                    </div>
                    <div className='d-flex mt-3 align-items-center'>
                        <div style={{color: '#605D5C', fontSize: 18}}>Actors:</div>
                        <div style={{marginLeft: 10}}>{movie.Actors}</div>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Text style={{fontSize: 25, margin: '25px 0'}}>
                What the movie «{movie.Title}» is about:
            </Card.Text>
            <Card.Text>{movie.Plot}</Card.Text>
            <Button
                style={{width: 200}} 
                className='mt-3'
                onClick={onClikHandler}
                variant="outline-success"
            >
                Add to Favourite
            </Button>
        </Card>
    );
};

export default MovieDetail;