import React from 'react';

export default class ProductDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {
        'id': 16056,
        'campus': 'hr-lax',
        'name': 'Camo Onesie',
        'slogan': 'Blend in to your crowd',
        'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        'category': 'Jackets',
        'default_price': '140.00',
        'created_at': '2021-02-23T03:29:57.827Z',
        'updated_at': '2021-02-23T03:29:57.827Z',
        'features': [
          {
            'feature': 'Fabric',
            'value': 'Canvas'
          },
          {
            'feature': 'Buttons',
            'value': 'Brass'
          }
        ]
      }
    };
  }

  render() {

    return (
      <div id="body-overview-description">
        <div>{this.state.product.slogan}</div>
        <div>{this.state.product.description}</div>
      </div>
    );
  }
}

