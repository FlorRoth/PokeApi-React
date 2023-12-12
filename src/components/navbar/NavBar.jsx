import React from 'react'
import {IonHeader,IonToolbar,IonTitle} from '@ionic/react';

export const NavBar = () => {
  return (
    <IonHeader translucent={false}>
    <IonToolbar>
      <IonTitle>Pokemones</IonTitle>
    </IonToolbar>
  </IonHeader>
  )
}
