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
                abilities: [],
                ball: '',
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

        this.setState(
            {
                currentPoke: {
                    [name]: value
                }
            }
        );


        console.log(foundPokemon);
        if (foundPokemon.length > 0)
        {
            this.setState(
                {
                    currentPoke: {
                        pokemon_name: value,
                        key: foundPokemon[0]['galar_dex'],
                        abilities: foundPokemon[0]['abilities'],
                        types: foundPokemon[0]['types'],
                        stats: foundPokemon[0]['base_stats']
                    }
                }
            )
        }
        else
        {
            this.setState(
                {
                    currentPoke: {
                        pokemon_name: value,
                        key: '',
                        abilities: [],
                        ball: '',
                        types: [],
                        stats: []
                    }
                }
            );
        }

    }

    addPokemon(e)
    {
        e.preventDefault();
        const newPokemon = this.state.currentPoke;
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
                        abilities: [],
                        ball: '',
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
        const abilities = this.state.currentPoke.abilities.map(ability => {
            return <option>{ability}</option>
        })

        return (
            <div className="App">
                <h1>Poke Breed Tracker</h1>
                <div className="row">

                    <div className="col-sm-10">
                        <PokeTable allPokemon={
                            this.state.allPokemon
                        }></PokeTable>
                    </div>
                    <div className="col-sm-2">
                        <form onSubmit={
                            this.addPokemon
                        }>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Pokemon</label>
                                <input className="form-control" placeholder="Grookey" name="name"
                                    value={
                                        this.state.currentPoke.pokemon_name
                                    }
                                    onChange={
                                        this.handleInput
                                }></input>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Nature</label>
                                <select className="form-control"  name="poke_nature">
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
                                <select className="form-control" value="the" name="poke_ability"
                                    options={abilities}></select>
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
