import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {useForm} from 'react-hook-form'
import store from '../Store/Store 7'
import axios from "axios"

export default ()=>{

  let {register, handleSubmit, formState:{errors}} = useForm()

  let navigate = useNavigate()

  // let users = useSelector ((abc)=> {
  //   return abc.userReducer.users
  // }
  // )

  
async function loginuser(user){
  
  let abc = await axios.post('/login', user)
  let Loguser = abc.data.allusers

  localStorage.setItem('token', abc.data.tokencode)

  if(Loguser){
    navigate('/home')
    store.dispatch({
      type: "USER_LOGIN",
      payload: Loguser
    })
  } else{
    alert('User Not Found')
  }


  // let usercheck = users.find((signupuser)=>{
  //       if(signupuser.email == user.mail && signupuser.password == user.pass){
  //         return true
  //       }
  //       })

  //       if(usercheck){
  //         navigate('/home')

  //         store.dispatch({
  //           type: "USER_LOGIN",
  //           payload: usercheck
  //         })
  //       } else{
  //         alert ('User Not Found')
  //       }
  }
    return <div>
    
  <div className="section" />
  <main>
    <center>
      <img
        className="responsive-img"
        style={{ width: 250 }}
        src="https://i.imgur.com/ax0NCsK.gif"
      />
      <h5 className="indigo-text">Please, login into your account</h5>
      <div className="container">

        <div className="z-depth-1 grey lighten-4 row" style={{
            display: "inline-block",
            padding: "32px 48px 0px 48px",
            border: "1px solid #EEE"
          }}
        >
          <form className="col s12" method="post" onSubmit={handleSubmit(loginuser)}>

            <div className="row">
              <div className="input-field col s12">
                <input className="validate" type="email" placeholder="Enter your email" {...register('mail', {required:true})} />
                {errors.mail && <div>Blank Field Not Applicable</div>}
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input className="validate" type="password" placeholder="Enter your password" {...register('pass', {required:true})} />
                {errors.pass && <div>Blank Field Not Applicable</div>}
              </div>
              <label style={{ float: "right" }}>
                <a className="pink-text" href="#!" >
                  <b>Forgot Password?</b>
                </a>
              </label>
            </div>

            <br />
            
            <center>
              <div className="row">
                <button type="submit" name="btn_login" className="col s12 btn btn-large waves-effect indigo"
                >
                  Login
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </center>
  </main>
</div>

}