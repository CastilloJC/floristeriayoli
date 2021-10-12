import {
  WhatsApp,
  Instagram,
  Phone,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;


const Title = styled.h3`
  margin-bottom: 30px;
`;



const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const A = styled.a`
text-decoration:none;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Arte Floral Yoli</Logo>
        <Desc>
          El precio de los arreglos varia segun la cantidad de rosas que este lleve.
          <br />
          <br />
          Mas modelos disponibles, los invitamos a seguirnos en nuestro Instagram.
          <br />
          <br />
          Mas informacion por nuestro WhatsApp.
        </Desc>
        <SocialContainer>

          <SocialIcon color="25D366">
          <A href="https://wa.me/584144392655" target="_blank" rel="noreferrer"> <WhatsApp /></A>

          </SocialIcon>
          <SocialIcon color="E4405F">
            <A href="https://www.instagram.com/floristeria_yoli/" target="_blank" rel="noreferrer"> <Instagram /></A>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Guacara. Edo. Carabobo
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 0414-1489398

        </ContactItem>
        <ContactItem>
        <Phone style={{ marginRight: "10px" }} /> 0414-4392655
        </ContactItem>
      </Right>
    </Container>
    

  );
};

export default Footer;
