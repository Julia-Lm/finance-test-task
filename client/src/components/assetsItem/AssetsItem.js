import './AssetsItem.scss';

const AssetsItem = (props) => {
    const { ticker, change, change_percent, onAdd } = props;

    let classAssetsPercent = 'assets__change_percent';

    if (change > 0) {
        classAssetsPercent += ' rise';
    } else if (change < 0) {
        classAssetsPercent += ' fall';
    } else {
        classAssetsPercent += '';
    }


    return (
        <li className="assets__item">
            <div className="assets__title">
                <div className="assets__icon">{ticker}</div>
                <h4 className="assets__name">{ticker}</h4>
            </div>
            <div className="assets__content">
                <div className={classAssetsPercent}>{change_percent.toFixed(2)}%</div>
                <div className="assets__add" aria-label="assets__add" onClick={onAdd}>+</div>
            </div>
        </li>
    )
}

export default AssetsItem;