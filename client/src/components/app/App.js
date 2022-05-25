import Filters from '../filters/Filters';
import TikersList from '../tickersList/TikersList';
import AssetsList from '../assetsList/AssetsList';

import './App.scss';


const App = () => {

  return (
    <main className="main">
      <div className="main__container">
        <h1 className="main__title">Тенденции рынка</h1>
        <Filters />
        <div className="main__tickers ticker assets">
          <TikersList />
          <AssetsList />
        </div>
      </div>
    </main>
  );
}

export default App;
