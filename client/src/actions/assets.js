export const fetchAssets = (socket) => (dispatch) => {
    dispatch(assetsFetching());
    socket.emit('start', 10000);
    socket.on('ticker', function (response) {
        try {
            const res = Array.isArray(response) ? response : [response];
            const newArr = res.map(item => {
                return {
                    ticker: item.ticker,
                    exchange: item.exchange,
                    price: item.price,
                    change: item.change,
                    change_percent: (item.change / (item.price - item.change)) * 100,
                    dividend: item.dividend,
                    yield: item.yield,
                    lastTradeTime: item.last_trade_time,
                }
            })
            dispatch(assetsFetched(newArr));
        } catch (e) {
            dispatch(assetsFetchingError());
            throw e;
        }
    });

}
export const assetsFetching = () => {
    return {
        type: 'ASSETS_FETCHING'
    }
}

export const assetsFetched = (assets) => {
    return {
        type: 'ASSETS_FETCHED',
        payload: assets
    }
}

export const assetsFetchingError = () => {
    return {
        type: 'ASSETS_FETCHING_ERROR'
    }
}