import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tikersFetching, tikersFetched, tikerDeleted } from '../../actions/tikers';
import Spinner from '../spiner/Spinner';

import TickerItem from '../tickerItem/TickerItem';
import './TikersList.scss';

const TikersList = () => {
    const dispatch = useDispatch();
    const { assets, assetsLoadingStatus } = useSelector(state => state.assets);
    const { tikers, tikersLoadingStatus } = useSelector(state => state.tikers);
    const { activeFilter } = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(tikersFetching());
        dispatch(tikersFetched(tikers));
    }, []);

    const onUpdeteTikersList = () => {
        let arr = [...tikers];
        dispatch(tikersFetching());
        assets.map(item => {

            arr.map(elem => {
                if (item.ticker === elem.ticker) {
                    let index = tikers.findIndex(item => item.ticker === elem.ticker);
                    arr[index] = item;
                }
            })

        });
        dispatch(tikersFetched(arr));
    }

    useEffect(() => {
        onUpdeteTikersList();
    }, [assets]);

    if (assetsLoadingStatus === "loading") {
        return (
            <ul className="ticker__list"> Список просмотра
                <Spinner />
            </ul>
        )
    } else if (tikersLoadingStatus === "error") {
        return (
            <ul className="ticker__list"> Список просмотра
                <h5 className="text-center ">Ошибка загрузки</h5>
            </ul>
        )

    }

    const onDeleteTiker = (name) => {
        dispatch(tikerDeleted(name));
    }

    const renderTikersList = (arr) => {
        if (arr.length === 0) {
            return (
                <li className="ticker__item">
                    <h5 className="text-center">Список просмотра пуст. Добавьте актив.</h5>
                </li>
            )
        }

        return arr.map((item, index) => {
            const name = item.ticker;
            const { ...itemProps } = item;
            return <TickerItem
                key={name}
                {...itemProps}
                onDelete={() => onDeleteTiker(name)}
            />
        })
    }

    const filterTiker = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.change > 0);
            case 'fall':
                return items.filter(item => item.change < 0);
            default:
                return items;
        }
    }

    const visibleData = filterTiker(tikers, activeFilter);
    const elements = renderTikersList(visibleData);


    return (
        <ul className="ticker__list"> Список просмотра
            {elements}
        </ul>
    )
}

export default TikersList;