import { Navigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";


const Protected = ({ children }) => {
  const [user, setUser] = useOutletContext();

  return user ? (
    children
  ) : (
    <Navigate to="/signin" replace={true} />
  );
};

export default Protected;
