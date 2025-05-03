import { FC } from 'react';

import TransparentCard from '@/ui/elements/card/transparent-card';
import SolanaIcon from '@/ui/components/icons/solana';
import EthereumIcon from '@/ui/components/icons/ethereum';
import { ArrowRightIcon } from '@/ui/components/icons/arrow';

const BridgeIntro: FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16">
      <iframe
        width="560"
        height="315"
        className="w-full md:w-1/2"
        src="https://www.youtube.com/embed/d620AmSkbOI?si=OMTMzxszIXVWS6AU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className="w-full md:w-1/2 space-y-4 place-items-center md:place-items-start md:space-y-6">
        <h1 className="text-2xl mx-auto md:mx-0 w-fit md:text-4xl">
          <span className="text-cyan-400 font-dotgothic">JOHN MCAFEE</span>{' '}
          <span className="text-white font-poppins">IS BACK</span>
        </h1>

        <p className="text-gray-300 md:text-lg text-sm leading-relaxed text-center md:text-left !mt-0 md:!mt-4">
          Aintivirus is a crypto currency project, led by Janice McAfee, and a
          team of people that were close to John. We aim to promote the ideas of
          personal freedom, privacy, and crypto currency, while furthering the
          legacy of the man, the myth, and the legend that was John McAfee.
        </p>

        <TransparentCard className="max-w-md font-dmsans flex flex-col items-center md:items-start justify-between min-h-48 rounded-2xl">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-primary text-center md:text-left">
              Contract Address:
            </h2>

            <div className="flex items-center space-x-2 text-xs">
              <SolanaIcon />
              <p>
                <span className="text-primary font-medium">Solana (Main)</span>{' '}
                –
                <span className="ml-1 text-gray-300 break-all">
                  BAezfVmia8UYLt4rst6PCU4dvL2i2qHzqn4wGhytpNJW
                </span>
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <EthereumIcon />
              <p>
                <span className="text-primary font-medium">Ethereum</span> –
                <span className="ml-1 text-gray-300 break-all">
                  0x686c5961370db7f14f57f5a430e05deae64df504
                </span>
              </p>
            </div>
          </div>

          <button className="mt-4 px-4 py-2 w-fit bg-primary transition-all text-black rounded-full font-semibold flex items-center md:items-start md:items-center space-x-1 hover:bg-primary/50">
            <span>Buy Now</span>
            <ArrowRightIcon />
          </button>
        </TransparentCard>
      </div>
    </div>
  );
};

export default BridgeIntro;
