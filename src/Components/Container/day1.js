import "./container.css"
import {useRef} from 'react'

export default function Container(){
    function sums(evt){
    
        three.current.value = +one.current.value + +two.current.value;   
    }
    let one = useRef();
    let two = useRef();
    let three = useRef();
    
    return <div id="container">
        
        <div>
         <input ref={one} placeholder="Enter Any Number"></input>
         <input ref={two} placeholder="Enter Any Number"></input>
         <input ref={three} placeholder="Total Sum"></input>

         </div>

         <button onClick={sums}>Sum Numbers</button>
        
    </div>
}