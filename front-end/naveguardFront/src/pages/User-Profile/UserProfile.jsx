import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import { Images } from "../../assets/images.jsx";
import NuvensContainer from "../../components/Nuvens/Nuvens";
import { Page, MainContainer, UserProfileContent, Profile, UserImage, Photo, Line, About, Span, NameProfile, Icon, Info, Bio, Location, Strong, Edit, Input, MainContent, UserProfileContainer, GroupSquare, Square, Graphics, P, DropdownMenu, DropdownItem } from './UserProfile.styles'
import { findMe } from "../../services/user-service.js";


const UserProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
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

    const [userLogged, setUserLogged] = useState({
      name: " ",
      email: " ",
      birthDay: " ",
      city: " ",
      bio: " ",
      gender: " ",
      state: " ",
      urlPhoto: " "
    });
    useEffect(() => {
      findMe()
      .then((response) => {
        setUserLogged(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    }, []);

    function formatDate(date) {
      const data = new Date(date)
      const dia = String(data.getDate()).padStart(2, '0'); // Garantir dois dígitos
      const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês é zero-indexado
      const ano = data.getFullYear(); // Obtém o ano completo

      const dataFormatada = `${dia}/${mes}/${ano}`;

      return dataFormatada;
    }

    function genderTranslate(gender) {
      if(gender.toUpperCase() == "MALE") {
        gender = "Masculino";
        return gender
      } else if(gender.toUpperCase() == "FEMALE") {
        gender = "Feminino";
        return gender
      } else {
        gender = "Outros";
        return gender;
      }
    }

  const nameTest = localStorage.getItem('name')
  const imgTest = localStorage.getItem('profilePic')
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
                  <Photo src={imgTest || Images.UserMaster || userLogged.urlPhoto} alt="Profile photo" />
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
                          <NameProfile>{nameTest || userLogged.name}</NameProfile>
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
                        {userLogged.city[0].toUpperCase() + userLogged.city.substring(1) || location}</Location>
                        )}
                        <Location><i className='bx bx-check-circle' style={{color:'#A0A0A0'}} ></i>
                        {"Data de Nascimento: " + formatDate(userLogged.birthDay)}</Location> {/* DATA */}
                      </Info>
                      <Bio>
                      <i className='bx bxs-quote-left' style={{color:'#A0A0A0'}}></i>ﾠ
                      {userLogged.bio || "A saúde deve ser uma prioridade em nossas vidas. Quando nos conscientizamos sobre doenças, não apenas cuidamos de nós mesmos, mas também contribuímos para um mundo onde todos têm a chance de viver uma vida plena e saudável, livre de estigmas e preconceitos."}
                      ﾠ<i className='bx bxs-quote-right' style={{color:'#A0A0A0'}} ></i>
                      </Bio>
                      <Location>
                        <p>Gênero: <Strong>{genderTranslate(userLogged.gender) || "None"}</Strong></p> {/* DATA */}
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
              <Square>
                <Graphics>Ameaças Online</Graphics>
                <img src={Images.AmeacasOnline} alt="Tutoriais" width={50} />
                <P>Conheça os perigos e como se defender</P>
              </Square>
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
