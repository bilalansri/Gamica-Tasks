import { useState, useEffect } from 'react'
import {FaHeart} from 'react-icons/fa'
import imga from './Images/a.jpg'
import imgb from './Images/b.jpg'
import imgc from './Images/c.jpg'
import './container.css'

export default ()=>{
    
    let [ads, setads] = useState([{
            title: "Range Rover",
            description: "Price	Ranges from $ 62,670.00 to $94,291.00 Safety ANCAP Rating 5 Number of Doors	4 Seating Capacity 5 Boot Space	591 Litres",
            like: false,
            image: imga
            },
            {
            title: "Range Rover",
            description: "The Range Rover Evoque is an OK SUV. ... The Evoque plays well in civilization too, with a choice of two spunky turbocharged engines, a comfortable ride, and demure handling. However, the Evoque's second-row space and fuel economy are subpar for the segment, and using the infotainment system may require some practice",
            like: false,
            image: imgb
            },
            {
            title: "Range Rover",
            description: "LUMMA CLR R. SUITABLE FOR RANGE ROVER 5.0 SV AUTOBIOGRAPHY.",
            like: false,
            image: imgc
            },
            {
            title: "Range Rover",
            description: "Price	Ranges from $ 62,670.00 to $94,291.00 Safety ANCAP Rating 5 Number of Doors	4 Seating Capacity 5 Boot Space	591 Litres",
            like: false,
            image: imgb
            },
            {
            title: "Range Rover",
            description: "LUMMA CLR R. SUITABLE FOR RANGE ROVER 5.0 SV AUTOBIOGRAPHY.",
            like: false,
            image: imgc
            },
            {
            title: "Range Rover",
            description: "Price	Ranges from $ 62,670.00 to $94,291.00 Safety ANCAP Rating 5 Number of Doors	4 Seating Capacity 5 Boot Space	591 Litres",
            like: false,
            image: imga
            },
            {
            title: "Range Rover",
            description: "The Range Rover Evoque is an OK SUV. ... The Evoque plays well in civilization too, with a choice of two spunky turbocharged engines, a comfortable ride, and demure handling. However, the Evoque's second-row space and fuel economy are subpar for the segment, and using the infotainment system may require some practice",
            like: false,
            image: imgb
            },
            {
            title: "Range Rover",
            description: "LUMMA CLR R. SUITABLE FOR RANGE ROVER 5.0 SV AUTOBIOGRAPHY.",
            like: false,
            image: imgc
            },
            {
            title: "Range Rover",
            description: "Price	Ranges from $ 62,670.00 to $94,291.00 Safety ANCAP Rating 5 Number of Doors	4 Seating Capacity 5 Boot Space	591 Litres",
            like: false,
            image: imga
            },
            {
            title: "Range Rover",
            description: "LUMMA CLR R. SUITABLE FOR RANGE ROVER 5.0 SV AUTOBIOGRAPHY.",
            like: false,
            image: imgc
            }
    ])

    function addlist(evt, indx){
        
        ads[indx].like = !ads[indx].like
        setads([...ads])

        localStorage.setItem("select" , JSON.stringify(ads) )
    }
    
    useEffect(()=>{
        
        let a = JSON.parse (localStorage.getItem("select"))
        setads([...a])
    }, [])

    return <>
    <h1>Welcome To Car ShowRoom !!!</h1>
    <div className='addiv'>

        {ads.map((ad, indx)=>{

            return    <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={ad.image}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                    {ad.title}
                    <i className="material-icons right">
                        Save
                        <button className={ad.like ? 'liked' : 'notlike'} onClick={(evt)=>addlist(evt, indx)}>
                            <FaHeart />
                        </button>
                    </i>
                    </span>
                    <p>{ad.description}</p>
                </div>
            </div>
        })}      
    </div>
    </>
}