import React from 'react';

function PokeTable(props) {
    const allPokemon = props.allPokemon;
    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">
                <button class="btn btn-primary" onClick={() => props.sortBy('id')}>
                Pokemon</button></th>
            <th scope="col">Galar Dex</th>
            <th scope="col">Abilities</th>
            <th scope="col">Balls</th>
            <th scope="col">Type</th>
            <th scope="col">Stats</th>
          </tr>
        </thead>
        <tbody>
          {
              allPokemon.map(row => (
                  <tr >
                      <td>{row.text}</td>
                      <td>{row.key}</td>
                      <td>{row.abilities.map(ability => 
                                 <p> {ability}</p>
                      )}</td>
                      <td>Empty</td>
                      <td>{row.types.map(type =>
                      {
                          if (type === "Grass") {
                              return <div style={{backgroundColor: '#78C850'}}>{type} </div> 
                          }
                          else if (type === "Bug") {
                            return <div style={{backgroundColor: '#A8B820'}}>{type} </div> 
                          }
                          else if (type === "Dark") {
                            return <div style={{backgroundColor: '#705848'}}>{type} </div> 
                          }
                          else if (type === "Dragon") {
                            return <div style={{backgroundColor: '#7038F8'}}>{type} </div> 
                          }
                          else if (type === "Electric") {
                            return <div style={{backgroundColor: '#F8D030'}}>{type} </div> 
                          }
                          else if (type === "Fairy") {
                            return <div style={{backgroundColor: '#EE99AC'}}>{type} </div> 
                          }
                          else if (type === "Fighting") {
                            return <div style={{backgroundColor: '#C03028'}}>{type} </div> 
                          }
                          else if (type === "Fire") {
                            return <div style={{backgroundColor: '#F08030'}}>{type} </div> 
                          }
                          else if (type === "Ghost") {
                            return <div style={{backgroundColor: '#705898'}}>{type} </div> 
                          }
                          else if (type === "Ground") {
                            return <div style={{backgroundColor: '#E0C068'}}>{type} </div> 
                          }
                          else if (type === "Ice") {
                            return <div style={{backgroundColor: '#98D8D8'}}>{type} </div> 
                          }
                          else if (type === "Normal") {
                            return <div style={{backgroundColor: '#A8A878'}}>{type} </div> 
                          }
                          else if (type === "Poison") {
                            return <div style={{backgroundColor: '#A040A0'}}>{type} </div> 
                          }
                          else if (type === "Psychic") {
                            return <div style={{backgroundColor: '#F85888'}}>{type} </div> 
                          }
                          else if (type === "Rock") {
                            return <div style={{backgroundColor: '#B8A038'}}>{type} </div> 
                          }
                          else if (type === "Steel") {
                            return <div style={{backgroundColor: '#B8B8D0'}}>{type} </div> 
                          }
                          else if (type === "Water") {
                            return <div style={{backgroundColor: '#6890F0'}}>{type} </div> 
                          }
                          else if (type === "Flying") {
                            return <div style={{backgroundColor: '#A890F0'}}>{type} </div> 
                          }
                      }
                        )}</td>
                      <td>{row.stats.map(stat =>
                        <span>{stat} </span>
                        )}</td>
                  </tr>
              ))
          }
        </tbody>
      </table>
    )
}

export default PokeTable;