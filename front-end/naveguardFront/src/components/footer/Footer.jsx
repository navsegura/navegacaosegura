const Footer = () => {
    // K

    return (
        <>
            <footer>
                <div className="conteudo">
                    <h1>NAVEGUARD</h1>

                    <p>Naveguard &copy; 2024</p>

                    <p>Todos os direitos reservados</p>
                </div>

                <div className="col-2">
                    <p>Home</p>
                        
                    <p>Sobre</p>

                    <p>Apoie a NaveGuard</p>
                    
                    <p>Fale Conosco</p>

                </div>
                
                <div className="col-3">
                    <p>Política de Privacidade</p>
                        
                    <p>Termos de Uso</p>

                </div>

                <div className="col-4">
                    <p>Receba Novidades</p>

                    <input type="email" placeholder="Insira seu Email"/>
                </div>
            </footer>
        </>
    )
}

export default Footer
