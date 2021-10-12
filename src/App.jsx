import React from 'react';
import Announcement from './components/extras/Announcement';
import NavBar from './components/navBar'
import Slider from './components/slider/'
import Categories from './components/categories';
import Products from './components/products';
import Footer from './components/footer';
import CreateBy from './components/extras/CreateBy';

const App = () =>{
  return ( 
    <div>
    <Announcement />    
    <NavBar />
    <Slider/>
    <Categories/>
    <Products/>
    <Footer/>
    <CreateBy/>
    </div>
  )
}

export default App;
