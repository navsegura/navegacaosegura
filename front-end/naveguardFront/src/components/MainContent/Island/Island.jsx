import './Island.css'
import { Images } from "../../../assets/images";


function Island() {
    return (
        <>
            <div className="island_container">
                <div className='Beach'>
                    <img src={Images.Praia} alt="beach" width={"101%"} />
                </div>
            </div>
        </>
    );
}


export default Island