import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #590219;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({  })}
`;

const Announcement = () => {
  return <Container>Envios gratis a compras mayores de 20$</Container>;
};

export default Announcement;
