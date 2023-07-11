
// firebase imports
import { auth } from "../firebase/config"
import { signOut } from "firebase/auth"


export const useLogout = () => {

    const logout = () => {
        signOut(auth)
            .then(() => {
               console.log("Loged out");

            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return { logout }
}