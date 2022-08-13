import {useForm} from 'react-hook-form'
import store from '../Store/Store 7'
import {useNavigate} from 'react-router-dom'


export default ()=>{

  let {register, handleSubmit, formState:{errors}} = useForm()
  let Nav = useNavigate()

  function createad(ad){
    ad.src = URL.createObjectURL(ad.image[0])
    ad.like = false

    store.dispatch({
        type: 'CREATE_AD',
        payload: ad
    })
    
    alert('Ad Created')
    Nav('/home')
  }


    return <form className="col s4" onSubmit={handleSubmit(createad)}>
    <div className="row">

      <div className="input-field col s12">
        <input id="FirstName" type="text" className="validate" placeholder="Enter Ad Title" {...register('title', {required:true })}/>
        {errors.title && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="LastName" type="text" className="validate" placeholder="Enter Ad Description" {...register('detail', {required:true })}/>
        {errors.detail && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <input id="Email" type="file" className="validate" {...register('image', {required:true })}/>
        {errors.image && <div>Blank Field Not Applicable</div>}
      </div>

      <div className="input-field col s12">
        <button type="submit" className="waves-effect waves-light btn">
          Submit
        </button>
      </div>
    </div>
  </form> 
}