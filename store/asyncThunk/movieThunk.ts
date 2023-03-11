import { IMovieOne, IResponse } from "@/types/IMovie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
    'movies/get',
    async (title: string, thunkApi) => {
        try {
            const response = await axios.get<IResponse>(`https://www.omdbapi.com/?apikey=fa6bdee&s=${title}`)
            return response.data
        } catch(e) {
            thunkApi.rejectWithValue('Movie not found!')
        }
    }
)

export const fetchMovie = createAsyncThunk(
    'movie/get',
    async (id: string, thunkApi) => {
        try {
            const response = await axios.get<IMovieOne>('https://www.omdbapi.com/?apikey=fa6bdee&i=' + id)
            return response.data
        } catch(e) {
            thunkApi.rejectWithValue('Incorrect IMDb ID.')
        }
    }
)