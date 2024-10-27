import './Cards.css'
import { useEffect, useRef } from "react";
import { utilScrollRevealDelayBottom1, utilScrollRevealDelayBottom2, utilScrollRevealDelayBottom3 } from '../../../utils/ScrollReveal'
import { CardsContainer, Card, HeaderCard, ContentCard } from './Cards.styles'

function Cards(){
    const firstCard = useRef(null);
    const secondCard = useRef(null);
    const thirdCard = useRef(null);

    useEffect(() => {
        utilScrollRevealDelayBottom1(firstCard);
        utilScrollRevealDelayBottom2(secondCard);
        utilScrollRevealDelayBottom3(thirdCard);
      },[])
    return(
        <CardsContainer className = "cards">
            
            <Card ref={firstCard} >
                <HeaderCard>
                    PARA TODOS
                </HeaderCard>
                <ContentCard>
                    Conteúdo especial para os responsáveis, com dicas e orientações para manter a navegação da criança sempre segura.
                </ContentCard>
            </Card>


            <Card ref={secondCard}>

                <HeaderCard>
                    DIVERSÃO E SEGURANÇA
                </HeaderCard>
                <ContentCard>
                    Com jogos interativos, a criança  aprende a identificar e evitar riscos online de forma divertida e envolvente.
                </ContentCard>
            </Card>

            <Card ref={thirdCard}>
                <HeaderCard>
                    PROTEÇÃO GARANTIDA
                </HeaderCard>
                <ContentCard>
                    A criança navega em um ambiente seguro e educativo enquanto aprende sobre os perigos da internet e como evitá-los
                </ContentCard>
            </Card>

        </CardsContainer>

    )
}

export default Cards