import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "70%" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
    color:#D9898F;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({ fontSize: "15px" })}

`;


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Title>{item.title}</Title>
      <Image src={item.img} />
      <Info>
      </Info>
    </Container>
  );
};

export default CategoryItem;
