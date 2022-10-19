import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface KycState {
//     // idAccount?: number,
//     // idAccountSpouse?: number,
//     // membershipId?: string,
// }
export interface Movie {
    id: string,
    title: string,
    category: string,
    likes: number,
    dislikes: number,
}

export interface MoviesState {
    movies: Movie[],
}

const initialState: MoviesState = {
  movies:[],
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state: MoviesState, action: PayloadAction<Movie>) => {
            state.movies = [...state.movies,{
                id: action.payload.id,
                title: action.payload.title,
                category: action.payload.category,
                likes: action.payload.likes,
                dislikes: action.payload.dislikes,
            }];
        },
}});

export const {
    addMovie
} = moviesSlice.actions;

export default moviesSlice.reducer;