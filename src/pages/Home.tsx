import React from 'react';
import { IonContent, IonPage, IonSearchbar, IonText, IonGrid, IonRow, IonCol, IonCard,
IonCardContent, IonRouterLink } from '@ionic/react';
import { } from 'ionicons/icons';
import './Home.css';
import fish from '../../assets/fish.png';
import hamster from '../../assets/hamster.png';
import bowl from '../../assets/bowl.png'
import food from '../../assets/food.png'
import Navigation from './Navigation';

const Home: React.FC = () => {
const products = [
{ name: 'Premium Dog Food', image: '../../assets/logo.jpg' },
{ name: 'Hamsters', image: '../../assets/logo.jpg' },
{ name: 'Fishes', image: '../../assets/logo.jpg' },
];

return (
<IonPage className='home-page'>
  <Navigation />

  <IonContent className="ion-padding home-content">
    <IonSearchbar placeholder="Search Product or Pet" className='home-search'></IonSearchbar>

    <IonRouterLink routerLink="/list">
      <IonCard className="highlight-card">
        <IonCardContent className="home-cardContent">
          <IonGrid className='w-full'>
            <IonRow className='home-row'>
              <IonCol size='3'>
                <img src={food} alt="food" className='img-food' />
              </IonCol>
              <IonCol size='9'>
                <IonText className='home-text'>ALL FOOD PRODUCTS</IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </IonRouterLink>

    <IonText className="section-title">Recently Viewed</IonText>
    <IonGrid>
      <IonRow className="scrollable-container">
        <IonCol size='6'>
          <IonCard className="home-card">
            <IonCardContent className="ion-text-center home-cardContent">
              <img src={fish} alt="Fish" className='img' />
              <IonText>Fish</IonText>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol size='6'>
          <IonCard className="home-card">
            <IonCardContent className="ion-text-center home-cardContent">
              <img src={hamster} alt="Hamster" className='img' />
              <IonText>Hamster</IonText>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol size='6'>
          <IonCard className="home-card">
            <IonCardContent className="ion-text-center home-cardContent">
              <img src={bowl} alt="bowl" className='img' />
              <IonText>Dog Food</IonText>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>

    <IonText className="section-title">Find your perfect pet</IonText>
    <IonGrid>
      <IonRow className="scrollable-container">
        <IonCol size='6'>
          <IonCard className="home-card">
            <IonCardContent className="ion-text-center home-cardContent">
              <img src={fish} alt="Fish" className='img' />
              <IonText>Fish</IonText>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol size='6'>
          <IonCard className="home-card">
            <IonCardContent className="ion-text-center home-cardContent">
              <img src={hamster} alt="Hamster" className='img' />
              <IonText>Hamster</IonText>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
</IonPage>
);
};

export default Home;