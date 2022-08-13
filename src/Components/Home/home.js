import {useSelector} from 'react-redux'
import '../Container/container.css'

function Ad(){

    let ads = useSelector(abc=>abc.adReducer.users)
    
    if(ads){
        return <div className='ads'>

        {ads.map((ad)=>{

            return    <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={ad.src}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                    {ad.title}
                    </span>
                    <p>{ad.detail}</p>
                </div>
            </div>
        })}      
    </div>
    }

    
    
    return <div>

    </div>
}

export default ()=>{

    // let log = useSelector((abc)=>{
    //     return abc.userReducer.currentuser || ''
    // })

    return <div>
        {/* {log.name1} {log.name2} */}
        <h1>
            Welcome !
        </h1>
        { localStorage.getItem('token') ? <Ad /> : ''}
        {/* <Ad /> */}
    </div>
}