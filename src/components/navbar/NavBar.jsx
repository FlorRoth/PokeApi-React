import React from 'react'
import {IonHeader,IonToolbar,IonTitle,IonImg, IonCol,IonRow} from '@ionic/react';

export const NavBar = () => {
  return (
    <IonHeader translucent={false}>
    <IonRow className="justify-content-center">
      <IonCol size='auto'>
        <IonImg
        src={'src/images/logo-pokemon.webp'}
        alt={`Logo Pokemon`}
        style={{width: '180px'}}
      />
      </IonCol>
    </IonRow>
  </IonHeader>
  )
}
