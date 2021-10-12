import React from "react";
import styled from "styled-components";
import logo1 from '../media/logo.png'

const Center = styled.div`
background-color: white;
height: 350px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 0;

`;

const Image = styled.img`
height: 100%;

`;

const Navbar = () => {
  return (
        <Center>
        <Image src={logo1} alt="about"/>
        </Center>
  );
};

export default Navbar;
