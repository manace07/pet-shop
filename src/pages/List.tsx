import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './List.css';
import Navigation from './Navigation';

interface ListProps {
  cartItems: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const List: React.FC<ListProps> = ({ cartItems, setCartItems }) => {
  const history = useHistory();

  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.name === product.name);
    let updatedCartItems;
    if (existingItem) {
      updatedCartItems = cartItems.map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    setCartItems(updatedCartItems);
  };

  const products = [
    { name: 'Special Cat food 7kg (Cat Food)', price: '₱179.00/kg', image: 'assets/catfood.png' },
    { name: 'Adult Yum Yum! Dog Food', price: '₱63.00/kg', image: 'assets/fish.png' },
    { name: 'Bowl', price: '₱79.00', image: 'assets/bowl.png' },
    { name: 'Hamster', price: '₱300.00', image: 'assets/hamster.png' },
  ];

  return (
    <IonPage>
      <Navigation />
      <IonContent>
        <div className="container">
          <div className="header">
            <h1>List of Products</h1>
          </div>
          <IonGrid>
            {products.map((product, index) => (
              <IonRow key={index}>
                <IonCol size="12" className="product-container">
                  <div className="product">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <IonButton expand="block" onClick={() => addToCart(product)} className="flex ion-justify-content-center">Add to Cart</IonButton>
                  </div>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default List;
