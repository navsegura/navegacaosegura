import Navbar from "../../components/Navbar/Navbar";
import SectionGame from "../../components/MainContent/SectionGameScreen/SectionGame";
import './KidsPage.css'
import NuvemContainer from '../../components/Nuvens/Nuvens';

function KidsPage() {

    return (
        <>
            <Navbar />
            <NuvemContainer />
            <SectionGame />
        </>
    )

}

export default KidsPage;