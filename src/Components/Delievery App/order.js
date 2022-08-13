import {useState} from 'react';

export default ()=>{
    
    let [menu, setmenu] = useState([{
            name: 'Biryani',
            price: 250,
            checked: false,
            qty: 0
        },{
            name: 'Mutton',
            price: 1850,
            checked: false,
            qty: 0
        },{
            name: 'Chicken',
            price: 850,
            checked: false,
            qty: 0
        },{
            name: 'Raita+Salad',
            price: 100,
            checked: false,
            qty: 0
        },{
            name: 'ColdDrink',
            price: 150,
            checked: false,
            qty: 0
        }]);

        let [netbill, setnet] = useState();
        let [gst, setgst] = useState();
        let [discount, setdis] = useState();
        let [gross, setgross] = useState();

        function changecheck(evt, index){

            menu[index].checked = evt.target.checked;
            setmenu([...menu]);
        }

        function changeinp(evt, index){

            if(evt.target.value > 0){
                menu[index].qty = evt.target.value;
                setmenu([...menu]);
            } else{
                return evt.target.value = 0;
            }
            
        }


    return <div>

    <table border='1px solid'>
        <tbody>
        <tr>
            <td><h4>Dishes</h4></td>
            <td><h4>Quantity</h4></td>
            <td><h4>Prices</h4></td>
            <td><h4>Select</h4></td>
            
        </tr>

        {menu.map((dish, index)=>{

            return <tr>
                      <td>{dish.name}</td>
                      <td>
                        <input type='number' min='1' onChange={(evt)=>changeinp(evt, index)}></input>
                      </td>
                      <td>{dish.price}</td>
                      <td>
                          <input type='checkbox' onChange={(evt)=>changecheck(evt, index)}></input>
                            <p>
                            <label>
                                <input type="checkbox" onChange={(evt)=>changecheck(evt, index)}/>
                                <span></span>
                            </label>
                            </p>
                      </td>
                   </tr> 

        })}

        <tr>
            <td><h4>Total</h4></td>
                
            <td>
                <div>Gross Bill = <b>{gross}</b></div>
                <div>Discount (-10%) = <b>{discount}</b></div>
                <div>GST (+5%) = <b>{gst}</b></div>
                <div>Net Bill = <b>{netbill}</b></div>
            </td>
                
            <td>
                <div>
                    <button onClick={()=>{
                        
                       let total = 0;
                       let dishes = menu.filter((a)=> a.checked);
                        
                       dishes.forEach((dish)=>{
   
                        let qty = dish.qty;
                        let rate = dish.price;

                        total += qty * rate;
                            
                        setgross (total) ;
                        setnet (total);
                        setgst (0);
                        setdis (0);
                            
                        if(total > 1500){
                            setdis (total * 0.10);
                            setnet (total - total * 0.10);
                        }
                    })
                    }
                    } className="waves-effect waves-light btn">Get Bill</button>
                </div>
            </td>
                
            <td>
                <div>
                    <button onClick={()=>{

                        setgst (gross * .05);
                        setnet (gross - discount + (gross * .05));

                    }} className="waves-effect waves-light btn">Add GST</button>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
}