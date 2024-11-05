import { Section } from "./Section/Section"
import Cards from "./Cards/Cards"
import Island from "./Island/Island"
import Carousel from "./Carousel/Carousel"
import SignatureCard from "../SignatureCards/SignatureCard"
import FrequentlyQuestions from "./FrequentlyAskedQuestions/FrequentlyQuestions"


function MainContent(){
    return(
        <>
            <Section />
            <Cards />
            <Island /> 
            <Carousel />
            <SignatureCard/>
            <FrequentlyQuestions/>
        </>
    )
}

export default MainContent
