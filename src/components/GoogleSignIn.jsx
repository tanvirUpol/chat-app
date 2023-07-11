import { useState } from "react";
import { auth, Gprovider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";


import gooogleLogo from "../assets/googleLogo.svg";

const GoogleSignIn = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async () => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, Gprovider);

   

      if (!res) {
        throw new Error("We ran into a problem when trying to sign in");
      }


      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.code);
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center text-neutral-500 font-semibold">
          or
        </p>
      </div>
      <div
        onClick={login}
        className="w-full rounded-lg bg-gray-100 px-5 py-3 text-center font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-teal-300 flex items-center justify-center gap-4 cursor-pointer"
      >
        <img src={gooogleLogo} width={22} alt="" />
        <span>Continue With Google</span>
      </div>
      {error && (
        <p className="rounded-md border border-red-700 bg-red-100 p-4  text-red-600">
          {error}
        </p>
      )}
    </>
  );
};
export default GoogleSignIn;
