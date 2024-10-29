import { Images } from "../../../assets/images";
import { useRef, useEffect } from "react";
import { IslandContainer, Beach } from './IslandContainer.styles';
import { utilScrollReveal } from "../../../utils/ScrollReveal";

function Island() {
    const MainSection = useRef(null)

    useEffect(() => {
        utilScrollReveal(MainSection)
    },[])
    return (
        <>

            <IslandContainer>
                <Beach>
                    <img ref={MainSection} src={Images.Praia} alt="beach" width={"101%"} />
                </Beach>
            </IslandContainer>

        </>
    );
}


export default Island

