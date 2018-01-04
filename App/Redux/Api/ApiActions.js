import * as ActionTypes from './ApiActionTypes';

const apiUrl = 'https://api.punkapi.com/v2/beers';
const itemsPerPageLimitQuery = '?per_page=10';
const requestUrl = apiUrl + itemsPerPageLimitQuery;

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
    const currentPageQuery = '&page=' + page;
    const currentPageRequestUrl = requestUrl + currentPageQuery;
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
            dispatch({
                type: ActionTypes.GET_BEER_LIST_ANOTHER_PAGE_FAILURE,
                beerListAnotherPage: [],
                error: errorFetching
            })
        }
    )
}


export const getSimilarBeers = (beerDetails) => dispatch => {
    dispatch({type: ActionTypes.GET_SIMILAR_BEERS});

    //
    // Commented section describing schortcuts from API, which are not described.
    // beer ABV - Alcohol By Volume - listed in percentage - can go from 2 up to 10% I guess.
    // beer IBV - International Bitterness Units - listed as value from 0 to over 100 (120 at most I guess).
    // beer EBC - European Beer Convention - basically a color of beer listed on scale, goes from 4 to over 100
    //

    const lowerABV = parseFloat(beerDetails.abv - 1).toFixed(0);
    const upperABV = parseFloat(beerDetails.abv + 1).toFixed(0);
    const lowerIBU = parseFloat(beerDetails.ibu - 5).toFixed(0);
    const upperIBU = parseFloat(beerDetails.ibu + 5).toFixed(0);
    const lowerEBC = parseFloat(beerDetails.ebc - 5).toFixed(0);
    const upperEBC = parseFloat(beerDetails.ebc + 5).toFixed(0);

    const abvQueryUrl = '&abv_lt=' + upperABV + '&abv_gt=' + lowerABV;
    const ibuQueryUrl = '&ibu_lt=' + upperIBU + '&ibu_gt=' + lowerIBU;
    const ebcQueryUrl = '&ebc_lt=' + upperEBC + '&ebc_gt=' + lowerEBC;

    const filterSimilarBeersQuery = abvQueryUrl + ibuQueryUrl + ebcQueryUrl;

    const filterThreeBeersQuery = '?per_page=3';

    const similarBeerFetchUrl = apiUrl + filterThreeBeersQuery + filterSimilarBeersQuery;

    fetch(similarBeerFetchUrl).then(
        (response) => {
            return response.json();
        }
    ).then(
        (similarBeersData) => {
            dispatch({type: ActionTypes.GET_SIMILAR_BEERS_SUCCESS, similarBeers: similarBeersData})
        }
    ).catch(
        (errorFetching) => {
            dispatch({
                type: ActionTypes.GET_SIMILAR_BEERS_FAILURE,
                similarBeers: [],
                error: errorFetching
            })
        }
    )
}

export const increasePageCount = (page) => dispatch => {
    const currentPage = page + 1;
    dispatch({type: ActionTypes.INCREASE_PAGE_COUNT, currentPage: currentPage})
}