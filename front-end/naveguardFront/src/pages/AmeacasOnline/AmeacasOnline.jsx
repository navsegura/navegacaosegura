import Navbar from "../../components/Navbar/Navbar";
// import SideBar from "../../components/SideBar/SideBar";
import { Images } from "../../assets/images";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { MainContainer, Back, Span, ControlContent, TitleControl, Line, CardContainer, Card, MolduraImgFamily, MolduraImg, Img, Description } from './AmeacasOnline.js'
import ResolutionNotAvailable from '../../components/ResolutionNotAvailable/ResolutionNotAvailable'
import NuvensContainer from "../../components/Nuvens/Nuvens";
import Modal from "../../components/Modal/modal.jsx";
import { useState } from "react";
import './Ameacas.css'


const AmeacasOnline = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)
  const [openModal4, setOpenModal4] = useState(false)

  return (

    <>
    <ResolutionNotAvailable/>
    <Navbar/>
    {/* <SideBar/> */}
    <MainContainer>
      <NuvensContainer/>
          <ControlContent>
            <Span>
              <Link to="/user-profile">
                <Back><i className='bx bxs-chevrons-left'></i></Back>
              </Link>
              <TitleControl>Ameacas Online</TitleControl>
              <p></p>
            </Span>
              <Line></Line>
              <CardContainer>
                <Card>
                  <MolduraImgFamily>
                    <Img src={Images.phishing} style={{ width: "80px" }} alt="" />
                    </MolduraImgFamily>

                    <Description style={{ fontSize: "25px" }}>Phishing</Description>
                <Description>Usa mensagens falsas para enganar e roubar dados pessoais, como senhas ou números de cartão.</Description>
                <button onClick={() => setOpenModal(true)}> Ler </button>
                </Card>
                <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                  <div className="container_phishing">
                    <div className="header_phishing">
                    <h2>O que é phishing?</h2>
                    </div>
                      <div className="content_phishing">
                      <div className="content_ameacas_content">
                        <p>
                        Phishing é uma técnica usada por golpistas para enganar as pessoas.
                        Por exemplo, você pode receber uma mensagem que parece ser do seu banco, dizendo que precisa atualizar sua conta. A mensagem traz um link que leva a um site falso, mas que parece muito real.
                        Se você colocar suas informações lá, como senha ou número do cartão, elas serão roubadas!
                        <br/>
                        Dica:
                        <br/>
                        Sempre desconfie de mensagens suspeitas.
                        Verifique diretamente com a empresa antes de clicar em links.
                        </p>
                      </div>
                    </div>
                  </div>

                </Modal>


                <Card>
                  <MolduraImg>
                    <Img src={Images.malware} style={{ width: "100px" }} alt="" />
                    </MolduraImg>
                    <Description style={{ fontSize: "25px" }}>Malware</Description>
                <Description>Um software perigoso que pode danificar seu dispositivo eletrônico ou roubar suas informações.</Description>
                <button onClick={() => setOpenModal2(true)}> Ler </button>
                </Card>
                <Modal isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)}>
                  <div className="content_ameacas_content">
                  <h2>O que é Malware?</h2>

                  <p>
                  Malware (abreviação de "malicious software", ou "software malicioso") é um tipo de programa criado para causar danos a dispositivos, sistemas ou dados. Ele pode se infiltrar no seu computador, celular ou tablet sem você perceber e fazer várias coisas prejudiciais, como:
                  <br/>
                  Roubo de informações pessoais:Como senhas, números de cartões de crédito, e dados bancários.
                  <br/>
                  Desempenho lento: O malware pode consumir a memória e o processamento do dispositivo, fazendo-o funcionar mais devagar.
                  <br/>
                  Instalar outros vírus: Alguns malwares podem abrir portas para outros tipos de vírus ou trojans, piorando ainda mais a situação.
                  <br/>
                  Exibição de anúncios indesejados: Pode causar o surgimento de pop-ups e redirecionamento para sites duvidosos.
                  <br/>
                  Ransomware: Em casos mais graves, o malware pode bloquear seus arquivos e pedir um resgate para liberá-los
                  </p>
                  </div>

                </Modal>


                <Card>
                  <MolduraImg>
                    <Img src={Images.cyberbullying} style={{ width: "100px" }} alt="" />
                  </MolduraImg>
                  <Description style={{ fontSize: "25px" }}>CyberBullying</Description>
                <Description>Acontece quando alguém usa a internet para ofender, intimidar ou humilhar outra pessoa.</Description>
                <button onClick={() => setOpenModal3(true)}> Ler </button>
                </Card>
                <Modal isOpen={openModal3} setModalOpen={() => setOpenModal3(!openModal3)}>

                <div className="content_ameacas_content">
                  <h2> O que é Cyberbullying? </h2>

                  <p>
                  Cyberbullying é o uso da internet, redes sociais e outras plataformas online para assediar, intimidar ou humilhar outra pessoa. Ao contrário do bullying tradicional, que ocorre em ambientes físicos como a escola, o cyberbullying pode acontecer a qualquer momento e em qualquer lugar, tornando mais difícil para a vítima escapar.
                  <br/>
                  Formas comuns de Cyberbullying:
                  <br/>
                  Ofensas públicas: Mensagens de ódio ou xingamentos postados nas redes sociais ou em chats.
                  <br/>
                  Espalhar boatos e mentiras: Divulgação de rumores e informações falsas para prejudicar a reputação de alguém.
                  <br/>
                  Exclusão digital: Deixar alguém de fora de grupos, chats ou redes sociais como forma de isolamento.
                  <br/>
                  Imagens humilhantes: Compartilhamento de fotos ou vídeos constrangedores sem o consentimento da pessoa, muitas vezes de maneira distorcida para humilhar a vítima.
                  <br/>
                  Ameaças e chantagens: Enviar mensagens de ameaças para forçar a vítima a fazer algo contra sua vontade.
                  </p>
                </div>

                </Modal>


                <Card>
                  <MolduraImg>
                    <Img src={Images.linksperigosos} style={{ width: "100px" }} alt="" />
                    </MolduraImg>
                    <Description style={{ fontSize: "25px" }}>Links Perigosos</Description>
                <Description>Links perigosos levam a sites que podem instalar vírus ou roubar informações ao serem clicados.</Description>
                <button onClick={() => setOpenModal4(true)}> Ler </button>
                </Card>
                <Modal isOpen={openModal4} setModalOpen={() => setOpenModal4(!openModal4)}>

                <div className="content_ameacas_content">
                  <h2>O que são Links Perigosos?</h2>

                  <p>
                  Links perigosos são links que, ao serem clicados, podem levar você para sites maliciosos, onde você pode acabar expondo seus dados pessoais, instalando vírus ou até mesmo permitindo o roubo de informações. Esses links geralmente são escondidos em mensagens suspeitas, como e-mails ou mensagens de redes sociais, com o objetivo de enganar as pessoas.
                  <br/>
                  Como eles funcionam?
                  <br/>
                  Redirecionamento para sites falsos: O link pode levá-lo a um site que parece ser legítimo (como um banco ou rede social), mas é falso, criado para roubar suas informações.
                  <br/>
                  Instalação de malware: Alguns links podem forçar o download de vírus ou programas maliciosos sem o seu consentimento.
                  <br/>
                  Phishing: Links podem ser usados em tentativas de phishing, onde sites falsos coletam seus dados pessoais, como senhas e números de cartão de crédito.
                  </p>
                </div>
                  
                </Modal>


              </CardContainer>
          </ControlContent>
        
        </MainContainer>
    </>
  );
};

export default AmeacasOnline;