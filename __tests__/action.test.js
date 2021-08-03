import React from 'react';
import { Provider } from 'react-redux';
import { create, act } from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import axios from 'axios';
import AtelierAPI from '../client/src/lib/atelierAPI';
import MockAdapter from 'axios-mock-adapter';

import Actions from '../client/src/state/actions/index';
import configureStore from 'redux-mock-store';

describe('Actions', () => {

  const mockStore = configureStore();
  let store;
  const product = 16060;
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    store = mockStore({});
    store.clearActions();
  });

  it('selectProduct - expects store to receive select product action', () => {
    mock.onGet(`${AtelierAPI.url}/products/${product}`).reply(200, {});
    mock.onGet(`${AtelierAPI.url}/products/${product}/styles`).reply(200, {});
    Actions.selectProduct(store.dispatch, product)
      .then(() => {
        expect(store.getActions()[0].type).toEqual('SELECT_PRODUCT');
      })
      .catch(err => expect(err).toEqual('THIS_SHOULD_NOT_RUN'));
  });

  it('setRelated - expects store to receive set related action', () => {
    mock.onGet(`${AtelierAPI.url}/products/${product}/related`).reply(200, [0, 1]);
    mock.onGet(`${AtelierAPI.url}/products/${0}`).reply(200, { product: 0 });
    mock.onGet(`${AtelierAPI.url}/products/${1}`).reply(200, { product: 1 });
    mock.onGet(`${AtelierAPI.url}/products/${0}/styles`).reply(200, { style: 0 });
    mock.onGet(`${AtelierAPI.url}/products/${1}/styles`).reply(200, { style: 1 });
    Actions.setRelated(store.dispatch, product)
      .then(() => {
        let action = store.getActions()[0];
        expect(action.type).toEqual('SET_RELATED');
        expect(action.payload.ids).toEqual([0, 1]);
        expect(action.payload.products).toEqual([{product: 0}, {product: 1}]);
        expect(action.payload.styles).toEqual([{style: 0}, {style: 1}]);
      })
      .catch(err => expect(err).toEqual('THIS_SHOULD_NOT_RUN'));
  });

  it('selectOutfits - expects to receive select outfits action', () => {
    let outfit = { product: 16060 };
    store.dispatch(Actions.selectOutfits.addOutfit(outfit));
    expect(store.getActions()[0].payload).toEqual(outfit);

    let index = 0;
    store.dispatch(Actions.selectOutfits.removeOutfit(index));
    expect(store.getActions()[1].payload).toEqual(index);
  });

});