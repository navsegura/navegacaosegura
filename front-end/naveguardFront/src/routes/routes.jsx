import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header/Header'
// import Footer from '../components/footer/Footer'
import ChoiceScreen from '../pages/ChoiceScreen/ChoiceScreen'
import NotFound from '../pages/NotFound/NotFound'
import UserProfile from '../pages/User-Profile/UserProfile'
import ParentalControl from '../pages/ParentalControl/ParentalControl'
import Home from '../pages/Home.jsx'
import Sobre from '../pages/Sobre/Sobre.jsx'
import Login from '../pages/Login/Login.jsx'
import KidsPage from '../pages/KidsPage/KidsPage.jsx'
import PaymentSection from '../components/PaymentSection/PaymentSection.jsx'
import Quiz from '../pages/Quiz Game/Quiz.jsx'
import Articles from '../pages/Articles/Articles.jsx'


const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/header' element={<Header/>} />
                    <Route path='/choice-screen' element={<ChoiceScreen/>} />
                    <Route path='/user-profile' element={<UserProfile/>}/>
                    <Route path='/about' element={<Sobre />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/parental-control' element={<ParentalControl/>} />
                    <Route path='/articles' element={<Articles/>} />
                    <Route path='*' element={<NotFound/>} />
                    <Route path='/kids-page' element={<KidsPage/>}/>
                    <Route path='/quiz' element={<Quiz/>} />
                    {/* 404 */}
                    <Route path='/payment-page' element={<PrivateRoute isLoggedIn={isLoggedIn}element={<PaymentSection/>}/>}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
