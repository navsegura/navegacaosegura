import './desenvolvedores.css'
import { Images } from '../../assets/images'

function Desenvolvedores () {
    return (
        <>
        <section className='main_dev_section'>
            <div className="header_dev_section">
                <h3 className='title_desenvolvedores'>Desenvolvedores</h3>
            </div>

            <div className="cards_dev_section">
                <div className="first_column">
                {/* Primeiro Card */}
                <div className="card_dev_one">
                    <div className="img_dev"> <img src="https://placehold.co/100" alt="img" /></div>
                    <div className="dev">
                        <h4 className='name'>Heverton Victor</h4>
                        <ul>
                            <li>Product Owner</li>
                            <li>Full Stack & UI/UX</li>
                        </ul>
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
                <div className="img_dev"> <img src="https://placehold.co/100" alt="img" /></div>
                    <div className="dev">
                        <h4 className='name'>Jonas Rafael</h4>
                        <ul>
                            <li>FullStack</li>
                            <li>Financeiro</li>
                        </ul>
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
                
                {/* Terceiro Card */}
                <div className="card_dev_three">
                    <div className="img_dev"> <img src="https://placehold.co/100" alt="img" /></div>
                        <div className="dev">
                            <h4 className='name'>Antônio De Pádua</h4>
                            <ul>
                                <li>Desenvolvedor</li>
                                <li>Full-Stack</li>
                            </ul>
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

                {/* Quarto Card */}
                <div className="card_dev_four">
                    <div className="img_dev"> <img src="https://placehold.co/100" alt="img" /></div>
                        <div className="dev">
                            <h4 className='name'>Guilherme Davino</h4>
                            <ul>
                                <li>Desenvolvedor</li>
                                <li>Full-Stack</li>
                            </ul>
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
                </div>

                <div className="second_column">
                {/* Quinto Card */}
                <div className="card_dev_five">
                    <div className="img_dev"> <img src="https://placehold.co/100" alt="img" /></div>
                        <div className="dev">
                            <h4 className='name'>Jamyle Ellenn</h4>
                            <ul>
                                <li>Scrum Master</li>
                                <li>Full Stack & UI/UX</li>
                            </ul>
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

                {/* Sexto Card */}
                <div className="card_dev_six">
                    <div className="img_dev"> <img src="https://placehold.co/100" alt="img" /></div>
                        <div className="dev">
                            <h4 className='name'>Rodrigo Fagnerr</h4>
                            <ul>
                                <li>Desenvolvedor</li>
                                <li>Back-End & UI/UX</li>
                            </ul>
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

                {/* Sétimo Card */}
                <div className="card_dev_seven">
                    <div className="img_dev"> <img src="https://placehold.co/100" alt="img" /></div>
                        <div className="dev">
                            <h4 className='name'>Leandra Mayla</h4>
                            <ul>
                                <li>Front-End</li>
                                <li>Social Media & UI/UX</li>
                            </ul>
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

                {/* Oitavo Card */}
                <div className="card_dev_eight">
                    <div className="img_dev"> <img src="https://placehold.co/100" alt="img" /></div>
                        <div className="dev">
                            <h4 className='name'>Theofilo Henrique</h4>
                            <ul>
                                <li>Back-End</li>
                                <li>Sound Designer</li>
                            </ul>
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
                </div>
            </div>
        </section>

        </>
    ) 
}

export default Desenvolvedores