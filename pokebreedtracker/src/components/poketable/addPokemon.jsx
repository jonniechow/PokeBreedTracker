import React from 'react';

export default function AddPokemon(props) {
    return (
        <form>
    <div className="form-group">
      <label for="exampleFormControlInput1">Pokemon</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Grookey"></input>
    </div>
  
  <div className="form-group">
    <label for="exampleFormControlSelect1">Nature</label>
    <select className="form-control" id="pokenature">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Ability</label>
    <select className="form-control" id="pokeability">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Ball</label>
    <select className="form-control" id="pokeball">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <button type="button" class="btn btn-primary" >Add to Collection</button>
</form>
      
    )
}