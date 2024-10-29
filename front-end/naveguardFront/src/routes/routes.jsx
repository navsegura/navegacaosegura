import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header/Header'
// import Footer from '../components/footer/Footer'
import ChoiceScreen from '../pages/ChoiceScreen/ChoiceScreen'
import NotFound from '../pages/NotFound/NotFound'
import UserProfile from '../pages/User-Profile/UserProfile'
import ParentalControl from '../components/ParentalControl/ParentalControl'
import Home from '../pages/Home.jsx'
import Sobre from '../pages/Sobre.jsx'
import Login from '../pages/Login/Login.jsx'


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/header' element={<Header/>} />
                    <Route path='/choice-screen' element={<ChoiceScreen/>} />
                    <Route path='/user-profile' element={<UserProfile/>} />
                    <Route path='/about' element={<Sobre />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/parental-control' element={<ParentalControl/>} />
                    <Route path='*' element={<NotFound/>} />
                    {/* 404 */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
