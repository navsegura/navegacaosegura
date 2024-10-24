import { useState } from "react";
// import axios from 'axios'
import NavBar from "../../components/NavBar/";
import SideBar from "../../components/SideBar/SideBar";
import Images from "../../assets/images.jsx";
import { MainContainer, UserProfileContent, Profile, Line, About, Span, Icon, Info, Bio, Location, Strong, Edit, Input, MainContent, UserProfileContainer, FindOutMore, GroupSquare, Square, Graphics, IconElements, P, Next, DropdownMenu, DropdownItem } from './UserProfile.styles'

const UserProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState('User Example');
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
  let gender = 'Female';
  return (
    <>
      <NavBar/>
      <SideBar/>
      <MainContainer>
        <UserProfileContent>
            <Profile>
              {gender === 'Female' ? (
                <img src={Images.Female} alt="Profile photo" />
              ) : (
                <img src={Images.Male} alt="Profile photo" />
              )}
                <About>
                    <Span>
                      {isEditing ? (
                        <Input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      ) : (
                        <h1>{name}</h1>
                      )}
                      <Icon className='bx bxs-check-circle' style={{color:'#73a66f'}}  ></Icon>
                      {/* olhar dps do pq nao ta indo p condicao ali de icma */}
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
                      {email}</Location> 
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
                      <p>Gender: <Strong>{gender}</Strong></p> {/* DATA */}
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
          <FindOutMore>SAIBA MAIS</FindOutMore>
          <GroupSquare>
            <Square>
              <Graphics>Gráficos</Graphics>
              <IconElements className='bx bx-objects-vertical-bottom' style={{color:'#fff'}}></IconElements>
              <P>Lorem ipsum <Next className='bx bx-right-arrow-alt' style={{color:'#606060'}} ></Next></P>
            </Square>
            <Square>
              <Graphics>Gráficos</Graphics>
              <IconElements className='bx bx-objects-vertical-bottom' style={{color:'#fff'}}></IconElements>
              <P>Lorem ipsum <Next className='bx bx-right-arrow-alt' style={{color:'#606060'}} ></Next></P>
            </Square>
            <Square>
              <Graphics>Gráficos</Graphics>
              <IconElements className='bx bx-objects-vertical-bottom' style={{color:'#fff'}}></IconElements>
              <P>Lorem ipsum <Next className='bx bx-right-arrow-alt' style={{color:'#606060'}} ></Next></P>
            </Square>
            <Square>
              <Graphics>Gráficos</Graphics>
              <IconElements className='bx bx-objects-vertical-bottom' style={{color:'#fff'}}></IconElements>
              <P>Lorem ipsum <Next className='bx bx-right-arrow-alt' style={{color:'#606060'}} ></Next></P>
            </Square>
            <Square>

              <abbr title="Não é possivel adicionar mais itens">
                <IconElements className='bx bx-cross' style={{color:'#606060'}}></IconElements>
              </abbr>

            </Square>
          </GroupSquare>
          </UserProfileContainer>
          </MainContent>

    </>
  );
};

export default UserProfile;
