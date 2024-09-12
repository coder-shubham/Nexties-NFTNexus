import React from 'react';
import styled from 'styled-components';

// Styled components for gradient background
const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000, #ffffff);
`;

const ContentContainer = styled.div`
  text-align: center;
  color: #ffffff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px 30px;
  background-color: #ffffff;
  color: #000000;
  border: none;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const MarketplaceUI = () => {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <Title>Aptos NFT Marketplace</Title>
        <Button>Connect Wallet</Button>
        <Button>Explore NFTs</Button>
        <Button>My Collection</Button>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default MarketplaceUI;

