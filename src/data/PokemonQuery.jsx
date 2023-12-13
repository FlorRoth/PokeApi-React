import React from 'react'
import { Pokemons } from '../components/Pokemons';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost'
import { useIonLoading,IonAlert } from '@ionic/react';
export const PokemonQuery = ({limit, offset,page,onNext,onPrev,}) => {
  
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

    const [present, dismiss] = useIonLoading();
  
    return (
      <Query
        query={queryGql}
      >
        {({ loading, error, data }) => {
          if (loading) {
            present({
              message: 'Loading...',
              spinner: 'circles',
            });
            return null; 
          }
          dismiss(); 

          if (error) {
           return  <IonAlert
            isOpen={true}
            header="Error"
            message="There was a error. Please try again later..."
            cssClass="error-alert"
            buttons={[
              {
                text: 'OK',
                handler: () => {
                  window.location.reload();
                },
              },
            ]}
            />
          }
          return <>
          <Pokemons data={data.pokemon_v2_pokemon} page={page} onNext={onNext} onPrev={onPrev}/> 
          </>
        }}
      </Query>
    );
}
