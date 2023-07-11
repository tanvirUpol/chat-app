import { useState } from "react";


// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending,setIsPending] = useState(false)


  const signup = async (email, password , displayName) => {
    setError(null);
    setIsPending(true)
    
    try{
      const res = await createUserWithEmailAndPassword(auth , email, password)

      // console.log(res);

      if(!res){
        throw new Error("Couldn't create user")
      }

      // add display name to user
      await updateProfile(res.user,{displayName})
      setIsPending(false);
      setError(null);
    }
    catch(err) {
      console.log(err);
      setError(err.message);
      setIsPending(false)
     }

  };

  return { error, signup , isPending};
};
