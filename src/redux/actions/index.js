/**Imports  */
import { GET_ALL_GAMES, GET_GAME_BY_NAME, GET_GENRES, GET_PLATFORMS } from '../actionTypes/action-types';
import axios from 'axios';

/**endpoints */
const GET_ALL_VIDEO_GAMES = '/videogames/';
const GET_VIDEO_GAME_BY_NAME = '/videogames/';
const GET_ALL_GENRES = '/genres/';
const GET_ALL_PLATFORMS = '/platforms/';

export const getAllVideoGames = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(GET_ALL_VIDEO_GAMES);
            const { data } = response;
            return dispatch({
                type: GET_ALL_GAMES,
                payload: data,
            });
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

export const getVideoGameByName = (params, filtName) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(GET_VIDEO_GAME_BY_NAME,
                {
                    params:
                    {
                        ...params,
                        filtName
                    }
                });
            const { data } = response;
            return dispatch({
                type: GET_GAME_BY_NAME,
                payload: data,
            });
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

export const getAllGenres = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(GET_ALL_GENRES);
            const { data } = response;
            return dispatch({
                type: GET_GENRES,
                payload: data,
            });
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

export const getAllPlatforms = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(GET_ALL_PLATFORMS);
            const { data } = response;
            return dispatch({
                type: GET_PLATFORMS,
                payload: data,
            });
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

