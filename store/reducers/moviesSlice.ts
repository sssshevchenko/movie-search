import { IMovieAll, IResponse } from "@/types/IMovie";
import { createAction, createSlice, Reducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { fetchMovies } from "../asyncThunk/movieThunk";
import { RootState } from "../store";

const hydrate = createAction<RootState>(HYDRATE) as any;

interface InitialStateMovies {
    movies: IResponse;
    isLoading: boolean;
    error: string;
}

const initialState: InitialStateMovies = {
    movies: {} as IResponse,
    isLoading: false,
    error: ''
}   

const movieSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => 
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload as IResponse
            })
            .addCase(hydrate, (state, action) => {
                state.movies = action.payload.movies.movies
            })
})

export default movieSlice.reducer;