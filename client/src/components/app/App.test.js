import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import filters from '../../reducers/filters';
import assets from '../../reducers/assets';
import tikers from '../../reducers/tikers';
import App from './App';

import { Provider } from 'react-redux';

describe('Testing App', () => {
  let store = createStore(
    combineReducers({ filters, assets, tikers }),
    compose(applyMiddleware(ReduxThunk))
  );

  it('Shows text"', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const mainTitle = screen.getByText(/Тенденции рынка/i);
    const tickerList = screen.getByText(/Список просмотра/i);
    const assetsList = screen.getByText(/Подборка активов/i);
    const assetsItem = await screen.findAllByText(/[<div class="assets__icon">AAPL</div>, <h4 class="assets__name">AAPL</h4>]/i);
    const filtersItem = await screen.findByText(/Все акции/i);

    expect(mainTitle).toBeInTheDocument();
    expect(tickerList).toBeInTheDocument();
    expect(filtersItem).toBeInTheDocument();
    expect(assetsList).toBeInTheDocument();

    expect(assetsItem).not.toBeNull();
  });

  it('Click event', async () => {

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const assetsAddAw = await screen.findAllByLabelText('assets__add');

    expect(screen.queryByTestId('ticker__link')).toBeNull();

    fireEvent.click(screen.getAllByLabelText('assets__add')[0]);
    expect(await screen.findAllByLabelText('ticker__link')).not.toBeNull();
    fireEvent.click(screen.getAllByLabelText('filters__item')[0]);
    fireEvent.click(screen.getAllByLabelText('ticker__delete')[0]);
    expect(screen.queryByTestId('ticker__link')).toBeNull();
    //screen.debug();
  })

});
