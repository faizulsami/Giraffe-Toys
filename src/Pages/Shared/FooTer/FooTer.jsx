import { Footer } from "flowbite-react";
import logo from '../../../images/Beige Giraffe Toys Kids Shop Logo.png'
import { SiFacebook , SiInstagram , SiTwitter } from 'react-icons/si';

const FooTer = () => {
    return (
        <Footer className="container mx-auto mt-2 lg:mt-20 shadow-xl color" container={true}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="https://flowbite.com"
                            src={logo}
                            alt="Flowbite Logo"
                            name="Giraffe Toys"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
                        <div>
                            <Footer.Title title="Contact" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    +1-202-555-0110
                                </Footer.Link>
                                <Footer.Link href="#">
                                    +1-202-555-0141
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Address" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    5101 San Mateo Blvd NE,New York
                                </Footer.Link>
                                <Footer.Link href="#">
                                    2200 Central Ave SE,New York
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Flowbite™"
                        year={2022}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <SiFacebook className="active"/>
                    <SiInstagram className="active"/>
                    <SiTwitter className="active"/>
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooTer;