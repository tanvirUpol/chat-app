import { useState } from "react";



// firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false)




  const login = async (email, password ,setUser) => {
    setError(null);
    setIsPending(true)

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)

      console.log(res);

      if (!res) {
        throw new Error("We ran into a problem when trying to sign in")
      }

      setIsPending(false);
      setError(null);
    }
    catch (err) {
      setError(err.code);
      setIsPending(false)
    }
  };

  return { error, login, isPending };
};
