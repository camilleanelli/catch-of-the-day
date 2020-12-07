import React from 'react';
import { formatPrice } from '../helpers';
class Order extends React.Component {
  // on définie cette fonction pour extraire de la logique en dehors du render()
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';
    // on s'assure que fish est existant avant d'aller plus i
    if(!fish) return null;
    if (!isAvailable) {
      return <li> Sorry { fish ? fish.name : 'fish'} is no longer available  </li>;
    }
    return (
      <li key={key}>
      { count } lbs { fish.name }
      { formatPrice(count * fish.price) }
      <button onClick={()=> this.props.removeItem(key)}>&times;</button>
      </li>
    );
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order!! </h2>
        {/* on veut afficher chaque order dans une <li> */}
        <ul>
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
        total:
        <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
