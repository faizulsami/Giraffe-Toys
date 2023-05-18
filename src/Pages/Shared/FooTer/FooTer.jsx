import { Footer } from "flowbite-react";
import logo from '../../../images/Beige Giraffe Toys Kids Shop Logo.png'

const FooTer = () => {
    return (
        <Footer container={true} className='container mx-auto mt-2 lg:mt-20 shadow-xl bg-primary'>
            <div className="w-full text-center">
                <div className="w-full justify-between flex items-center">
                    <img src={logo} className='lg:w-20 w-12 rounded-full'/>
                    <Footer.LinkGroup className='gap-2'>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                    href="#"
                    by="Giraffe Toys™"
                    year={2023}
                />
            </div>
        </Footer>
    );
};

export default FooTer;