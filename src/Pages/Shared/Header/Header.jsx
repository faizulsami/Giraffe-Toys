import { Avatar, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../../../images/Beige Giraffe Toys Kids Shop Logo.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ActiveLink from "./ActiveLink";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar
            fluid={true}

            className='p-0 color container mx-auto lg:rounded-3xl'
        >
            <Navbar.Brand
            >
                <img
                    src={logo}
                    className="lg:w-36 lg:h-36 h-12 w-12 rounded-full"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Tooltip
                    id="my-tooltip"
                    content={user? user.displayName : ""}
                    isOpen={isOpen}
                />
            <Navbar.Collapse>
                <ActiveLink to='/' >
                    <span className='lg:text-xl ms-3 lg:relative lg:top-1'>Home</span>
                </ActiveLink>
                <ActiveLink to='/allToys'>
                    <span className='lg:text-xl ms-3 lg:relative lg:top-1'>All Toys</span>
                </ActiveLink>
                <ActiveLink to='/myToys'>
                    <span className='lg:text-xl ms-3 lg:relative lg:top-1'>My Toys</span>
                </ActiveLink>
                <ActiveLink to='/addToy'>
                    <span className='lg:text-xl ms-3 lg:relative lg:top-1'>Add A Toy</span>
                </ActiveLink>
                <ActiveLink to='/blog'>
                    <span className='lg:text-xl ms-3 lg:relative lg:top-1'>Blogs</span>
                </ActiveLink>
                {user ? <><a data-tooltip-id="my-tooltip" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>{<Avatar className="lg:mb-3 me-80 my-2 lg:me-0 lg:my-0" alt="User settings" img={user?.photoURL} rounded={true} />}</a>
                    <button onClick={handleLogout} type="button" className="text-white bg-[#FCE2AD] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-[#FCE2AD] dark:hover:bg-[#FCE2AD]">
                        <Link to='/login'>Logout</Link>
                    </button>
                </> : <button type="button" className="text-white bg-[#FCE2AD] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-[#FCE2AD] dark:hover:bg-[#FCE2AD]">
                    <Link to='/login'>Login</Link>
                </button>}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;