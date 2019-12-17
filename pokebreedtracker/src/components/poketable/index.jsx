import React from 'react';

export default function PokeTable(props) {
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
          </tr>
        </thead>
        <tbody>
          {
              props.data.map(row => (
                  <tr key={row.name}>
                      <td>{row.name}</td>
                      <td>{row.id}</td>
                      <td>{row.abilities}</td>
                      <td>{row.base_stats}</td>
                  </tr>
              ))
          }
        </tbody>
      </table>
    )
}