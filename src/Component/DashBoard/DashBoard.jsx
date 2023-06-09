import { useContext } from "react";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import { AuthProvider } from "../AuthContext/AuthContext";
import { FaHome, FaChalkboardTeacher, FaBookReader, FaBookOpen, FaCommentDots, FaChalkboard, FaUserShield, FaUsers, FaUserEdit, FaRegUser, FaWallet, FaClipboardCheck, FaCheckSquare } from "react-icons/fa";


const DashBoard = () => {


    // todo: make admine dynamicly
    const { data: allUers = [] } = useQuery(['users'], async () => {
        const res = await fetch('https://sports-academies-server.vercel.app/user')
        return res.json();
    })
    const { user } = useContext(AuthProvider)
    const userRole = allUers.find(singleUser => singleUser?.email === user?.email);
    console.log(userRole)

    // const isAdmin = 1;
    // const isInstructor = 0;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <h1 className="text-3xl font-semibold mb-5 ">SPORT ACADEMIES</h1>
                    {
                        userRole?.role === 'admin' ? <>
                            <li><Link to='/dashboard'><FaUserShield></FaUserShield> Admin Home</Link></li>
                            <li><Link to='/dashboard/manageuser'><FaUsers></FaUsers> Manage User</Link></li>
                            <li><Link to='/dashboard/manageclasses'><FaUserEdit> </FaUserEdit> Manage Class</Link></li>


                        </> : userRole?.role === 'Instructor' ? <>
                            <li><Link to='/dashboard'><FaChalkboard></FaChalkboard> Instructor Home</Link></li>
                            <li><Link to='/dashboard/addclass'> <FaBookReader></FaBookReader> Add Class</Link></li>
                            <li><Link to='/dashboard/myclass'> <FaBookOpen></FaBookOpen> My Classes</Link></li>
                            <li><Link to='/dashboard/feedback'> <FaCommentDots></FaCommentDots> Feedback</Link></li>

                        </> : <>

                            <li><Link to='/dashboard'><FaRegUser></FaRegUser> User Home</Link></li>
                            <li><Link to='/dashboard/selectedclass'><FaCheckSquare></FaCheckSquare> Selected Class</Link></li>
                            <li><Link><FaWallet></FaWallet> Payment History</Link></li>
                            <li><Link><FaClipboardCheck></FaClipboardCheck>  Enroll Classes</Link></li>
                        </>
                    }


                    <div className="divider mt-[-10px]"></div>
                    <li><Link to='/'> <FaHome></FaHome> Home</Link></li>
                    <li><Link to='/instructor'><FaChalkboardTeacher></FaChalkboardTeacher>Instructor</Link></li>
                    <li><Link to='/classes '> <FaChalkboard></FaChalkboard> Classes</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;