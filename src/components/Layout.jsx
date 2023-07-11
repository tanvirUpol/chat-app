import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


// components
import Nav from "../components/Nav";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import Loading from "./Loading"

const Layout = () => {
  // const [user,setUser] = useState(cookies.get("auth-token"));
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    })
    
    return unsubscribe;
  }, []);




  if(loading){
    return <Loading/>
  }


  return (
    <>
      <div className="h-[100dvh] bg-yellow-50">
        <Nav user={user} />
        <main className="container mx-auto max-w-7xl px-4 h-full max-h-[92dvh]">
          <Outlet  context={[user]} />
        </main>
      </div>
    </>
  );
};
export default Layout;
