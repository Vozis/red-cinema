import axios from 'axios/index';
import * as process from 'process';

export const API_URL = process.env.REACT_APP_URL;

export const getGenreApi = (string: string) => `/genres/${string}`;
export const getAuthApi = (string: string) => `/auth/${string}`;
export const getMoviesApi = (string: string) => `/movies/${string}`;
export const getActorsApi = (string: string) => `/actors/${string}`;
export const getRatingsApi = (string: string) => `/ratings/${string}`;
