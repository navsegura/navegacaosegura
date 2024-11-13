import { SectionDesafiosDoTesouro, SectionGrandeNavegacao, SectionHistoriasDoMar, SectionSuaAventura } from "../../components/MainContent/Section/Section";
import { FooterKidsPage } from "../../components/MainContent/Section/Section"
import Navbar from "../../components/Navbar/Navbar";
import './KidsPage.css'

function KidsPage() {

    return (
        <>
            <Navbar/>
            <SectionSuaAventura/>
            <SectionGrandeNavegacao/>
            <SectionDesafiosDoTesouro/>
            <SectionHistoriasDoMar/>
            <FooterKidsPage/>
        </>
    )

}

export default KidsPage;