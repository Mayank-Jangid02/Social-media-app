import jwt from "jsonwebtoken";
import "dotenv/config.js";

export default function authmidleware(req,res,next){
   let token=req.headers.authorization;
   if(!token)
   {
      return res.json({message:"Unauthorized"});
   }
   token=token.split(" ")[1]; 
   
    let decoded= jwt.verify(token,process.env.SECRET_KEY);
         
   if(decoded){
      next();
   }else{
      return res.json({message:"Invalid token"});
   }
 
} 