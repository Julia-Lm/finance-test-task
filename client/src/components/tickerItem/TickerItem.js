import './TickerItem.scss';

const TickerItem = (props) => {

    const { ticker, price, change, change_percent, onDelete } = props;

    let classChange = 'ticker__change';
    let classChangePercent = 'ticker__change_percent';
    let classArrow = 'ticker__arrow';

    if (change > 0) {
        classChange += ' rise';
        classChangePercent += ' rise';
        classArrow += ' arrowUp';
    } else if (change < 0) {
        classChange += ' fall';
        classChangePercent += ' fall';
        classArrow += ' arrowDown';
    } else if (change === 0) {
        classChange += '';
        classChangePercent += '';
        classArrow += '';
    }


    return (
        <li className="ticker__item" >
            <div className="ticker__link" aria-label="ticker__link">
                <div className="ticker__title">
                    <div className="ticker__icon">{ticker}</div>
                    <h3 className="ticker__name">{ticker}</h3>
                </div>
                <div className="ticker__content">
                    <div className="ticker__price">
                        {price}$
                    </div>
                    <div className={classChange} >
                        <div className={classArrow}></div>
                        {change}$
                    </div>
                    <div className={classChangePercent}>{change_percent.toFixed(2)}%</div>
                    <div className="ticker__delete" aria-label="ticker__delete" onClick={onDelete}>X</div>
                </div>
            </div>
        </li>
    )
}

export default TickerItem;
