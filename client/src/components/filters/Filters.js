import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilters, activeFilterChanged } from '../../actions/filters';
import Spinner from '../spiner/Spinner';
import './Filters.scss';

const Filters = () => {
    const dispatch = useDispatch();
    const { filters, filtersLoadingStatus } = useSelector(state => state.filters);
    const { tikers } = useSelector(state => state.tikers);
    const { activeFilter } = useSelector(state => state.filters);
    const { request } = useHttp();

    const getFilters = async () => {
        dispatch(fetchFilters(request));
    }

    useEffect(() => {
        getFilters();
    }, []);

    if (filtersLoadingStatus === "loading") {
        return (
            <div className="main__filters filters">
                <Spinner />
            </div>
        )
    } else if (filtersLoadingStatus === "error") {
        getFilters();
        return (
            <div className="main__filters filters">
                <h5 className="text-center ">Ошибка загрузки</h5>
            </div>
        )

    }

    const onFilterSelect = (filter) => {
        switch (filter) {
            case 'all':
                return tikers.length > 0 ? dispatch(activeFilterChanged(filter)) : dispatch(activeFilterChanged('all'));
            case 'rise':
                return tikers.length > 0 ? dispatch(activeFilterChanged(filter)) : dispatch(activeFilterChanged('all'));
            case 'fall':
                return tikers.length > 0 ? dispatch(activeFilterChanged(filter)) : dispatch(activeFilterChanged('all'));
            default:
                dispatch(activeFilterChanged('all'));
        }
    }

    const renderFilters = (arr, activeFilter) => {
        if (arr.length === 0) {
            return (
                <>
                    <h5 className="text-center">Фильтров пока нет</h5>
                </>
            )
        }

        return arr.map(({ name, label }) => {
            const active = activeFilter === name;
            const clazz = active ? 'filters__item active' : 'filters__item';
            return (
                <div
                    aria-label='filters__item'
                    className={clazz}
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </div>
            )
        })
    }


    const filtersElements = renderFilters(filters, activeFilter);

    return (
        <div className="main__filters filters">
            <div className="filters__content">
                {filtersElements}
            </div>
        </div>
    )
}
export default Filters;