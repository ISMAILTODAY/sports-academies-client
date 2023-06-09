import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../AuthContext/AuthContext";
import Darkreader from 'react-darkreader';




const NavigationBar = () => {
    const { user, logOut } = useContext(AuthProvider)

    const handleLogout = () => {
        logOut()
    }

    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructor</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        {
            user ? <> <li onClick={handleLogout}><a>Logout</a></li></> : <> <li><Link to='/login'>Login</Link></li></>
        }
    </>

    return (
        <div className="fixed top-0 left-0 right-0 z-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-semibold">SPORTS ACADEMIES</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <img className="rounded-full w-10 h-10 mr-5" title={user?.displayName} src={user?.photoURL} alt="" />

                    }
                    <Darkreader></Darkreader>


                </div>

            </div>
        </div>
    );
};

export default NavigationBar;