import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonAvatar, IonGrid,IonRouterLink , IonRow, IonCol, IonButton, IonIcon } from
'@ionic/react';
import { heart, cart, cartOutline, personCircleOutline,peopleCircleOutline } from 'ionicons/icons';
import './Profile.css';
import logo from '../../assets/logo.jpg';
import profile from '../../assets/profile.png';

const Navigation: React.FC = () => {
return (
  <IonHeader>
    <IonToolbar className='home-toolbar'>
      <IonGrid>
        <IonRow className="ion-align-items-center">
        <IonCol size="10">
            <IonRouterLink routerLink="/home">
              <img src={logo} alt="Logo" className="home-logo" />
            </IonRouterLink>
          </IonCol>
          <IonCol size="1">
            <IonRouterLink routerLink="/cart">
              <IonIcon icon={cartOutline} className="home-icon" />
            </IonRouterLink>
          </IonCol>
          <IonCol size="1">
            <IonRouterLink routerLink="/profile" className='login-button'>
              <IonIcon icon={personCircleOutline} className="home-icon" />
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonToolbar>
  </IonHeader>
);
};

export default Navigation;