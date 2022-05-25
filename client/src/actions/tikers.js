export const tikersFetching = () => {
    return {
        type: 'TIKERS_FETCHING'
    }
}

export const tikersFetched = (tikers) => {
    return {
        type: 'TIKERS_FETCHED',
        payload: tikers
    }
}

export const tikerschingError = () => {
    return {
        type: 'TIKERS_FETCHING_ERROR'
    }
}
export const tikerCreated = (arr) => {
    return {
        type: 'TIKER_CREATED',
        payload: arr
    }
}

export const tikerDeleted = (name) => {
    return {
        type: 'TIKER_DELETED',
        payload: name
    }
}