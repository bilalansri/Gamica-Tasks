import {useForm} from 'react-hook-form'
import mystore from '../Store/Store 7'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
 

export default ()=>{

  let {register, handleSubmit, formState:{errors}} = useForm()
  let Nav = useNavigate()

async function adduser(user){
    // mystore.dispatch({
    //   type:"CREATE_USER",
    //   payload:user
    // })
    // alert('User Created')
    // Nav('/admin')

    try {

      user.id = Math.round(Math.random()  * 2000)

      await axios.post('/signup', user)
      Nav('/login')
    } catch (error) {
      alert('DataBase Not Available')
    }

  }


    return <form className="col s4" onSubmit={handleSubmit(adduser)}>
    <div className="row">

      <div className="input-field col s12">
        <input id="FirstName" type="text" className="validate" placeholder="First Name" {...register('name1', {required:true })}/>
        {errors.name1 && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="LastName" type="text" className="validate" placeholder="Last Name" {...register('name2', {required:true })}/>
        {errors.name2 && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="Email" type="email" className="validate" placeholder="Email" {...register('email', {required:true })}/>
        {errors.email && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="Phone" type="number" className="validate" placeholder="Phone" {...register('phone', {required:true })} />
        {errors.phone && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="Password" type="password" className="validate" placeholder="Password" {...register('password', {required:true})}/>
        {errors.password && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <button type="submit" className="waves-effect waves-light btn">
          Sign Up
        </button>
      </div>
    </div>
  </form> 
}