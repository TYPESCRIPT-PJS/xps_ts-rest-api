import { Router, Request, Response } from "express";
import  passport  from "passport";
const special=Router();
special.get('/special',passport.authenticate('jwt',{session:false}),(req:Request,res:Response)=>{
    res.send('succes!!!')
})


export default special;