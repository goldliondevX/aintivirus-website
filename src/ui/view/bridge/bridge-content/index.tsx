import { FC } from 'react';
import Navbar from '@/ui/elements/navbar';
import BridgeFooter from '@/ui/view/bridge/bridge-content/bridge-footer';
import BridgeCards from '@/ui/view/bridge/bridge-content/bridge-cards';
import BridgeNftCollections from '@/ui/view/bridge/bridge-content/bridge-nft-collections';
import BridgeIntro from '@/ui/view/bridge/bridge-content/bridge-intro';
import FloatingChat from '@/ui/view/bridge/bridge-content/floating-chat';

const BridgeContent: FC = () => {
  return (
    <div className="flex flex-col gap-8 bg-radial from-[#080857] via-transparent to-transparent">
      <Navbar />
      <div className="flex flex-col w-full items-center">
        <div className="flex items-center text-center text-3xl lg:text-4.5xl gap-3">
          <p className="contents font-dotgothic text-primary lg:text-5xl">
            AINTIVIRUS
          </p>
          <p className="contents font-poppins pt-2 px-1">&nbsp; -&nbsp;</p>
          <p className="contents font-poppins pt-2">THE SECOND COMING OF&nbsp;</p>
          <p className="contents font-dotgothic text-primary lg:text-5xl">
            JOHN MCAFEE
          </p>
        </div>
      </div>

      <BridgeIntro />

      <BridgeNftCollections />

      <BridgeCards />

      <BridgeFooter />

      <FloatingChat />
    </div>
  );
};

export default BridgeContent;
