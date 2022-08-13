import {useSelector} from 'react-redux'
import { useEffect , useState} from 'react'
import axios from 'axios'


export default ()=>{

    // let users = useSelector((abc)=>{
    //     return abc.userReducer.users
    // })
    
    let [users, setusers] = useState([])
    useEffect(()=>{

        getUser()
    }, [])

    const getUser = async ()=>{
        const user = await axios.get('/gets')
        setusers(user.data || [])
    }

    return <div>
        <table>
            <tbody>
            <tr>
                <td><b>USER NAME</b></td>
                <td><b>EMAIL</b></td>
                <td><b>PHONE NO.</b></td>
                <td><b>PASSWORD</b></td>
            </tr>

            {
                users.map((user)=>{
                    return <tr>
                        <td>{user.name1} {user.name2}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.password}</td>
                    </tr>
                })
            }

            </tbody>
        </table>

    </div>
}