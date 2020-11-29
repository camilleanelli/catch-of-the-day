import React from 'react';
import AddFishForm from './AddFishForm';
class Inventory extends React.Component {
render() {
  return (
    <div className="inventory">
      <h2>Inventory</h2>
      {/* ici on va passer une props au composant pour qu'il puisse aussi l'appeler */}
      {/* ainsi les props sont accessibles sur les 2 composants */}
      <AddFishForm addFish={this.props.addFish} />
      {/* ici on va donc déclencher le changement d'état avec la propriété qui appel une fonction dans App.js */}
      <button onClick={this.props.loadSampleFishes}>Load sample fishes</button>
    </div>
    );
  }
}

export default Inventory;
