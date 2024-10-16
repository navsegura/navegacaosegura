import Section from "./Section/Section"
import Cards from "./Cards/Cards"
import Island from "./Island/Island"
import Decorations from "../footer/OceanDecorations/OceanDecorations"
import Footer from "../footer/Footer"

function MainContent(){
    return(
        <>
            <Section />
            <Cards />
            <Island />
        </>
    )
}

export default MainContent