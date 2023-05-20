import { Spinner } from 'flowbite-react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import LoaderPage from '../Pages/LoaderPage/LoaderPage';


const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <LoaderPage></LoaderPage>;
    }
    if (user) {
        return children;
    }
    return (
    <Navigate state={{from: location}} to='/login' replace></Navigate>
    );
};

export default PrivateRoute;