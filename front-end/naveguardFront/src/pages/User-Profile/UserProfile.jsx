import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import { Images } from "../../assets/images.jsx";
import NuvensContainer from "../../components/Nuvens/Nuvens";
import { Page, MainContainer, UserProfileContent, Profile, UserImage, Photo, Line, About, Span, NameProfile, Icon, Info, Bio, Location, Strong, Edit, Input, MainContent, UserProfileContainer, GroupSquare, Square, Graphics, P, DropdownMenu, DropdownItem } from './UserProfile.styles'

const UserProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('userexample@gmail');
  const [location, setLocation] = useState('Recife');
  // deixem vazio, isso é so p testar a edição

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const toggleEditMode = () => {
    if (isEditing) {
    //   saveProfile()
    }
    setIsEditing(!isEditing);
  }

//   const saveProfile = async () => {
//     try {
//       const responsee = await axios.put('coloca_aqui_a_rota_da_edicao_joicy', {
//         name,
//         email,
//         location
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
//   useEffect(() => {
//     getProfile();
//     // mostrar isso aq p professor
//   }, []);

//   const getProfile = async () => {
//     try {
//       const response = await axios.get('coloca_aqui_a_rota_de_pegar_os_dados_joicy')
//       // nome, email, location e genero (genero é apenas para mudar a imagem de perfil conforme a escolha) IMPORTANTE: Verifica como vc pegou o dados no formulario, ali no campo ta como 'female' or 'male'
//       setName(response.data.name)
//       setEmail(response.data.email)
//       setLocation(response.data.location)
//       gender=response.data.gender
//     } catch (error) {
//       console.log(error)
//     }
//   }

  const nameTest = localStorage.getItem('name')
  const imgTest = localStorage.getItem('profilePic')
  const emailTest = localStorage.getItem('email')
  // const profilePicTest = localStorage.getItem('profilePic')
  return (
    <>
      <NavBar/>
      <SideBar/>
      <Page>
          <NuvensContainer/>
        <MainContainer>
          <UserProfileContent>
              <Profile>
                <UserImage>
                  <Photo src={imgTest || Images.UserMaster} alt="Profile photo" />
                  </UserImage>
                  <About>
                      <Span>
                        {isEditing ? (
                          <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        ) : (
                          <NameProfile>{nameTest}</NameProfile>
                        )}
                        <Icon className='bx bxs-check-circle' style={{color:'#73a66f'}}  ></Icon>
                      </Span>
        
                      <Info>
                        {isEditing ? (
                          <Input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        ) : (
                        <Location><i className='bx bx-current-location' style={{color:'#A0A0A0'}} ></i>
                        {location}</Location>
                        )}
                        {isEditing ? (
                          <Input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        ) : (
                        <Location><i className='bx bx-message' style={{color:'#A0A0A0'}} ></i>
                        {emailTest}</Location>
                        )}
                        <Location><i className='bx bx-check-circle' style={{color:'#A0A0A0'}} ></i>
                        Verify at 12/10/2021</Location> {/* DATA */}
                      </Info>
                      <Bio>
                      <i className='bx bxs-quote-left' style={{color:'#A0A0A0'}}></i>ﾠ
                      A saúde deve ser uma prioridade em nossas vidas. Quando nos conscientizamos sobre doenças, não apenas cuidamos de nós mesmos, mas também contribuímos para um mundo onde todos têm a chance de viver uma vida plena e saudável, livre de estigmas e preconceitos.
                      ﾠ<i className='bx bxs-quote-right' style={{color:'#A0A0A0'}} ></i>
                      </Bio>
                      <Location>
                        <p>Sexual Orientation: <Strong>Heterosexual</Strong></p> {/* DATA */}
                      </Location>
                  </About>
                  {/* aqui vai ficar o editar */}
                  <Edit onClick={toggleDropdown} isOpen={isEditing} className={isEditing ? 'bx bx-x' : 'bx bx-dots-vertical-rounded'} style={{color:'#D9D9D9'}}></Edit>
                  {dropdownOpen && (
                    <DropdownMenu>
                      <DropdownItem onClick={toggleEditMode}>{isEditing ? 'Salvar' : 'Editar'}</DropdownItem>
                    </DropdownMenu>
                  )}
              </Profile>
              <Line></Line>
          </UserProfileContent>
        
        </MainContainer>
        <MainContent>
          <UserProfileContainer>
            <GroupSquare>
              <Square>
                <Graphics>Tutoriais</Graphics>
                <img src={Images.Tutoriais} alt="Tutoriais" width={50} />
                <P>Guias simples para proteger sua família online</P>
              </Square>
              <Link to="/articles">
                <Square>
                  <Graphics>Artigos</Graphics>
                  <img src={Images.Artigos} alt="Tutoriais" width={50} />
                  <P>Dicas e informações sobre segurança digital</P>
                </Square>
              </Link>
              <Link to="/parental-control">
                <Square>
                  <Graphics>Controle Parental</Graphics>
                  <img src={Images.ControleParental} alt="Tutoriais" width={50} />
                  <P>Ferramentas para proteger e monitorar suas crianças online</P>
                </Square>
              </Link>
              <Link to="/ameacas-online">
              <Square>
                <Graphics>Ameaças Online</Graphics>
                <img src={Images.AmeacasOnline} alt="Tutoriais" width={50} />
                <P>Conheça os perigos e como se defender</P>
              </Square>
              </Link>
              <Square>
                <Graphics>ChatBot</Graphics>
                <img src={Images.ChatBot} alt="Tutoriais" width={50} />
                <P>Obtenha ajuda rápida sobre segurança online</P>
              </Square>
            </GroupSquare>
            </UserProfileContainer>
            </MainContent>
      </Page>

    </>
  );
};

export default UserProfile;
