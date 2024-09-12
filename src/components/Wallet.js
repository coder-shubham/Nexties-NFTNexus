import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { Button } from 'antd';

const Wallet = () => {
  const { connect, disconnect, account, connected } = useWallet();

  const handleConnect = async () => {
    try {
      await connect();
      console.log('Wallet connected:', account);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div>
      {!connected ? (
        <Button onClick={handleConnect}>Connect Wallet</Button>
      ) : (
        <div>
          <p>Connected to: {account?.address}</p>
          <Button onClick={disconnect}>Disconnect Wallet</Button>
        </div>
      )}
    </div>
  );
};

export default Wallet;

