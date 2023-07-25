
import { Route,Routes } from 'react-router-dom';
import Homepage from './routers/home/home.component';
import React from 'react'
import Navbar from './routers/navBar/navBar.component';
import SignIn from './routers/signIn/SignIn';
import Menu from './routers/menu/menu';










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
