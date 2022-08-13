import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import store from '../Store/Store 7'
import './header.css';


export default  ()=>{
  
  let loguser = useSelector((abc)=>{
    return (abc.userReducer.currentuser || '')
  })

    return <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo center">
        BILAL ANSARI
      </Link>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li>
          <Link to="/home">Home</Link>
        </li>
        {
          !loguser.email ? 
          <>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          </>
          : <>
          <li>
            <Link to="/adcreate">Create Ad</Link>
          </li>
          <li>
            <Link to="/order">Delievery</Link>
          </li>
          <li>
            <Link to="/login" onClick={()=>{
              store.dispatch({
                type: "LOGOUT"
              })
            }}>Log Out</Link>
          </li>
          </>
        }
        <li>
          <Link to="/admin">Admin Panel</Link>
        </li>
        {/* {
        loguser.email ? <>
          <li>
            <Link to="/adcreate">Create Ad</Link>
          </li>
          <li>
            <Link to="/order">Delievery</Link>
          </li>
          <li>
            <Link to="/login" onClick={()=>{
              store.dispatch({
                type: "LOGOUT"
              })
            }}>Log Out</Link>
          </li>
          </>
          : ''
        } */}
      </ul>
    </div>
  </nav>
  
}