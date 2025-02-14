import './desenvolvedores.css'
import { Images } from '../../assets/images'
import NuvensContainer from '../Nuvens/Nuvens'

function Desenvolvedores () {
    return (
        <>
        <NuvensContainer/>
        <section className='main_dev_section'>
            <div className="header_dev_section">
                <h3 className='title_desenvolvedores'>Desenvolvedores</h3>
            </div>

            <div className="cards_dev_section">
                <div className="first_column">
                {/* Primeiro Card */}
                <div className="card_dev_one">
                    <div className="img_dev"> <img src={Images.heverton} width={"150rem"} alt="img" /></div>
                    <div className="dev">
                        <div className="dev_content">
                            <h4 className='name'>Heverton Victor</h4>
                            <ul>
                                <li>Product Owner</li>
                                <li>Full Stack & UI/UX</li>
                            </ul>
                        </div>
                        <div className="social_icons">
                            <a href="https://github.com/wataredev" target="_blank" rel="noopener noreferrer">
                            <img src={Images.icon_github} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/heverton-victor/" target="_blank" rel="noopener noreferrer">
                            <img src={Images.icon_linkedin} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Segundo Card */}
                <div className="card_dev_two">
                <div className="img_dev"> <img src={Images.jonas} width={'150rem'} alt="img" /></div>
                    <div className="dev">
                        <div className="dev_content">
                            <h4 className='name'>Jonas Rafael</h4>
                            <ul>
                                <li>Financeiro</li>
                                <li>Front-End</li>
                            </ul>
                        </div>
                        <div className="social_icons">
                            <a href="https://github.com/jonasrmarques" target="_blank" rel="noopener noreferrer">
                            <img src={Images.icon_github} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/jonas-marques-b80554239/" target="_blank" rel="noopener noreferrer">
                            <img src={Images.icon_linkedin} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Terceiro Card */}
                <div className="card_dev_three">
                    <div className="img_dev"> <img src={Images.antonio} width={'150rem'} alt="img" /></div>
                        <div className="dev">
                            <div className="dev_content">
                                <h4 className='name'>Antônio De Pádua</h4>
                                <ul>
                                    <li>Desenvolvedor</li>
                                    <li>Full-Stack</li>
                                </ul>
                            </div>
                            <div className="social_icons">
                                <a href="https://github.com/AntonioLopes21" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_github} alt="GitHub" />
                                </a>
                                <a href="https://www.linkedin.com/in/antonio-lopes-dev/" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                    </div>
                </div>

                {/* Quarto Card */}
                <div className="card_dev_four">
                    <div className="img_dev"> <img src={Images.guilherme} width={"150rem"} alt="img" /></div>
                        <div className="dev">
                            <div className="dev_content">
                                <h4 className='name'>Guilherme Davino</h4>
                                <ul>
                                    <li>Desenvolvedor</li>
                                    <li>Back-End</li>
                                </ul>
                            </div>
                            <div className="social_icons">
                                <a href="https://github.com/GuilhermeDavino" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_github} alt="GitHub" />
                                </a>
                                <a href="https://www.linkedin.com/in/guilherme-albuquerque-davino/" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                    </div>
                </div>
                </div>

                <div className="second_column">
                {/* Quinto Card */}
                <div className="card_dev_five">
                    <div className="img_dev"> <img src={Images.jamyle} width={'150rem'} alt="img" /></div>
                        <div className="dev">
                            <div className="dev_content">
                                <h4 className='name'>Jamyle Elen</h4>
                                <ul>
                                    <li>Scrum Master</li>
                                    <li>Full Stack & UI/UX</li>
                                </ul>
                            </div>
                            <div className="social_icons">
                                <a href="https://github.com/Jamyle-Elen" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_github} alt="GitHub" />
                                </a>
                                <a href="https://www.linkedin.com/in/jamyle-elen/" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                    </div>
                </div>

                {/* Sexto Card */}
                <div className="card_dev_six">
                    <div className="img_dev"> <img src={Images.rodrigo} width={'150rem'} alt="img" /></div>
                        <div className="dev">
                            <div className="dev_content">
                                <h4 className='name'>Rodrigo Fagner</h4>
                                <ul>
                                    <li>Desenvolvedor</li>
                                    <li>Back-End & UI/UX</li>
                                </ul>
                            </div>
                            <div className="social_icons">
                                <a href="https://github.com/Rodrigofms" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_github} alt="GitHub" />
                                </a>
                                <a href="https://www.linkedin.com/in/rodrigo-fms/" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                    </div>
                </div>

                {/* Sétimo Card */}
                <div className="card_dev_seven">
                    <div className="img_dev"> <img src={Images.mayla} width={'150rem'} alt="img" /></div>
                        <div className="dev">
                            <div className="dev_content">
                                <h4 className='name'>Leandra Mayla</h4>
                                <ul>
                                    <li>Front-End</li>
                                    <li>Social Media & UI/UX</li>
                                </ul>
                            </div>
                            <div className="social_icons">
                                <a href="https://github.com/Leandramay" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_github} alt="GitHub" />
                                </a>
                                <a href="https://www.linkedin.com/in/leandra-mayla/" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                    </div>
                </div>

                {/* Oitavo Card */}
                <div className="card_dev_eight">
                    <div className="img_dev"> <img src={Images.theofilo} width={'150rem'} alt="img" /></div>
                        <div className="dev">
                            <div className="dev_content">
                                <h4 className='name'>Theofilo Henrique</h4>
                                <ul>
                                    <li>Back-End</li>
                                    <li>Sound Designer</li>
                                </ul>
                            </div>
                            <div className="social_icons">
                                <a href="https://github.com/TheofiloHenrique" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_github} alt="GitHub" />
                                </a>
                                <a href="https://www.linkedin.com/in/theofilo-henrique-375b692a8/" target="_blank" rel="noopener noreferrer">
                                <img src={Images.icon_linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        </>
    ) 
}

export default Desenvolvedores
