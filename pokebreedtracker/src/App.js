import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeTable from './components/poketable/index';

import data from './data/pokemon.json';


class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data: data,
            allPokemon: [],
            currentPoke: {
                text: '',
                key: '',
                abilities: [],
                types: [],
                stats: [],
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addPokemon = this.addPokemon.bind(this);
    }
    
    handleInput(e)
    {
      e.preventDefault();
        var foundPokemon = this.state.data.filter(function(pokemon) {
          return pokemon.name === e.target.value;
        })
    
        console.log(foundPokemon);
        if (foundPokemon.length > 0) {
          this.setState(
            {
              allPokemon: [],
                currentPoke: {
                    text: e.target.value,
                    key: foundPokemon[0]['galar_dex'],
                    abilities: foundPokemon[0]['abilities'],
                    types: foundPokemon[0]['types'],
                    stats: foundPokemon[0]['base_stats']
                }
            }
        )
        }
        else{
          this.setState({
            currentPoke: {
              text: e.target.value,
              key: '',
              abilities: [],
              types: [],
              stats: []
            }
          })
        }
        
    }

    addPokemon(e)
    {
        e.preventDefault();
        const newPokemon = this.state.currentPoke;
        console.log(newPokemon);
        if(newPokemon.text !== "") {
          const newPokemons = [...this.state.allPokemon, newPokemon];
          this.setState({
            allPokemon: newPokemons,
            currentPoke: {
              text: '',
              key: '',
              abilities: [],
              types: [],
              stats: []
            }
          })
        }

    }

    render()
    {
        return (
            <div className="App">
                <h1>Poke Breed Tracker</h1>
                <div className="row">

                    <div className="col-sm-10">
                        <PokeTable allPokemon={this.state.allPokemon}></PokeTable>
                    </div>
                    <div className="col-sm-2">
                        <form onSubmit={
                            this.addPokemon
                        }>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Pokemon</label>
                                <input className="form-control" id="exampleFormControlInput1" placeholder="Grookey" 
                                    value={
                                        this.state.currentPoke.text
                                    }
                                    onChange={
                                        this.handleInput
                                }></input>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Nature</label>
                                <select className="form-control" id="pokenature">
                                    <option>N/A</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Ability</label>
                                <select className="form-control" id="pokeability" value={this.state.currentPoke}>
                                  {
                                    this.state.currentPoke.abilities.map(e => {
                                      return <option>{e}</option>
                                    })
                                  }
                                    <option>N/A</option>
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
                            <button class="btn btn-primary" type="submit">Add to Collection</button>
                        </form>
                    </div>

                </div>


            </div>
        )
    }
}

export default App
