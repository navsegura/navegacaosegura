import { Images } from "../../assets/images"

const Footer = () => {
    // K

    return (
        <>
            <footer>
                <img src={Images.Footer} alt="receba" width={100}/>
               
                <div className="conteudo">
                    <h1>NAVEGUARD</h1>

                    <p>Naveguard &copy; 2024</p>
                    <p>Todos os direitos reservados</p>
                </div>

                <div className="col-2">
                    <ul>
                        <li>Home</li>                      
                        <li>Sobre</li>
                        <li>Apoie a NaveGuard</li>                        
                        <li>Fale Conosco</li>
                    </ul>
                </div>
                
                <div className="col-3">
                    <p>Política de Privacidade</p>
                        
                    <p>Termos de Uso</p>

                </div>

                <div className="col-4">
                    <label>Receba Novidades:</label>
                    <input type="email" placeholder="Insira seu Email"/>
                </div>
            </footer>
        </>
    )
}

export default Footer
