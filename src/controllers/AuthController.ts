import { Request, Response } from "express";

class AuthRouter{
   constructor(){

   }
   async signIn(){

   }
   async signOut(){
    
}
async signUp(req: Request, res: Response){
    const {email, name, role, password} = req.body;

    
}
}