import { NavLink } from 'react-router-dom'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { useLogout } from '../hooks/useLogout';

// assets 
import logo from '../assets/logo.svg'

const Nav = ({ user }) => {
  const { logout } = useLogout()
  
  const handleLogout = () => {
    logout()
   }

  return (
    <div className="font-roboto-slab shadow max-h-[8dvh]"  >
      <nav className='container max-w-7xl mx-auto px-4 py-6 flex justify-between' >
        <NavLink to="/" className='flex items-center gap-2' >
          <img src={logo} width={24} alt="" />
          <span>Chat App</span>
        </NavLink>

        <div className='flex justify-between gap-6 font-medium' >
          {!user ?
            <>
              <NavLink className="hover:text-teal-500" to="signup" >Sign up</NavLink>
              <NavLink className="hover:text-teal-500" to="signin">Login</NavLink>
            </> :          
              <button onClick={handleLogout} className='flex items-center gap-2 hover:text-teal-500'>
                <ArrowRightOnRectangleIcon width={20} /> 
                <span>Logout</span>
              </button>
          }

        </div>
      </nav>
    </div>
  )
}
export default Nav