const initialState = {
    tikers: [],
    tikersLoadingStatus: 'idle'
}

const tikers = (state = initialState, action) => {
    switch (action.type) {
        case 'TIKERS_FETCHING':
            return {
                ...state,
                tikersLoadingStatus: 'loading'
            }
        case 'TIKERS_FETCHED':
            return {
                ...state,
                tikers: action.payload,
                tikersLoadingStatus: 'idle'
            }
        case 'TIKERS_FETCHING_ERROR':
            return {
                ...state,
                tikersLoadingStatus: 'error'
            }
        case 'TIKER_CREATED':
            return {
                ...state,
                tikers: action.payload,

            }
        case 'TIKER_DELETED':
            // Формируем новый массив
            const newTikerList = state.tikers.filter(item => item.ticker !== action.payload);

            return {
                ...state,
                tikers: newTikerList,

            }
        default: return state
    }
}

export default tikers;