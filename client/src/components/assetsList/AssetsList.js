import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssets } from '../../actions/assets';
import { tikerCreated } from '../../actions/tikers';
import Spinner from '../spiner/Spinner';
import AssetsItem from '../assetsItem/AssetsItem';
import './AssetsList.scss';

import io from 'socket.io-client';

const AssetsList = () => {
    const socket = io.connect('http://localhost:4000');
    const dispatch = useDispatch();
    const { assets, assetsLoadingStatus } = useSelector(state => state.assets);
    const { tikers } = useSelector(state => state.tikers);

    const getAllAssets = async () => {
        dispatch(fetchAssets(socket));
    }

    useEffect(() => {
        getAllAssets();
    }, []);


    if (assetsLoadingStatus === "loading") {
        return (
            <ul className="assets__list"> Подборка активов
                <Spinner />
            </ul>
        )
    } else if (assetsLoadingStatus === "error") {
        return (
            <ul className="assets__list"> Подборка активов
                <h5 className="text-center ">Ошибка загрузки</h5>
            </ul>
        )

    }

    const onAddTiker = (name) => {
        let newCreatedTikersList = [...tikers];

        if (tikers.findIndex(item => item.ticker === name) < 0) {
            const newItem = assets.find(item => item.ticker === name);
            newCreatedTikersList = [...tikers, newItem];

        }
        dispatch(tikerCreated(newCreatedTikersList));
    }

    const renderAssetsList = (arr) => {
        if (arr.length === 0) {
            return (
                <li className="assets__item">
                    <h5 className="text-center">Aктивов пока нет</h5>
                </li>
            )

        }

        return arr.map((item, index) => {
            const name = item.ticker;
            const { ...itemProps } = item;
            return <AssetsItem
                key={index}
                {...itemProps}
                onAdd={() => onAddTiker(name)}
            />
        })
    }

    const elements = renderAssetsList(assets);


    return (
        <ul className="assets__list"> Подборка активов
            {elements}
        </ul>
    )
}

export default AssetsList;