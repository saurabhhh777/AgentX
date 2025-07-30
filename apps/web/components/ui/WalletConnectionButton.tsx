'use client';
import { useWalletStore } from '@/store/walletStore';

const WalletConnectButton = () => {
  const { address, connectWallet, disconnectWallet } = useWalletStore();

  return (
    <button
      onClick={address ? disconnectWallet : connectWallet}
      className="px-4 py-2 bg-black text-white rounded-xl"
    >
      {address ? 'Disconnect' : 'Connect Wallet'}
    </button>
  );
};

export default WalletConnectButton;