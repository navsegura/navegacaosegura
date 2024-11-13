import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header/Header'
// import Footer from '../components/footer/Footer'
import ChoiceScreen from '../pages/ChoiceScreen/ChoiceScreen'
import NotFound from '../pages/NotFound/NotFound'
import UserProfile from '../pages/User-Profile/UserProfile'
import ParentalControl from '../pages/ParentalControl/ParentalControl'
import Home from '../pages/Home.jsx'
import Sobre from '../pages/Sobre.jsx'
import Login from '../pages/Login/Login.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import {useState, useEffect} from 'react'
import GameComponent from '../pages/GameScreen/GameComponent.jsx'
import KidsPage from '../pages/KidsPage/KidsPage.jsx'


const Router = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storeLoginState = localStorage.getItem('isLoggedIn')
        if(storeLoginState) {
            setIsLoggedIn(storeLoginState === 'true')
        }
    }, [])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/header' element={<Header/>} />
                    <Route path='/choice-screen' element={<PrivateRoute isLoggedIn={isLoggedIn} element={<ChoiceScreen />} />} />
                    <Route path='/user-profile' element={<PrivateRoute isLoggedIn={isLoggedIn} element={<UserProfile />} />} />
                    <Route path='/about' element={<Sobre />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/parental-control' element={<ParentalControl/>} />
                    <Route path='/game' element={<GameComponent/>} /> {/* Nova rota */}
                    <Route path='*' element={<NotFound/>} />
                    <Route path='/kids-page' element={<KidsPage/>}/>
                    {/* 404 */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
