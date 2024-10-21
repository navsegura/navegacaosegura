import Section from "./Section/Section"
import Cards from "./Cards/Cards"
import Island from "./Island/Island"
import Carousel from "./Car/Carousel"
import SignatureCard from "../SignatureCards/SignatureCard"

function MainContent(){
    return(
        <>
            <Section />
            <Cards />
            <Island />
            <SignatureCard/>
            <Carousel />
        </>
    )
}

export default MainContent