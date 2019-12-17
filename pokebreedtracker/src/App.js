import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeTable from './components/poketable/index';
import PokeAdder from './components/poketable/addPokemon';
import data from './data/pokemon.json';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        name: 'asc',
      }
    }
    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
    console.log(key)
    this.setState({
      data: data.sort( (a, b) =>  (
        this.state.direction[key] === 'asc'
          ? a[key] < b[key] 
          : a[key] > b[key]
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
        ? 'desc'
        : 'asc'
      }
    })
  }




  render() {
  return (
    <div className="App">
      <h1>Poke Breed Tracker</h1>
      <div className="row">
        
      <div className="col-sm-10">
        <PokeTable 
          data={this.state.data}
          sortBy={this.sortBy}
        />
      </div>
      <div className="col-sm-2">
        <PokeAdder/>
      </div>

      </div>
      

      

    </div>
  )
}
}

export default App

