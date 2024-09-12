import React, { useState, useEffect } from 'react';
import { AptosClient } from 'aptos';
import Wallet from '../components/Wallet';

const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');

const Marketplace = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Fetch NFTs from the blockchain (mock for now)
    setNfts([
      { id: 1, name: 'Aptos NFT #1', price: 100 },
      { id: 2, name: 'Aptos NFT #2', price: 200 },
    ]);
  }, []);

  const buyNFT = (nftId, price) => {
    // Logic to buy an NFT via contract call
    console.log(`Buying NFT ${nftId} for ${price} coins`);
  };

  return (
    <div>
      <h1>Aptos NFT Marketplace</h1>
      <Wallet />
      <div>
        {nfts.map((nft) => (
          <div key={nft.id}>
            <p>{nft.name}</p>
            <p>Price: {nft.price}</p>
            <button onClick={() => buyNFT(nft.id, nft.price)}>Buy NFT</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;

