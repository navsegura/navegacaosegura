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
import Quiz from '../pages/Quiz Game/Quiz.jsx'
import Articles from '../pages/Articles/Articles.jsx'
import AmeacasOnline from '../pages/AmeacasOnline/AmeacasOnline.jsx'


const Router = () => {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/header' element={<Header/>} />
                    <Route path='/choice-screen' element={<ChoiceScreen />} />
                    <Route path='/user-profile' element={<UserProfile />} />
                    <Route path='/about' element={<Sobre />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/parental-control' element={<ParentalControl/>} />
                    <Route path='/articles' element={<Articles/>} />
                    <Route path='*' element={<NotFound/>} />
                    <Route path='/quiz' element={<Quiz/>} />
                    <Route path='/kids-page' element={<KidsPage />}/>
                    <Route path='/ameacas-online' element={<AmeacasOnline />} />
                    {/* 404 */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
