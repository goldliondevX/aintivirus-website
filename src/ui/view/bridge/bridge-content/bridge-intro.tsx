import { FC } from 'react';
import TransparentCard from '@/ui/elements/card/transparent-card';
import Image from 'next/image';
import SolanaIcon from '@/ui/components/icons/solana';
import EthereumIcon from '@/ui/components/icons/ethereum';
import { ArrowRightIcon } from '@/ui/components/icons/arrow';

const BridgeIntro: FC = () => {
  return (
    <div className="flex gap-16">
      <Image
        className="w-1/2 object-cover"
        src="/images/screen.png"
        alt="screen"
        layout="intrinsic"
        width={500}
        height={50}
      />
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl text-4.5xl">
          <span className="text-cyan-400 font-dotgothic">JOHN MCAFEE</span>{' '}
          <span className="text-white font-poppins">IS BACK</span>
        </h1>

        <p className="text-gray-300 leading-relaxed">
          Aintivirus is a crypto currency project, led by Janice McAfee, and a
          team of people that were close to John. We aim to promote the ideas of
          personal freedom, privacy, and crypto currency, while furthering the
          legacy of the man, the myth, and the legend that was John McAfee.
        </p>

        <TransparentCard className="max-w-md font-dmsans flex flex-col justify-between min-h-48 rounded-2xl">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-primary">
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

          <button className="mt-4 px-4 py-2 w-fit bg-primary transition-all text-black rounded-full font-semibold flex items-center space-x-1 hover:bg-primary/50">
            <span>Buy Now</span>
            <ArrowRightIcon />
          </button>
        </TransparentCard>
      </div>
    </div>
  );
};

export default BridgeIntro;
