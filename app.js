const express = require('express')
const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let accounts = [
    {
        email: 'ahamed@gmail.com',
        password: 'Hussain'
    }
]

// app.get('/',(req,res)=>{
//     res.render('homePage')
// })

app.get('/login', (req, res) => {
    res.render('home')
})

app.get('/show', (req, res) => {
    res.render('show', { accounts })
})

app.post('/', (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body)
    for (let i = 0; i < accounts.length; i++)
        if (email === accounts[i].email && password === accounts[i].password) {
            res.render('logined', { accounts })
        } else {
            res.render('unlogin', { accounts })
        }

})

app.get('/signup', (req, res) => {
    res.render('signup')
})


app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    accounts.push({ email, password });
    res.redirect('login')
})

app.listen(3000, () => {
    console.log('connected to server')
})