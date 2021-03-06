import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // update that fish
    // creer une copie du fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
     };
     this.props.updateFish(this.props.index, updatedFish);
    console.log(updatedFish);
  }
  render() {
    return <div className="fish-edit">
      <input type='text' name="name" onChange={this.handleChange} value={this.props.fish.name} />
      <input type='text' name="price" onChange={this.handleChange} value={this.props.fish.price} />
      <select type='text' name="status" onChange={this.handleChange} value={this.props.fish.status}>
        <option value="available">Fresh</option>
        <option value="unavailable">Solde out</option>
      </select>

      <textarea type='text' name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
      <input type='text' name="image" onChange={this.handleChange} value={this.props.fish.image} />
      {/* on passe une fonction qui appel le props dans l'attr de l'event */}
      <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
    </div>
  }
}

export default EditFishForm;
