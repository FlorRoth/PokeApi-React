import React from 'react'
import { Pokemons } from './Pokemons';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost'

export const PokemonQuery = ({limit, offset,page,onNext,onPrev}) => {
  
    const queryGql = gql`
    {
      pokemon_v2_pokemon(limit: ${limit},offset: ${offset}) {
        id
        name
        height
        base_experience
        weight
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
        }
        pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }      
    `;
  
    return (
      <Query
        query={queryGql}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!</p>;
  
          return <>
          <Pokemons data={data.pokemon_v2_pokemon} page={page} onNext={onNext} onPrev={onPrev}/> 
          </>
        }}
      </Query>
    );
}
