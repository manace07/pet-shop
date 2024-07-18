import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonButton, IonInput } from '@ionic/react';
import Navigation from './Navigation';
import './Cart.css';
import { useHistory } from 'react-router-dom';

interface CartProps {
  cartItems: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState<number>(0);
  const history = useHistory();

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + (parseFloat(item.price.replace('₱', '').replace('/kg', '')) * item.quantity), 0);
    setTotal(newTotal);
  }, [cartItems]);

  const removeFromCart = (product: any) => {
    const updatedCartItems = cartItems.filter(item => item.name !== product.name);
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (product: any, quantity: number) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.name === product.name) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const goToPayment = () => {
    history.push('/payment', { cartItems, total });
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <IonPage>
        <Navigation />
        <IonContent>
          <div className="container">
            <div className="header">
              <h1>Your Cart</h1>
            </div>
            <p>Your cart is empty.</p>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Navigation />
      <IonContent>
        <div className="container">
          <div className="header">
            <h1>Your Cart</h1>
          </div>
          <IonList className='list-cart'>
            {cartItems.map((item, index) => (
              <IonItem className='item-cart' key={index}>
                <IonLabel>
                  {item.name} - Price: {item.price}
                </IonLabel>
                <IonInput
                  type="number"
                  value={item.quantity}
                  onIonChange={e => updateQuantity(item, parseInt(e.detail.value!, 10))}
                  min="1"
                />
                <IonButton color="danger" onClick={() => removeFromCart(item)}>Delete</IonButton>
              </IonItem>
            ))}
          </IonList>
          <div className="total">
            <h2>Total: ₱{total.toFixed(2)}</h2>
          </div>
          <div className="cart-proceed">
          <IonButton expand="full" onClick={goToPayment}>Proceed to Payment</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
