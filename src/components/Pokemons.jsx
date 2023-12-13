import React from 'react'
import { Card } from './Card';

import { IonGrid,IonRow,IonCol } from '@ionic/react';

export const Pokemons = ({data,page,onNext,onPrev}) => {

  return (

    <IonGrid>
    <IonRow className="ion-justify-content-center">
      {data.map((item, index) => (
        <IonCol size="12" size-sm="6" size-md="6" size-lg="3" key={index} className='g-3'>
          <Card dataPokemon={item} />
        </IonCol>
      ))}
    </IonRow>
    <IonRow className="ion-justify-content-center">
        <IonCol>
            <nav>
                <ul className="pagination pagination-lg justify-content-center">
                    <li className="page-item" onClick={onPrev}>
                    <a className="btn page-link bg-primary text-light"  aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li className="page-item bg-primary text-light"><a className="page-link" >{page}</a></li>
                    <li className="page-item" onClick={onNext}>
                    <a className=" btn page-link bg-primary text-light"  aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>

        </IonCol>
    </IonRow>

 

  </IonGrid>




    
  )
}
