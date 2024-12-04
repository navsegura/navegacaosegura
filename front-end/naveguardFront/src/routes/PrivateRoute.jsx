import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth-service';

const PrivateRoute = ({ element }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || isAuthenticated()

    return isLoggedIn ? element : <Navigate to="/login" />
}

export default PrivateRoute;
