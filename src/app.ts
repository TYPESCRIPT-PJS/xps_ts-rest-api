import express from 'express';
import morgan from 'morgan'
//import cors from 'cors';
import authRoutes from './routes/auth.route'
import passportMiddleware from './middlewares/passport';
import passport from 'passport';
import special from './routes/special.route';

//inicializations
const app=express();

//settings
app.set('port',process.env.PORT||3000);

//middlewares
app.use(morgan('dev'));
//app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);
//routes

app.get('/',(req,res)=>
{res.send(`La Ip se halla en ${app.get('port')}`)});

app.use(authRoutes);
app.use(special);

export default app;