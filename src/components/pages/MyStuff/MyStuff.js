import React from 'react';

import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';

import Item from '../../shared/Item/Item';

import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    itemData.getItemsByUid(authData.getUid())
      .then((items) => {
        this.setState({ items });
      })
      .catch((err) => console.error('Error from get items YE', err));
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="items d-flex flex-wrap">
          {this.state.items.map((item) => <Item key={item.id} item={item} />)}
        </div>
      </div>
    );
  }
}

export default MyStuff;
