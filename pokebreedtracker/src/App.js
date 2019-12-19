import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeTable from './components/poketable/index';

import data from './data/pokemon.json';
import natures from './data/natures.json';
import pokeballs from './data/pokeballs.json';


class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data: data,
            allPokemon: [],
            currentPoke: {
                pokemon_name: '',
                key: '',
                id: '',
                img_src: '',
                abilities: [],
                ability: '',
                nature: 'Adamant',
                ball: 'Poke Ball',
                types: [],
                stats: []
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.addPokemon = this.addPokemon.bind(this);

    }


    handleInput(e)
    {
        e.preventDefault();

        const target = e.target;
        const value = target.value;
        const name = target.name;
        console.log(name);

        var foundPokemon = this.state.data.filter(function (pokemon)
        {
            return pokemon.name === value;
        });


        // Found pokemon
        if (foundPokemon.length > 0)
        {
            this.setState(
                {
                    currentPoke: {
                        pokemon_name: value,
                        key: foundPokemon[0]['galar_dex'],
                        id: foundPokemon[0]['id'],
                        img_src: "https://www.serebii.net/swordshield/pokemon/" + foundPokemon[0]['id'] + ".png",
                        abilities: foundPokemon[0]['abilities'],
                        ability: foundPokemon[0]['abilities'][0],
                        nature: this.state.currentPoke.nature,
                        ball: this.state.currentPoke.ball,
                        types: foundPokemon[0]['types'],
                        stats: foundPokemon[0]['base_stats']
                    }
                }
            )
        }
        // No valid pokemon, continue updating pokemon_name
        else
        {
            if (name === "pokemon_name")
            {
                this.setState(
                    {
                        currentPoke: {
                            pokemon_name: value,
                            key: '',
                            id: '',
                            img_src: '',
                            abilities: [],
                            ability: this.state.currentPoke.ability,
                            nature: this.state.currentPoke.nature,
                            ball: this.state.currentPoke.ball,
                            types: [],
                            stats: []
                        }
                    }
                );
            }
            else if (name === "ball")
            {
                this.setState(
                    {
                        currentPoke: {
                            pokemon_name: this.state.currentPoke.pokemon_name,
                            id: '',
                            img_src: '',
                            ball: value,
                            key: this.state.currentPoke.key,
                            abilities: this.state.currentPoke.abilities,
                            ability: this.state.currentPoke.ability,
                            nature: this.state.currentPoke.nature,
                            types: this.state.currentPoke.types,
                            stats: this.state.currentPoke.stats
                        }
                    }
                );
            }
            else if (name === "poke_ability")
            {
                this.setState(
                    {
                        currentPoke: {
                            pokemon_name: this.state.currentPoke.pokemon_name,
                            id: '',
                            img_src: '',
                            ball: this.state.currentPoke.ball,
                            key: this.state.currentPoke.key,
                            abilities: this.state.currentPoke.abilities,
                            ability: value,
                            nature: this.state.currentPoke.nature,
                            types: this.state.currentPoke.types,
                            stats: this.state.currentPoke.stats
                        }
                    }
                );
            }
            else if (name === "poke_nature")
            {
                this.setState(
                    {
                        currentPoke: {
                            pokemon_name: this.state.currentPoke.pokemon_name,
                            id: '',
                            img_src: '',
                            ball: this.state.currentPoke.ball,
                            key: this.state.currentPoke.key,
                            abilities: this.state.currentPoke.abilities,
                            ability: this.state.currentPoke.ability,
                            nature: value,
                            types: this.state.currentPoke.types,
                            stats: this.state.currentPoke.stats
                        }
                    }
                );
            }

        }

    }

    addPokemon(e)
    {
        e.preventDefault();
        const newPokemon = this.state.currentPoke;
        console.log("Adding...");
        console.log(newPokemon);
        if (newPokemon.pokemon_name !== "")
        {
            const newPokemons = [
                ...this.state.allPokemon,
                newPokemon
            ];
            this.setState(
                {
                    allPokemon: newPokemons,
                    currentPoke: {
                        pokemon_name: '',
                        key: '',
                        id: '',
                        img_src: '',
                        abilities: [],
                        ability: '',
                        nature: 'Adamant',
                        ball: 'Poke Ball',
                        types: [],
                        stats: []
                    }
                }
            )
        }

    }

    render()
    {
        console.log("Current poke");
        console.log(this.state.currentPoke);


        return (
            <div className="App">
              <div className="jumbotron">
              <h1 className="display-2">Poke Breed Tracker</h1>
              </div>
                
                <div className="row">

                    <div className="col-sm-9" id="poketable">
                        <PokeTable allPokemon={
                            this.state.allPokemon
                        }></PokeTable>
                    </div>
                    <div className="col-sm-2" id="pokeadder">
                        <form onSubmit={
                            this.addPokemon
                        }>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Pokemon</label>
                                <input className="form-control" placeholder="Grookey" name="pokemon_name"
                                    value={
                                        this.state.currentPoke.pokemon_name
                                    }
                                    onChange={
                                        this.handleInput
                                }></input>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Nature</label>
                                <select className="form-control" name="poke_nature"
                                    value={
                                        this.state.currentPoke.nature
                                    }
                                    onChange={
                                        this.handleInput
                                }>
                                    {
                                    natures.map(nature => {
                                        return <option>{
                                            nature.name
                                        }</option>
                                })
                                } </select>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Ability</label>
                                <select className="form-control"
                                    value={
                                        this.state.currentPoke.ability
                                    }
                                    onChange={
                                        this.handleInput
                                    }
                                    name="poke_ability">
                                    {
                                    this.state.currentPoke.abilities.map(ability => {
                                        return <option>{ability}</option>
                                })
                                } </select>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Ball</label>
                                <select className="form-control" id="pokeball"
                                    value={
                                        this.state.currentPoke.ball
                                    }
                                    name="ball"
                                    onChange={
                                        this.handleInput
                                }>
                                    {
                                    pokeballs.map(pokeball => {
                                        return <option>{
                                            pokeball.name
                                        }</option>
                                })
                                } </select>
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
