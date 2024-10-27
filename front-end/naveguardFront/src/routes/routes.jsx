import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header/Header'
// import Footer from '../components/footer/Footer'
import ChoiceScreen from '../pages/ChoiceScreen/ChoiceScreen'
import NotFound from '../pages/NotFound/NotFound'
import UserProfile from '../pages/User-Profile/UserProfile'
import Home from '../pages/Home.jsx'
import Sobre from '../pages/Sobre.jsx'
<<<<<<< HEAD
import KidsPage from '../pages/KidsPage/KidsPage.jsx'
=======
import Login from '../pages/Login/Login.jsx'

>>>>>>> 30999eb60da462129129c6933d5a4bc0e485f9df

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
                    <Route path='*' element={<NotFound/>} />
                    <Route path='/kids-page' element={<KidsPage/>}/>
                    {/* 404 */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
