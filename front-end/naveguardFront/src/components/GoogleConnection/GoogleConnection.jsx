import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

function GoogleConnection() {
    const navigate = useNavigate();

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn')
        if (storedIsLoggedIn === 'true') {
            navigate('/user-profile')
        }
    }, [navigate])

    const handleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse?.credential);

        const {name, email, picture} = decoded;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePic', picture);
        localStorage.setItem('isLoggedIn', 'true');

        navigate('/user-profile')
    };

    return (
        <>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={() => {
                        console.log("O Login Falhou");
                    }}
                />
        </>
    );
}

export default GoogleConnection;