import Header from '../components/Header/Header'
import Title from '../components/MainContent/SobreNos/Title'
import { SectionSobre } from '../components/MainContent/Section/Section'
import Desenvolvedores from '../components/Desenvolvedores/Desenvolvedores'
import Footer from '../components/footer/Footer'

function Sobre () {
    return (
        <>
        <Header />
        <Title />
        <SectionSobre />
        <Desenvolvedores />
        <Footer />
        </>
    )
}

export default Sobre