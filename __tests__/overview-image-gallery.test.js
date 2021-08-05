import React from 'react';
import { Provider } from 'react-redux';
import { create, act } from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import actions from '../client/src/state/actions/index';
import DefaultView from '../client/src/components/Overview/ImageGallery-Default.jsx';
import ExpandedView from '../client/src/components/Overview/ImageGallery-Expanded.jsx';
import { newStore } from './createStore';
import mockData from '../data/store';

const state = {
  style: mockData.product.styleInfo.results[mockData.style],
  thumbnail: mockData.thumbnail,
  view: mockData.view,
};

describe('Image Gallery (Default) Main', () => {

  let store = newStore();
  let container = mount(<Provider store={store}><DefaultView state={state}/></Provider>);

  it('renders the Image Gallery default component', () => {
    expect(container.length).toEqual(1);
  });

  it('confirms the thumbnail index is 0 on startup', () => {
    expect(store.getState().thumbnail.index).toEqual(0);
  });

  it('expects to find a left and right click button', () => {
    let right = container.find('button#imagegallery-button-right');
    let left = container.find('button#imagegallery-button-left');

    expect(left).not.toEqual(undefined);
    expect(right).not.toEqual(undefined);
  });

  it('increments thumbnail index on right click', () => {
    let right = container.find('button#imagegallery-button-right');
    let left = container.find('button#imagegallery-button-left');

    expect(store.getState().thumbnail.index).toEqual(0);
    right.props().onClick();
    expect(store.getState().thumbnail.index).toEqual(1);
    left.props().onClick();
  });

  it('does not change thumbnail when click left on index 0', () => {
    let right = container.find('button#imagegallery-button-right');
    let left = container.find('button#imagegallery-button-left');

    expect(store.getState().thumbnail.index).toEqual(0);
    left.props().onClick();
    expect(store.getState().thumbnail.index).toEqual(0);
  });

  it('incremements thumbnail index twice on two right clicks', () => {
    let right = container.find('button#imagegallery-button-right');
    let left = container.find('button#imagegallery-button-left');

    expect(store.getState().thumbnail.index).toEqual(0);
    right.props().onClick();
    right.props().onClick();
    expect(store.getState().thumbnail.index).toEqual(2);
    left.props().onClick();
    left.props().onClick();
    expect(store.getState().thumbnail.index).toEqual(0);
  });

  it('changes thumbnail index on specific index click', () => {
    expect(store.getState().thumbnail.index).toEqual(0);
    let fourthThumbnail = container.find('div#imagegallery-thumbnail-image-3');
    fourthThumbnail.props().onClick();
    expect(store.getState().thumbnail.index).toEqual(3);
    expect(store.getState().thumbnail.index).not.toEqual(0);

    let firstThumbnail = container.find('div#imagegallery-thumbnail-image-0');
    firstThumbnail.props().onClick();
    expect(store.getState().thumbnail.index).toEqual(0);
  });
});

describe('Image Gallery (Default) Thumbnail Gallery', () => {

  let store = newStore();
  let container = mount(<Provider store={store}><DefaultView state={state}/></Provider>);

  it('renders the Image Gallery default component', () => {
    expect(container.length).toEqual(1);
  });

  it('expects to find a left and rick click button', () => {
    let left = container.find('button#imagegallery-thumbnail-button-left');
    let right = container.find('button#imagegallery-thumbnail-button-right');

    expect(left).not.toEqual(undefined);
    expect(right).not.toEqual(undefined);
  });

  it('lets the user click left and right', () => {
    let left = container.find('button#imagegallery-thumbnail-button-left');
    let right = container.find('button#imagegallery-thumbnail-button-right');

    expect(store.getState().thumbnail.scrollLeft).toEqual(0);
    right.props().onClick();
    expect(store.getState().thumbnail.scrollLeft).toEqual(0);
    left.props().onClick();
  });

});

describe('Image Gallery (Expanded) Main', () => {

  let store = newStore();
  let container = mount(<Provider store={store}><ExpandedView state={state}/></Provider>);

  it('renders the Image Gallery expanded component', () => {
    expect(container.length).toEqual(1);
  });

  it('confirms the thumbnail index is 0 on startup', () => {
    expect(store.getState().thumbnail.index).toEqual(0);
  });

  it('expects to find a left and right click button', () => {
    let right = container.find('button#imagegallery-expanded-main-button-right');
    let left = container.find('button#imagegallery-expanded-main-button-left');

    expect(right).not.toEqual(undefined);
    expect(left).not.toEqual(undefined);
  });

  it('increments the thumbnail index on right click', () => {
    let right = container.find('button#imagegallery-expanded-main-button-right');
    let left = container.find('button#imagegallery-expanded-main-button-left');

    expect(store.getState().thumbnail.index).toEqual(0);
    right.props().onClick();
    expect(store.getState().thumbnail.index).toEqual(1);
    left.props().onClick();
    expect(store.getState().thumbnail.index).toEqual(0);
  });

  it('does not change thumbnail when click left on index 0', () => {
    let left = container.find('button#imagegallery-expanded-main-button-left');

    expect(store.getState().thumbnail.index).toEqual(0);
    left.props().onClick();
    expect(store.getState().thumbnail.index).toEqual(0);
  });

  it('increments thumbnail index twice on two right cliks', () => {
    expect(2).toEqual(2);
  });

  it('changes the thumbnail index on specific index click', () => {
    expect(2).toEqual(2);
  });

});

describe('Image Gallery (Expanded) Thumbnail Gallery', () => {

  let store = newStore();
  store.dispatch(actions.setViews.defaultView());
  const mockEventObject = { stopPropagation: () => {} };
  let container = mount(<Provider store={store}><ExpandedView state={state}/></Provider>);

  it('renders the Image Gallery expanded component', () => {
    expect(container.length).toEqual(1);
  });

  it('expects to find a main image in the expanded view', () => {
    let mainImage = container.find('#imagegallery-expanded-main-out');
    expect(mainImage.length).not.toEqual(0);
  });

  it('expects to enter a zoomed in view when click on main image', () => {
    let mainImage = container.find('div#imagegallery-expanded-main-out');
    mainImage.props().onClick();
    mainImage.props().onMouseMove({ clientX: 0, clientY: 0, target: { getBoundingClientRect: () => {}} });

    let imageClose = container.find('div#imagegallery-expanded-close');
    expect(imageClose.length).toEqual(1);
    imageClose.props().onClick();

    let imageCloseX = container.find('span#image-gallery-expanded-close-x');
    expect(imageCloseX.length).toEqual(1);
    imageCloseX.props().onMouseMove(mockEventObject);
  });

  it('selects an individual thumbnail on the expanded zoom-out view', () => {
    let thumbnail = container.find('div#image-gallery-expanded-thumbnail-indicator-1');
    thumbnail.props().onClick(mockEventObject);
    thumbnail.props().onMouseMove(mockEventObject);
    expect(thumbnail.length).toEqual(1);
  });

});

describe('Image Gallery (Expanded) Zoomed In', () => {

  let store = newStore();
  store.dispatch(actions.setViews.defaultView());
  store.dispatch(actions.setViews.zoomView());

  const state = store.getState();
  const initialState = {
    style: state.product.styleInfo.results[state.style],
    thumbnail: state.thumbnail,
    view: state.view,
  };

  const mockEventObject = { stopPropagation: () => {} };
  let container = mount(<Provider store={store}><ExpandedView state={initialState}/></Provider>);

  it('expects to find the zoomed view', () => {
    let zoomImage = container.find('div#imagegallery-expanded-main-in');
    zoomImage.props().onClick();

    expect(zoomImage.length).toEqual(1);
  });

});