const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
const user = require('./models/clientMessage')
require('./db/conn')
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath)


app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use(express.urlencoded({extended: false}))
app.use(express.static(staticPath));



app.get('/',(req, res)=>{
    res.render('index')
});
app.get('/about',(req, res)=>{
    res.render('about')
});
app.get('/contact',(req, res)=>{
    res.render('contact')
});
app.get('/service',(req, res)=>{
    res.render('service')
});

app.post('/contact', async(req,res)=>{
    try {
        const userData = new user(req.body);
        await userData.save()
        res.status(201).render('index')
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(port, ()=>{
    console.log(`App is listening at port ${port}`)
})
