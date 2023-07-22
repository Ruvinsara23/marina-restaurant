
import { Route,Routes } from 'react-router-dom';
import Homepage from './routers/home/home.component';
import React from 'react'
import Navbar from './routers/navBar/navBar.component';
import SignIn from './routers/signIn/SignIn';



const Menu = () => {
  return (
    <div>
      <div>
        <h1>This the nav shop
        background-color: $primary-bg-color;
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 10px 20px;
        font-size: 16px;
      
        </h1>
      </div>
    </div>
  )
}






function App() {
  return (
    <Routes>
       <Route path='/' element={<Navbar />}>
        <Route  index element={<Homepage />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/sign-in' element={<SignIn  />} />
       </Route>
    </Routes>
  );
}

export default App;
