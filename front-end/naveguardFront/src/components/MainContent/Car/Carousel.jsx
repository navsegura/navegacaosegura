import './Carousel.css'
import { Images } from "../../../assets/images";
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Carousel() {
    return (

    <div className='container_principal'>
        <div className="container_slide">
            <Swiper
                slidesPerView={1}
                navigation={true}
                pagination={{clickable: true}}
                loop={true}
                autoplay={{delay: 4000}}
                
            >
                <SwiperSlide>
                    <div className="first_carousel">
                        <div className="content_carousel1">
                            <h1>Segurança familiar</h1>
                            <p>Proteja sua família com dicas e ferramentas que garantem segurança no ambiente digital.</p>
                        </div>
                        <div className="img_carousel1">
                            <img src={Images.segurancafamiliar} alt="Segurança Familiar" width={'180rem'} />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="second_carousel">
                        <div className="content_carousel2">
                            <h1>Controle Parental</h1>
                            <p>Saiba como monitorar dispositivos e configurar o controle parental de forma eficaz.</p>
                        </div>
                        <div className="img_carousel2">
                            <img src={Images.controleparental} alt="Controle Parental" width={'180rem'} />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="third_carousel">
                        <div className="content_carousel3">
                            <h1>Jogos Educativos</h1>
                            <p>Ensine as crianças sobre os perigos da internet por meio de jogos e histórias interativas.</p>
                        </div>
                        <div className="img_carousel3">
                            <img src={Images.jogoseducativos} alt="Jogos Educativos" width={'180rem'} />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="fourth_carousel">
                        <div className="content_carousel4">
                            <h1>Ameaças Online</h1>
                            <p>Identifique fraudes e perigos digitais que podem afetar sua família.</p>
                        </div>
                        <div className="img_carousel4">
                            <img src={Images.ameacasonline} alt="Ameaças Online" width={'180rem'} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    );
}

export default Carousel;
