import React from 'react'
import { Card } from './Card';

import {pokemocitos} from '../data/example';



export const Pokemons = () => {
  return (
  
    <div className="album py-5 ">
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                {pokemocitos.map((item,index) => (
                <div className="col" key={index}>
                    <Card dataPokemon={item}/>
                </div>  
                ))}
            </div>
        </div>
    </div> 

    
  )
}
