import { Navigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";


const Unautorized = ({ children }) => {
  const [user, setUser] = useOutletContext();

  return !user ? children : <Navigate to="/" replace={true} />;
};

export default Unautorized;
