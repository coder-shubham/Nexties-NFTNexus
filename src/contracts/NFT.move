module aptos_nft::NFTMarketplace {
    use aptos_framework::coin::{Self, Coin};
    use aptos_framework::account;
    use aptos_framework::event::{EventHandle};
    
    struct NFT has copy, drop, store {
        id: u64,
        owner: address,
        price: u64,
        name: vector<u8>,
        metadata: vector<u8>,
    }

    public fun create_nft(owner: address, name: vector<u8>, metadata: vector<u8>, price: u64): NFT {
        NFT { id: account::create_account(owner), owner, name, metadata, price }
    }

    public fun buy_nft(nft: &mut NFT, buyer: address, price: u64) {
        assert!(nft.price == price, 101); // Check if the price matches
        Coin::transfer(&buyer, &nft.owner, price);
        nft.owner = buyer;
    }
}

