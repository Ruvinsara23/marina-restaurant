import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context';
import { useState,useEffect } from 'react';
import { db } from '../../utils/firebase.utils';
import { collection,getDocs, } from 'firebase/firestore'
import OrderHistoryCard from '../order-history-card.component/order-history-card';
import './order-history.style.scss'

const OrderHistoryComponent = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    const {currentUser,setCurrentUser}= useContext(UserContext);

    useEffect(() => {

        const userDataCollection=collection(db,"users")
      
        const orderHistoryCollectionRef = collection(userDataCollection, currentUser.uid, 'orderHistory');
    
     
        const fetchOrderHistory = async () => {
          try {
            const querySnapshot = await getDocs(orderHistoryCollectionRef);
            const orders = [];
            querySnapshot.forEach((doc) => {
              orders.push(doc.data());
            });
            setOrderHistory(orders);
          } catch (error) {
            console.error('Error retrieving order history:', error);
          }
        };
        
        fetchOrderHistory();
        
      }, []);




  return (
    <div>
    
    <h2>Oder History</h2>
    <div className='order-history-component'>
    {orderHistory.map((order,index) => (
        <OrderHistoryCard key={index} order={order}/>))}
    </div>
    
    </div>
  )
}

export default OrderHistoryComponent
