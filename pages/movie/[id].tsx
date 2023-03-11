import MainLayout from '@/layouts/MainLayout';
import { fetchMovie } from '@/store/asyncThunk/movieThunk';
import { wrapper } from '@/store/store';
import { useAppSelector } from '@/store/hooks';
import { GetServerSideProps } from 'next';
import React from 'react';
import MovieDetail from '@/components/MovieDetail';

const MoviePage = () => {
    const {movie} = useAppSelector(state => state.movie)

    return (
        <MainLayout title={movie.Title}>
            <MovieDetail movie={movie} />
        </MainLayout>
    );
};

export default MoviePage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    store => async (context) => {
        const id = context.params?.id as string
        await store.dispatch(fetchMovie(id))
        
        return {
            props: {}
        }
    }
)