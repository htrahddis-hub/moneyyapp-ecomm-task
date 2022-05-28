import './App.css';
import React from 'react';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";

function App() {

  const [user,setUser]=React.useState('');
  
  // React.useEffect(()=>{(async()=>{
  //   const data= await authorize();
  //   if(data==='ok')
  //     setUser('valid');
  // })()},[]);

  // const setuser=(user)=>{
  //   setUser('valid');
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser}/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id"  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
