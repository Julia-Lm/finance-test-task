const initialState = {
    assets: [],
    assetsLoadingStatus: 'idle',
}

const assets = (state = initialState, action) => {
    switch (action.type) {
        case 'ASSETS_FETCHING':
            return {
                ...state,
                assetsLoadingStatus: 'loading'
            }
        case 'ASSETS_FETCHED':
            return {
                ...state,
                assets: action.payload,
                assetsLoadingStatus: 'idle'
            }
        case 'ASSETS_FETCHING_ERROR':
            return {
                ...state,
                assetsLoadingStatus: 'error'
            }
        default: return state
    }
}

export default assets;