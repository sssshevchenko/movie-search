import { IMovieOne } from "@/types/IMovie";
import { createAction, createSlice, Reducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { fetchMovie } from "../asyncThunk/movieThunk";
import { RootState } from "../store";

const hydrate = createAction<RootState>(HYDRATE) as any;

interface InitialStateMovie {
    movie: IMovieOne;
    isLoading: boolean;
    error: string;
}

const initialState: InitialStateMovie = {
    movie: {} as IMovieOne,
    isLoading: false,
    error: ''
}

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.movie = action.payload as IMovieOne
            })
            .addCase(fetchMovie.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
            .addCase(hydrate, (state, action) => {
                state.movie = action.payload.movie.movie as IMovieOne
            })
})

export default movieSlice.reducer;