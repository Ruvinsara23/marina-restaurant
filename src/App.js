
import { Route,Routes } from 'react-router-dom';
import Homepage from './routers/home/home.component';
import React from 'react'
import Navbar from './routers/navBar/navBar.component';
import SignIn from './routers/signIn/SignIn';
import Menu from './routers/menu/menu.component';
import CheckOut from './routers/checkout/checkout.component';
import Profile from './routers/profile/profile.component';
import AboutUs from './routers/aboutus/about-us';
import Footer from './components/footer/footer';










function App() {
  return (
    <Routes>
       <Route path='/' element={<Navbar />}>
        <Route  index element={<Homepage />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/sign-in' element={<SignIn  />} />
        <Route path='/check-out' element={<CheckOut  />} />
        <Route path='/user-profile' element={<Profile />} />
        <Route path='/about-us' element={<AboutUs />} />
       </Route>
       
    </Routes>
  );
}

export default App;
