import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import Home from '../pages/Home.jsx'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/header' element={<Header/>} />
                    <Route path='*' element={<Footer/>} />
                    {/* 404 */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
