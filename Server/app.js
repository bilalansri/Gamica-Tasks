let myexpress = require('express')
let multer = require('multer')
let mongoose = require('mongoose')
let User = require('./Models/User')
let path = require('path');
let jsonwebtoken = require('jsonwebtoken');
let Ad = require('./Models/Ad')

mongoose.connect("Add MongoDb Link" , (err , res)=>{

console.log(err || res)

})


let app = myexpress()
app.use(myexpress.json())

// let multerstore = multer.diskStorage({
//     destination : (req , file , next)=>{
//         next(null , './Server/Multer')
//     },
//     filename : (req , file , next)=>{
//         next(null , file.originalname)
//     }
// })

// let upload = multer({ storage : multerstore})


app.get('/gets',async (req, res)=>{
    let allusers = await User.find()
    res.json(allusers)
})

app.post('/login',async (req, res)=>{
    
        let allusers = await User.findOne({
            email:req.body.mail,
            password:req.body.pass
        })
        // res.json(allusers)

        try {
            jsonwebtoken.sign({ id : allusers._id } , 'token secret code' , {expiresIn:'10m'} , (err, codeddata)=>{
                res.json({
                    allusers,
                    tokencode: codeddata
                })
            })
            
        } catch (error) {
            res.json({
                allusers
            })
        }

})

//day8.js
app.post('/token-check', async (req, res)=>{

    jsonwebtoken.verify(req.body.token, "token secret code", async(err, data)=>{
    if(data){
            let user = await User.findById(data.id)
            res.json(user)
        }
    })
});



app.post('/signup', async (req, res)=>{

    let NewUser = new User()

    NewUser.name1 = req.body.name1
    NewUser.name2 = req.body.name2
    NewUser.email = req.body.email
    NewUser.phone = req.body.phone
    NewUser.password = req.body.password

    let dbuser = await NewUser.save()

    res.json(dbuser)

})

    
app.use(myexpress.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(process.env.PORT || 6000, (req, res)=>{
    console.log('Server is Running');

})



// let any = require('./modules')

// any.a();
// any.b();

// console.log("Hello World")

// let expres = require('express')

// let app = expres()


// app.get('/abc' , (inning, outing)=>{
//     console.log('abc running');
//     // outing.end('Hello')
//     // outing.sendfile('./a.txt')
//     let arr = [1,2,3,4]
//     outing.json(arr)

// })
// app.listen(6060, ()=>{
//     console.log('listen working');
// })
