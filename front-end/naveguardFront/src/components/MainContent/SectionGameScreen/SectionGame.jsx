import "./SectionGame.css"
import { Images } from "../../../assets/images"
import Footer from "../../footer/Footer"

function SectionGame(){
    return(
        <>
            <section className="first_game_section">
                <div className="main_content_first_game">
                    <div className="title_game_content">
                        <h1 className="title_game">
                            ESCOLHA SUA AVENTURA!
                        </h1>
                    </div>
                    <div className="game_content">
                        <div className="game_one">
                            <img src={Images.Barquinho} alt="img" />
                            <h1 className="game_title_principal">A Grande Navegação</h1>
                            <p className="content_game_principal">Uma aventura épica pelos mares!</p>
                        </div>
                        <div className="game_one">
                            <img src={Images.Tesouro} alt="img" />
                            <h1 className="game_title_principal">Desafios do Tesouro</h1>
                            <p className="content_game_principal">Jogue minigames e colete tesouros</p>
                        </div>
                        <div className="game_one">
                            <img src={Images.Garrafa} alt="img" />
                            <h1 className="game_title_principal">Histórias do mar</h1>
                            <p className="content_game_principal">Assista vídeos divertidos e educativos</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="second_game_section">
                <div className="header_game_principal">
                    <h1 className="title_game_principal">
                        A grande Navegação
                    </h1>
                    <div className="line"></div>
                </div>
                    <div className="game_screen_principal">
                        <img className="image_gameprincipal" src={Images.GamePrincipal} />
                        <button onClick={() => window.location.href = '/projeto-game1/index.html'}>
                            Jogar
                        </button>
                    </div>

            </section>

            <section className="third_game_section">
                <div className="header_game_second">
                    <h1 className="title_game_principal">
                        Desafios do Tesouro
                    </h1>
                    <div className="line"></div>
                </div>

                <div className="games_secondary">
                    <div className="first_column_game">
                        <div className="game">
                            <img className="game_image" src={Images.Bussola_Do_Codigo} alt="" />
                            <button>Jogar</button>
                        </div>
                        <div className="game">
                            <img className="game_image" src={Images.Porto_Seguro} alt="" />
                            <button>Jogar</button>
                        </div>
                    </div>
                    <div className="second_column_game">
                        <div className="game">
                            <img className="game_image" src={Images.Chave_Do_Tesouro} alt="" />
                            <button>Jogar</button>
                        </div>
                        <div className="game">
                            <img className="game_image" src={Images.Cuidado_Com_O_Kraken} alt="" />
                            <button>Jogar</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video_section">
                <div className="header_video_second">
                    <h1 className="title_video_principal">
                        Histórias do mar
                    </h1>
                    <div className="line"></div>
                </div>
                <div className="video_content">
                    <div className="btn_video">
                        <img src={Images.Botao1} alt="" />
                        <img src={Images.Botao2} alt="" />
                        <img src={Images.Botao3} alt="" />
                        <img src={Images.Botao4} alt="" />
                    </div>
                    <div className="video_content_principal">
                        <img src={Images.ACarta} alt="" />
                        <button>Assistir</button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer_content">
                    <img src={Images.NuvemFooter} alt="" />
                </div>
            </footer>
        </>
    )
}

export default SectionGame