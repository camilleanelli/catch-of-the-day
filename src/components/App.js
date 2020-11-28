import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  // on a besoin de l'état initial s
  // constructor() {
  //   super();
  //     this.state = '';
  //   }

  // on cree une propriété state sous forme d'objet
  state = {
    fishes: {},
    order: {}
  };

  // on définie la méthode qui va mettre à jour l'état en récuperant des données
  addFish = fish => {
    // on doit récupérer les itemss
    // on ne modifie jamais directement un état mais on en fait une copie
    const fishes = { ...this.state.fishes };
    // on ajoute la nouvelle valeur dans cette copie
    fishes[`fish${Date.now()}`] = fish;
    // on met a jour le nouvel objet fishes à l'état ( on met a jour un morceau de l'état )
    this.setState({
      fishes: fishes
    });
  }
  render() {
    return (
      <div className="catch-of-the-day">
      {/* pour les props on peut l'inventer ou utiliser un attribut html existant ( onClick par ex ) */}
        <div className="menu">
        {/* on peut voir apparaitre les props sur le navigateur dans les composant */}
        {/* Header est une instance du composant Header */}
          <Header tagline="Fresh seafood market" />
        </div>
        <Order/>
        {/* on ajouter une props au composant pour qu'il puisse l'utiliser */}
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
