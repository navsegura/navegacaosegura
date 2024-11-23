import { Section } from "./Section/Section"
import Cards from "./Cards/Cards"
import Island from "./Island/Island"
import Carousel from "./Carousel/Carousel"
import SignatureCard from "../SignatureCards/SignatureCard"
import FrequentlyQuestions from "./FrequentlyAskedQuestions/FrequentlyQuestions"
import AnimalsHome from "../Animals-Home/AnimalsHome"

function MainContent(){
    return(
        <>
            <Section />
            <Cards />
            <Island /> 
            <Carousel />
            <SignatureCard/>
            <FrequentlyQuestions/>
            <AnimalsHome/>
        </>
    )
}

export default MainContent
