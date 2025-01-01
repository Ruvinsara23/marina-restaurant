import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context';
import { useState,useEffect } from 'react';
import { db } from '../../utils/firebase.utils';
import { collection,getDocs,  query, where,} from 'firebase/firestore'
import OrderHistoryCard from '../order-history-card.component/order-history-card';
import './order-history.style.scss'

const OrderHistoryComponent = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    const {currentUser}= useContext(UserContext);

    useEffect(() => {

        const userDataCollection=collection(db,"users")
      
        const orderHistoryCollectionRef = collection(userDataCollection, currentUser.uid, 'orderHistory');
    
     
        const fetchOrderHistory = async () => {
          try {
            const filteredQuery = query(
              orderHistoryCollectionRef,
            
            );
        
            const querySnapshot = await getDocs(filteredQuery);
            const orders = [];
            let currentIndex = 0;
            const totalRecords = querySnapshot.size;
        
            console.log('Total records:', totalRecords);
        
            querySnapshot.forEach((doc) => {
              const orderData = doc.data();
        
          
              if (currentIndex < totalRecords - 1) {
                orders.push(orderData);
                console.log('Order added:', orderData);
                console.log('Current index:', currentIndex);
              }
        
              currentIndex++;
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
