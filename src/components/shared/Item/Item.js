import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import itemShape from '../../../helpers/propz/itemShape';

import './Item.scss';

class Item extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func,
  }

  deleteItemEvent = (event) => {
    event.preventDefault();
    const { deleteItem, item } = this.props;
    deleteItem(item.id);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="Item col-4">
        <div className="card">
        <img src={item.itemImage} className="card-img-top boardImg" alt={item.itemName} />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <div className="d-flex justify-content-around">
              <Link className="btn btn-light" to={`/item/${item.id}`}>View Item</Link>
              <button className="btn btn-light" onClick={this.deleteItemEvent}>Delete Item</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
