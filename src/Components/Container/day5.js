import Play from 'react-youtube';
import {useParams, Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react'
import './container.css';

function Videoitem(props){
    return <div>
    <Link to={'/'+ props.video.id }>
        <div className='padd'>
        <img src={'http://img.youtube.com/vi/' +props.video.id+ '/0.jpg'} width='220px'/>
        <h5>{props.video.title}</h5>
        </div>
    </Link>
        <button onClick={()=>{

            props.videos.splice(props.indx, 1)
            props.setvideos([...props.videos])

        }}>Delete</button>
    </div>
}


function Youtube(){

    let params = useParams();

    let [videos, setvideos] = useState([
        {
            id: 'bdxMc06WvqI',
            title: 'PSL 7 Anthem'
        },
        {
            id: '7D4vNcK6D38',
            title: 'Tu Jhoom'
        },
        {
            id: 'kw4tT7SCmaY',
            title: 'Afreen Afreen'
        },
        {
            id: 'a18py61_F_w',
            title: 'Tajdar e Haram'
        },
        {
            id: 'ZQMn5wIoAno',
            title: 'Tu Kuja Man Kuja'
        }
    ])

    return <div>
        <Play videoId={params.vID || 'kw4tT7SCmaY'}/>

        <div className='flex'>
        {videos.map((video, indx)=>{
            return <Videoitem setvideos={setvideos} videos={videos} indx={indx} video={video}/>
        })}
        </div>
    </div>
}

export default ()=>{

    return <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Youtube/>} />
                <Route path='/:vID' element={<Youtube/>} />
            </Routes>
        </BrowserRouter>
    </div>
}