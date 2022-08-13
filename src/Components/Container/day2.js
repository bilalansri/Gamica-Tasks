import './container.css';




// Need To Comment Materialize css Link from Public Folder and Index.html file






export default ()=>{
    
    let menu = [{
            name: 'Biryani',
            price: 250
        },{
            name: 'Mutton',
            price: 1850
        },{
            name: 'Chicken',
            price: 850
        },{
            name: 'Raita+Salad',
            price: 100
        },{
            name: 'ColdDrink',
            price: 150
        }];
    
    return <div id='container'>

        <table border='1px solid'>

            <tbody>

            <tr>
                <td><h4>Dishes</h4></td>
                <td><h4>Quantity</h4></td>
                <td><h4>Prices</h4></td>
                <td><h4>Select</h4></td>
            
            </tr>

            {menu.map((dish)=>{

                return <tr>
                            <td>{dish.name}</td>
                            <td><input type='number' min='1'></input></td>
                            <td>{dish.price}</td>
                            <td><input type='checkbox'></input></td>
                        </tr> 

            })}

            <tr>
                <td><h4>Total</h4></td>
                
                <td>
                    <div>Gross Bill = <b id='gross'></b></div>
                    <div>Discount (-10%) = <b id='dis'></b></div>
                    <div>GST (+5%) = <b id='gsts'></b></div>
                    <div>Net Bill = <b id='netbill'></b></div>
                </td>
                
                <td></td>
                
                <td>
                    
                    <div>
                        <button onClick={ ()=>{
                        
                        let total = 0;
                        let dishes = document.querySelectorAll("input:checked");
                        
                        dishes.forEach((dish)=>{
                            
                            let qty = dish.parentNode.previousElementSibling.previousElementSibling.children[0].value;
                            let rate = dish.parentNode.previousElementSibling.innerText;
                            
                            total += qty * rate;
                            
                            let netbill = document.getElementById('netbill');
                            let gross = document.getElementById('gross');
                            let dis = document.getElementById('dis');
                            let gsts = document.getElementById('gsts');
                            
                            gross.innerText = total ;
                            netbill.innerText = total;
                            gsts.innerText = 0;
                            dis.innerText = 0;
                            
                            if(total > 1500){
                                dis.innerText = total * 0.10;
                                netbill.innerText = gross.innerText - dis.innerText;
                            }
                        })
                    }

                    }>Get Bill</button>
                    </div>


                    <div>
                        
                        <button onClick={()=>{

                            let netbill = document.getElementById('netbill');
                            let gross = document.getElementById('gross');
                            let dis = document.getElementById('dis');
                            let gsts = document.getElementById('gsts');

                            gsts.innerText = gross.innerText * .05;
                            netbill.innerText = gross.innerText - dis.innerText + +gsts.innerText;

                    }}>Add GST</button>

                    </div>
                </td>
            </tr>

            </tbody>

        </table>
                
    </div>
}