import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../../../images/Beige Giraffe Toys Kids Shop Logo.png'

const Header = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='p-0 container mx-auto bg-[#F2F2F2] rounded-3xl'
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
                <Button className='lg:relative lg:bottom-1 lg:text-xl bg-[#FCE2AD]'>
                    <Link to='/login'>Login</Link>
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;