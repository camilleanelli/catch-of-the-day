import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // une Ref est utile pour récuperer un élément du DOM il va récuper l'input ci dessous en indiquant la ref dans les propriétés
  myInput = React.createRef();

  // constructor() {
  //   super();
  //   // on peut bind la méthod pour que this soit bien la composant react
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // pour acceder à this dans une méthode ci dessous, on utilise la synthaxe fléchée ou alors le constructor
  // goToStore(e) {
  //   e.preventDefault();
  //   // this est toujours indefined si la fonction est définie en premier dans le composant
  //   console.log(this);
  // }

  goToStore2 = (event) => {
    event.preventDefault();
    // on recupere la valeur de l'input avec la propriété myInput qui représente l'el du dom
    const store = this.myInput.current.value;
    // ici on change de page pour aller vers /store
    this.props.history.push(`/store/${store}`);
  }


  // une class de composent prend tjrs au moins une méthode par exemple render
  render() {
    // on utilise du jsx bcp de developpers react l'utilisent
    // pour ajouter une class c'est className
    return(
    // on ne peut retourner des élément en dehors de la class parente, des siblings
    // on utilise react fragment (importé ) pour cela
    // <Fragment>
    // <p>fish</p>
    <form className="store-selector" onSubmit={this.goToStore2}>
      <h2>Please enter a store name</h2>
      <input
      type="text"
      // ici myInput et la ref crée ci dessous
      ref={this.myInput}
      required
      placeholder="Store name"
      defaultValue={getFunName()}
      />
      {/* en react au lieu d'utiliser add envent listener classique on utiliser des inline eventlistener */}
      <button type="submit">Visit store</button>
    </form>
    // </Fragment>
    )
  }
}

export default StorePicker;
