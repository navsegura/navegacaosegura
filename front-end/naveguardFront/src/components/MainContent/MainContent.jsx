import { Section } from "./Section/Section";
import Cards from "./Cards/Cards";
import Island from "./Island/Island";
import Carousel from "./Carousel/Carousel";
import SignatureCard from "../SignatureCards/SignatureCard";
import FrequentlyQuestions from "./FrequentlyAskedQuestions/FrequentlyQuestions";
// import AnimalsHome from "../Animals-Home/AnimalsHome";
import "./MainContent.css";
import Partners from "../Partners/Partners";

function MainContent() {
  return (
    <>
      <Section />
      <Cards />
      <Island />
      <div className="content">
        <Carousel />
        <SignatureCard />
        <FrequentlyQuestions />
        <Partners/>
      </div>
    </>
  );
}

export default MainContent;
