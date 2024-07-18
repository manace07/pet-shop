import React from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonItem, IonRouterLink } from '@ionic/react';
import Navigation from './Navigation';
import './Payment.css';
import { useLocation, useHistory } from 'react-router-dom';

const Payment: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const { cartItems, total } = location.state as { cartItems: any[], total: number };

  const handlePayment = () => {
    // Handle payment processing here
    alert('Payment Successful');
    history.push('/home'); // Navigate to home page after alert
  };

  const goBack = () => {
    history.goBack(); // Navigate back to the previous page
  };

  return (
    <IonPage>
      <Navigation />
      <IonContent>
        <div className="container">
          <div className="header">
            <h1>Payment</h1>
          </div>
          <div>
            <h2>Order Summary</h2>
            {cartItems.map((item, index) => (
              <IonItem key={index}>
                <IonLabel>
                  {item.name} - {item.quantity} x {item.price}
                </IonLabel>
              </IonItem>
            ))}
            <div className="total">
              <h3>Total Amount: ₱{total.toFixed(2)}</h3>
            </div>
          </div>
          <div className="payment-form">
            <IonItem>
              <IonLabel position="floating">Full Name</IonLabel>
              <IonInput type="text" placeholder="Enter here" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Full Address</IonLabel>
              <IonInput type="text" placeholder="Enter here" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Mode of Payment</IonLabel>
              <IonInput type="text" placeholder="COD / Gcash" />
            </IonItem>
            <IonRouterLink routerLink="/cart">
              <IonButton className='payment-btn' color="medium">Back</IonButton>
            </IonRouterLink>
            <IonButton className='payment-btn'  onClick={handlePayment}>Pay Now</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Payment;
