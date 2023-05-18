import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../../../images/Beige Giraffe Toys Kids Shop Logo.png'

const Header = () => {
    return (
            <Navbar
            fluid={true}
            
            className='p-0 color container mx-auto rounded-3xl'
        >
            <Navbar.Brand
            >
                <img
                    src={logo}
                    className="lg:w-36 lg:h-36 h-20 w-20 rounded-full"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to='/' className='lg:text-xl ms-3'>
                    Home
                </Link>
                <Link to='/blog' className='lg:text-xl ms-3'>
                    Blog
                </Link>
                <button type="button" className="text-white bg-[#FCE2AD] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-[#FCE2AD] dark:hover:bg-[#FCE2AD]">
                <Link to='/login'>Login</Link>
                </button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;