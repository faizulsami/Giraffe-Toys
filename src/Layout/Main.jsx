import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import FooTer from "../Pages/Shared/FooTer/FooTer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooTer></FooTer>
        </div>
    );
};

export default Main;