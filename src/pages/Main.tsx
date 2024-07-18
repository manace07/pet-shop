import React from 'react';
import { IonButton, IonImg, IonPage, IonContent, IonRouterLink } from '@ionic/react';
import './Main.css';
import logo from '../../assets/logo.jpg';

const Main: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='main-content'>
        <div className="main-logo">
          <IonImg src={logo} alt="Logo" className="main-ionImg" />
        </div>

        <div className="button-container">
          <IonRouterLink routerLink="/login">
            <IonButton className='main-btn'>LOG IN</IonButton>
          </IonRouterLink>
          <IonRouterLink routerLink="/signup">
            <IonButton className='main-btn'>SIGN UP</IonButton>
          </IonRouterLink>
          <IonRouterLink routerLink="/home" className='forgot-password'>
            <p>Forgot Password?</p>
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
