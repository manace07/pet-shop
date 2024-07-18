import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonAvatar, IonGrid,IonRouterLink , IonRow, IonCol, IonButton, IonIcon } from
'@ionic/react';
import { heart, cart, cartOutline, personCircleOutline,peopleCircleOutline } from 'ionicons/icons';
import './Profile.css';
import logo from '../../assets/logo.jpg';
import profile from '../../assets/profile.png';
import Navigation from './Navigation';

const Profile: React.FC = () => {
return (
<IonPage>
  <Navigation/>
  <IonContent className='profile-content'>
    <IonGrid className="profile-grid">
      <IonRow className="ion-justify-content-center">
        <IonCol size="12" className="ion-text-center">
          <IonAvatar>
            <img src={profile} alt="Logo" className="profile-img" />
          </IonAvatar>
          <h2>Mike Smith</h2>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="12" className="flex ion-justify-content-center profile-col">
          <IonButton fill='clear' className='profile-button'>
            <IonIcon slot="start" icon={heart} className="profile-icon"></IonIcon>
            Favorites
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="12" className="flex ion-justify-content-center profile-col">
          <IonButton fill='clear' className='profile-button'>
            <IonIcon slot="start" icon={cart} className="profile-icon"></IonIcon>
            Purchases
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
</IonPage>
);
};

export default Profile;