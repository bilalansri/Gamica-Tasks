import {Provider} from 'react-redux'
import mystore from '../Store/Store 7'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from '../SignUp/signup'
import Header from '../Header/header'
import Login from '../Login/login'
import Home from '../Home/home'
import Admin from '../Admin Panel/admin'
import CreateAd from '../CreateAd/createad'
import Order from '../Delievery App/order'
import {useEffect} from 'react'
import axios from 'axios'


export default ()=>{

    useEffect(()=>{

        axios.post('/token-check', {token:localStorage.getItem('token')}).then((resp)=>{
          
          if(resp.data){
            mystore.dispatch({
              type:"USER_LOGIN",
              payload:resp.data
             });
           }
   
         });
   
     }, [])

    return <div>
        <Provider store={mystore}>
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/adcreate' element={<CreateAd />} />
                <Route path='/order' element={<Order />} />
            </Routes>
        </BrowserRouter>
        </Provider>
    </div>
}