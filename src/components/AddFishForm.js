import React from 'react';
import StorePicker from './StorePicker';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  createFish = (event) => {
    // stopper le comportement par défaut
    event.preventDefault();
    // on cree un objet fish
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    }
    // on a besoin de recuperer un état avec la props addFish
    this.props.addFish(fish);
    // rafraichie le formulaire une fois validé
    event.currentTarget.reset();
    }

  render() {
    return (
      <div className="AddFishForm">
        <form className="fish-edit" onSubmit={this.createFish}>
          <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
          <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
          <select name="status" ref={this.statusRef}>
            <option value="available">Fresh</option>
            <option value="unavailable">Soldout</option>
          </select>
          <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc" />
          <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
          <button type="submit" > + Add Fish</button>
        </form>
      </div>
    )
  }
}

export default AddFishForm;
