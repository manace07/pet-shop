import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton, IonImg, IonInput, IonPage, IonContent, IonGrid, IonCol, IonHeader, IonToolbar, IonButtons, IonBackButton, IonAlert } from '@ionic/react';
import './Signup.css';
import logo from '../../assets/logo.jpg';
import { caretBack } from 'ionicons/icons';

const Signup: React.FC = () => {
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);

  const handleSignup = () => {
    setShowAlert(true);
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
    history.push('/login'); // Replace with your login page route
  };

  return (
    <IonPage>
      <IonHeader className='signup-header'>
        <IonButtons slot="start">
          <IonBackButton icon={caretBack}></IonBackButton>
        </IonButtons>
      </IonHeader>
      <IonContent className='signup-content'>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={handleAlertDismiss}
          header={'Success'}
          message={'Registered successfully!'}
          buttons={['OK']}
        />
        <div className="signup-logo">
          <IonImg src={logo} alt="Logo" className='signup-ionImg' />
        </div>
        <IonGrid className='signup-grid'>
          <IonCol size='12' className='signup-col'>
            <IonInput className='signup-input' label="Full Name" labelPlacement="floating" placeholder="Enter full name">
            </IonInput>
          </IonCol>
          <IonCol size='12' className='signup-col'>
            <IonInput className='signup-input' label="Email" labelPlacement="floating" placeholder="example@mail.com">
            </IonInput>
          </IonCol>
          <IonCol size='12' className='signup-col'>
            <IonInput className='signup-input' label="Phone Number" labelPlacement="floating"
              placeholder="Enter 11 digit number"></IonInput>
          </IonCol>
          <IonCol size='12' className='signup-col'>
            <IonInput className='signup-input' label="Password" labelPlacement="floating" placeholder="Enter password"
              type="password"></IonInput>
          </IonCol>
          <IonCol size='12' className='signup-col'>
            <IonButton className='signup-btn' onClick={handleSignup}>SIGN UP</IonButton>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Signup;
