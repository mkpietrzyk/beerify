import * as ActionTypes from './ApiActionTypes';

const url = 'https://api.punkapi.com/v2/beers';
const itemsPerPageLimit = '?per_page=10';
const requestUrl = url + itemsPerPageLimit;

export const getBeerList = () => dispatch => {
    dispatch({type: ActionTypes.GET_INITIAL_BEER_LIST});
    fetch(requestUrl).then(
        (response) => {
            return response.json();
        }
    ).then(
        (beerList) => {
            dispatch({type: ActionTypes.GET_INITIAL_BEER_LIST_SUCCESS, beerList: beerList});
        }
    ).catch(
        (errorFetching) => {
            dispatch({type: ActionTypes.GET_INITIAL_BEER_LIST_FAILURE, beerList: [], error: errorFetching});
            console.log('error', errorFetching);
        }
    )
}

export const getBeerListAnotherPage = (page) => dispatch => {
    dispatch({type: ActionTypes.GET_BEER_LIST_ANOTHER_PAGE});
    const currentPage = '&page=' + page;
    const currentPageRequestUrl = requestUrl + currentPage;
    fetch(currentPageRequestUrl).then(
        (response) => {
            return response.json();
        }
    ).then(
        (beerListAnotherPage) => {
            dispatch({type: ActionTypes.GET_BEER_LIST_ANOTHER_PAGE_SUCCESS, beerListAnotherPage: beerListAnotherPage})
        }
    ).catch(
        (errorFetching) => {
            dispatch({type: ActionTypes.GET_BEER_LIST_ANOTHER_PAGE_FAILURE, beerListAnotherPage: [], error: errorFetching})
        }
    )
}

//
// Commented section describing schortcuts from API, which are not described.
//
// beer ABV - Alcohol By Volume - listed in percentage - can go from 2 up to 10% I guess.
// beer IBV - International Bitterness Units - listed as value from 0 to over 100 (120 at most I guess).
// beer EBC - European Beer Convention - basically a color of beer listed on scale, goes from 4 to over 100
//
//


export const getSimilarBeers = () => dispatch => {
    dispatch({type: ActionTypes.GET_SIMILAR_BEERS});
    const calculateSimilarIndex = () => {

    }

}

export const increasePageCount = (page) => dispatch => {
    const currentPage = page + 1;
    dispatch({type: ActionTypes.INCREASE_PAGE_COUNT, currentPage: currentPage})
}