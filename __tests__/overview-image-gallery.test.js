import { create, act } from 'react-test-renderer';
import { shallow } from 'enzyme';

import ImageGalleryDefault from '../client/src/components/Overview/ImageGallery-Default.jsx';

describe('Image Gallery (Default)', () => {

  beforeEach(() => {
    wrapper = shallow(<ImageGalleryDefault />);
  });

  it('Confirms that Jest works', () => {
    expect(2).toEqual(2);
  });



});