import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  handleClick = () => {
    // on appel la propriété qui prend une cles en argument
    // la cles stockée dans la propriété index
   this.props.addToOrder(this.props.index)
  }
  render() {
    // const image = this.props.details.image;
    // const name = this.props.details.name
    // le plus simple pour déclarer toutes les variables
    const { image, name, price, status, desc } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        {/* on appel la fonction handleclick pour ajouter un order au click */}
        <button onClick={this.handleClick}
                disabled={!isAvailable}>{isAvailable ? 'Add to card' : 'Sold out'}
        </button>
      </li>
    )
  }
}

export default Fish;
