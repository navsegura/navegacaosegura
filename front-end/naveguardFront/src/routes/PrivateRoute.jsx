import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isLoggedIn }) => {
    return isLoggedIn ? element : <Navigate to="/login" />; 
};

export default PrivateRoute;