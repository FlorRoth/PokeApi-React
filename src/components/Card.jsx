import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonLabel,
  IonItemDivider,
  IonButton
} from '@ionic/react';

export const Card = ({ dataPokemon }) => {
  return (
    <IonCard className="custom-card">
      <IonCardHeader>
        <IonCardTitle className="ion-text-center">
          <IonGrid>
            <IonRow>
              <IonCol>{dataPokemon.name}</IonCol>
              <IonCol className="text-end text-secondary">#{dataPokemon.id}</IonCol>
            </IonRow>
          </IonGrid>
        </IonCardTitle>
      </IonCardHeader>
      <IonImg
        src={dataPokemon.image ? dataPokemon.image : import.meta.env.VITE_NO_IMAGE}
        alt={`Image of ${dataPokemon.name}`}
        className='custom-img'
      />
      <IonCardContent className="custom-content">
        <IonGrid>
          
            <IonRow>
              <IonItemDivider>
                <IonCol>Height:</IonCol>
                <IonCol className="text-end text-secondary"> {dataPokemon.heigth}</IonCol>
              </IonItemDivider>
            </IonRow> 
            <IonRow>
              <IonItemDivider>
                <IonCol>Weight:</IonCol>
                <IonCol className="text-end text-secondary">{dataPokemon.weight}</IonCol>
              </IonItemDivider>
            </IonRow>
          
          
            <IonRow>
              <IonItemDivider>
                <IonCol>Experience:</IonCol>
                <IonCol className="text-end text-secondary">{dataPokemon.experience}</IonCol>
              </IonItemDivider>
            </IonRow>
          

        </IonGrid>
        <div className="custom-skills">
          {dataPokemon.skills.map((item, index) => (
            <IonButton key={index} shape="round" fill="outline" size="small">
              {item}
            </IonButton>
          ))}
        </div>
      </IonCardContent>
    </IonCard>
  );
};
