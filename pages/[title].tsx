import Movies from '@/components/Movies';
import MainLayout from '@/layouts/MainLayout';
import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { GetServerSideProps } from 'next';
import { wrapper } from '@/store/store';
import { fetchMovies } from '@/store/asyncThunk/movieThunk';
import Error from '@/components/Error';

const SearchMovie = () => {
    const {movies} = useAppSelector(state => state.movies)

    return (
        <MainLayout title='Search movies'>
            <Movies movies={movies.Search} />
            {
                movies.Response === 'False' 
                ? 
                <Error color='danger' caption={movies.Error} /> 
                : 
                undefined
            }
        </MainLayout>
    );
};

export default SearchMovie;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const title = context.params?.title as string
        await store.dispatch(fetchMovies(title))
        return {
            props: {}
        }
    }
  ) 