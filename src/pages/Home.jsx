import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
    flex-wrap: wrap;
  

`;

const Home = () => {
  return (
    <Container>
      <Card  style={{display:"flex"}}/>
    </Container>
  );
};

export default Home;
