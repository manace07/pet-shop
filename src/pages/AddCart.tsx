import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonButton, IonIcon, IonGrid, IonRow,
IonCol } from '@ionic/react';
import { cart, personCircle, cartOutline, personCircleOutline } from 'ionicons/icons';
import logo from '../../assets/logo.jpg';
import './AddCart.css';
import Navigation from './Navigation';

const AddCart: React.FC = () => {
return (
<IonPage>
    <Navigation/>
    <IonContent className='addCart-content'>
        <div className="container">
            <div className="header">
                <h1>FISH FOOD</h1>
            </div>
            <div className="image-container">
                <img src="assets/fish-food.jpg" alt="Fish Food" />
            </div>
            <div className="info">
                <h2>Okiko Platinum</h2>
                <p>₱150.00</p>
                <IonButton expand="block" className="add-to-cart">
                    Add to Cart
                </IonButton>
            </div>
        </div>
    </IonContent>
</IonPage>
);
};

export default AddCart;