import styled from 'styled-components';
import Cardhabilidade from '../CardHabilidade';
import logo from '../../components/Imagens/front-end.png';
import back from '../../components/Imagens/back-end.png';
import data from '../../components/Imagens/database.png';
import world from '../../components/Imagens/mundo.png';
const Alinhamento = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* centraliza os cards na horizontal */
  align-items: flex-start; /* alinha pelo topo */
  flex-wrap: wrap; /* permite quebrar linha se a tela for pequena */
  height: 85vh;
  background-color:#0E3659;
  justify-content: space-evenly;
align-content: center;
  padding:0;
`;

export default function Habilidades() {
  const habilidade1='Front-end';
  return(
    <>
    <Alinhamento>
    <Cardhabilidade habilidade="Back-end" detalhes="exemplo" img={logo}/>
      <Cardhabilidade habilidade="front-end" detalhes="especialista"  img={back}/>
        <Cardhabilidade habilidade="Sql" detalhes="especialista"  img={data}/>
          <Cardhabilidade habilidade="inglês + polonês" detalhes="hellow"  img={world}/>
    </Alinhamento>
    </>
  )
}