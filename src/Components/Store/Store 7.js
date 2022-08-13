import {createStore, combineReducers} from 'redux'

let userdata = {
    users:[],
    currentuser: {ads:[]}
}

function userReducer(olddata = userdata, newdata){
    olddata = {users: [...olddata.users] , currentuser: {...olddata.currentuser}}

    switch (newdata.type) {
        // case 'CREATE_USER' :
        //     olddata.users.push(newdata.payload)
        //     break;

        case 'USER_LOGIN' :
            olddata.currentuser = newdata.payload
            break;
    
        case 'LOGOUT' :
            olddata.currentuser = {}
            localStorage.removeItem('token')
            break;
    
        default:
            break;
    }

    return olddata
}

let addata = {
    users : [],

}

function adReducer(olddata = addata, newdata){
    olddata = {users : [...olddata.users]}

    switch (newdata.type) {
        case 'CREATE_AD':
            olddata.users.push(newdata.payload)
            break;
    
        default:
            break;
    }
    
    return olddata
}

let combine = combineReducers({userReducer, adReducer})

let mystore = createStore(combine)

export default mystore;