import './Login.css';
import Header from '../../components/Header/Header';
import FormLogin from '../../components/Forms/FormLogin/FormLogin';
import NuvensContainer from '../../components/Nuvens/Nuvens';

function Login() {
    return (
        <>
            <Header />
            <NuvensContainer/>
            <FormLogin />
        </>
    );
}

export default Login;