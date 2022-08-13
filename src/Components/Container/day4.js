import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../Header/header';
import Login from '../Login/login';
import Signup from '../SignUp/signup';
import Order from '../Delievery App/order';
import Home from '../Home/home';


export default ()=>{
    
   
    return <div>
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/order' element={<Order />}></Route>
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
        </div>
}


// Because of some changing in all routes, This Code didn't usefull, If we wanna Run this code we've to change all routes logic without using store for example run all route without store method, Change the store logic into local logic