import './Island.css'
import { Images } from "../../../assets/images";


function Island() {
    return (
        <>
            <div className="island_container">
                <div className='Beach'>
                    <div className='nuvens'>
                        <div className="imagem_nuvem_1"><img src={Images.Nuvem} alt="nuvem" width={"90%"} className='nuvem'/></div>
                        <div className="imagem_nuvem_1"><img src={Images.Nuvem} alt="nuvem" width={"90%"} className='nuvem'/></div>
                    </div>
                    <img src={Images.Praia} alt="beach" width={"100%"} />
                </div>
            </div>
        </>
    );
}


export default Island

