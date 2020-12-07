import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

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
  // le composant s'est affiché
  componentDidMount() {
    const { params } = this.props.match;
    // pour sauvegarder les orders dans le localStorage on les recupere avec la clès StoreId
    const localStorageRef = localStorage.getItem(params.storeId);
    console.log(localStorageRef);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)});
    }
    // ref est une ref de la donnée sur firebase
    // syncState pour synchro la donnée sur firebase
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  // stocker les order coté navigateur dans le localStorage
  componentDidUpdate() {
    // le premier argument passé sera une clés et l'autre sa valeur
    // un objet renvoie [object, object] si c'est une string qui est attendu comme c'est le cas dans le localStorage
    // on utilise donc JSON.stringify
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    // console.log(this.state.order);
  }

  // le composant s'est affiché et on est retourné en arriere
  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }
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

  updateFish = (key, update) => {
    // on prend un copie de l'état en cours
    const fishes = { ...this.state.fishes};
    // on met a jour une partie l'état ici fishes
    fishes[key] = update;
    // on set l'état
    this.setState({fishes: fishes});
  }

  deleteFish = (key) => {
    // faire un copie de l'état
    const fishes = { ...this.state.fishes };
    // on met à jour la donnée
    fishes[key] = null;
    // on met à jour l'état pour de bon
    this.setState({fishes: fishes });
  }
  loadSampleFishes = () => {
    // on veut mettre à jour une partie de l'état `fishes`
    this.setState({
      // on stocke les items de sampleFishes
      fishes: sampleFishes
    });
  }

  addToOrder = (key) => {
    // copie de l'état
    const order = { ...this.state.order };
    // ajouter l'order
    order[key] = order[key] + 1 || 1;
    // mettre à jour l'état
    this.setState({ order });
  }

  removeFromOrder = (key) => {
    // copie de l'état
    const order = { ...this.state.order };
    // supprimer l'item
    delete order[key];
    // mettre a jour l'état
    this.setState({order: order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
      {/* pour les props on peut l'inventer ou utiliser un attribut html existant ( onClick par ex ) */}
        <div className="menu">
        {/* on peut voir apparaitre les props sur le navigateur dans les composant */}
        {/* Header est une instance du composant Header */}
          <Header tagline="Fresh seafood market" />
          <ul className="fish">
          {/* chaque item d'un array doit avoir un identifiant unique en react */}
           {Object.keys(this.state.fishes).map(key => <Fish
            index={key}
            key={key}
            details={this.state.fishes[key]}
            addToOrder={this.addToOrder}
           />)}
          </ul>
        </div>
        {/* on ajoute une props au composant pour qu'il puisse l'utiliser */}
        <Order removeItem={this.removeFromOrder} fishes={this.state.fishes} order={this.state.order} />
        <Inventory fishes={this.state.fishes}
         addFish={this.addFish}
         deleteFish={this.deleteFish}
         updateFish={this.updateFish}
         loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;
