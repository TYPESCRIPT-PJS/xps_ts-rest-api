import {Request, Response} from 'express'
import User,{IUser} from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/config'

function createToken(user:IUser){
    return jwt.sign({id:user.id, email:user.email},config.jwtSecret);
}

export const singUp=async (req:Request,res:Response):Promise<Response>=>{
    if(!req.body.email || !req.body.password)
    return res.status(400).json({msg: "Please send your email and password"})
    
    const user=await User.findOne({email:req.body.email});
    if(user){
        res.status(400).json({msg:"El usuario ya existe"})
    }
    const newUser=new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser);
}

export const singIn=async (req:Request,res:Response)=>{
    if(!req.body.email || !req.body.password)
    return res.status(400).json({msg: "Please send your email and password"})

    const user=await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({msg:"El usario indicadp no existe"})
    }

    const isMAtch=await user.comparePassword(req.body.password);
    if(isMAtch){
        return res.status(200).json({token:createToken(user)})
    }

    return res.status(400).json({msg:"La contrasenia o el usuario son incorrectos"})
    
}

