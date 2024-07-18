import React from 'react'
import { IonButton, IonImg, IonPage, IonContent, IonGrid, IonCol, IonInput, IonHeader, IonToolbar, IonButtons, IonBackButton, IonRouterLink } from '@ionic/react'
import './Login.css'
import logo from '../../assets/logo.jpg'
import { caretBack } from 'ionicons/icons'

const Login: React.FC = () => {
return (
<IonPage>
<IonHeader className='signup-header'>
    <IonButtons slot="start">
      <IonBackButton icon={caretBack}></IonBackButton>
    </IonButtons>
  </IonHeader>
  <IonContent className='login-content'>
    <div className="login-logo">
      <IonImg src={logo} alt="Logo" class='login-ionImg'/>
    </div>
    <IonGrid className='login-grid '>
      <IonCol size='12' className='login-col'>
        <IonInput label="Email" labelPlacement="floating" fill="solid" placeholder="example@mail.com" className='login-input'></IonInput>
      </IonCol>
      <IonCol size='12' className='login-col'>
        <IonInput label="Password" labelPlacement="floating" fill="outline" placeholder="Enter password" className='login-input'></IonInput>
      </IonCol>
      <IonCol size='12' className='flex justify-center login-col'>
      <IonRouterLink routerLink="/home" className='login-button'>
      <IonButton className='login-btn'>LOG IN</IonButton>
      </IonRouterLink>
      </IonCol>
    </IonGrid>
  </IonContent>
</IonPage>
)
}

export default Login